import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../components/shared/Container/Container';
import { deleteVotingById, fetchVotingById, fetchVotingByIdFromUser, putVote } from '../../http/votingsApi';
import moment from 'moment';
import styles from './VotingItem.module.css';
import Button from '../../components/shared/Button/Button';
import QuestionRadioItem from './QuestionRadioItem/QuestionsRadioItem';
import QuestionCheckboxItem from './QuestionCheckboxItem/QuestionCheckboxItem';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import InformationModal from '../../components/shared/InformationModal/InformationModal';

const VotingItem = () => {

  const {userStore} = useContext(Context);

  const navigate = useNavigate();
  const params = useParams();
  const [status, setStatus] = useState('');
  const [voting, setVoting] = useState({});
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const deleteAndClose = () => {
    deleteVotingById(voting.id).then(data => {
      closeModal();
      navigate(-1);
    })
  }

  useEffect(() => {
    setStatus('loading');
    if (localStorage.getItem('access-token')) {
      fetchVotingByIdFromUser(params.id).then((data) => {
        setVoting(data);
        setVotes(data.questions.map((q) => { return {'id': q.id, 'answers': []}}))
        setStatus('success');
        setDisabled(!(data.canVote));
        if (data.expirationDate) {
          setDisabled((moment(data.expirationDate) < moment()));
        }
        if (!(data.canVote) || (moment(data.expirationDate) < moment())) {
          navigate('results');
        }
      });
    } else {
      fetchVotingById(params.id).then((data) => {
        setVoting(data);
        setVotes(data.questions.map((q) => { return {'id': q.id, 'answers': []}}))
        setStatus('success');
        setDisabled(true);
      });
    }
  }, [])

  const onSubmit = () => {
    let initialError = error;
    for (let vote in votes) {
      if (!votes[vote].answers.length) {
        initialError = true;
        setError(true);
        return;
      }
      initialError = false;
      setError(false);
    }
    if (initialError) {
      return; // ?????? ?????????????? ?????????????????????????????? ??????????????
    }
    let answerData = [].concat(...votes.map((vote) => vote.answers))

    putVote(voting.id, answerData).then((data) => {
      navigate('results');
    });
  }

  if (status === 'loading') {
    return (
      <Container>
        <div className={styles.inner}>
          <h2>{voting.topic}</h2>
          <div className={styles.main}>
            
          </div>
        </div>
      </Container>
    );
  }
  
  return ( 
    <Container>
      <div className={styles.inner}>
        <BreadCrumbs data={[{'label': '??????????????', 'path': '/'}, {'label': '??????????????????????', 'path': '/votings'}, {'label': `??????????????????????`, 'path': `/votings/${params.id}`}]}/>
        <h2>{voting.topic}</h2>
        <div className={styles.main}>
          {!localStorage.getItem('access-token') &&
            <div className={styles.error}>?????????? ?????????????????????????? ???????????????????? ????????????????????????????</div>
          } 
          {!voting.canVote &&
            <div className={styles.error}>???? ?????? ?????????????????????? ?? ???????? ??????????????????????.</div>
          }
          {voting.expirationDate && (moment(voting.expirationDate) < moment()) &&
            <div className={styles.error}>?????????? ???? ?????????????????????? ?????????????? {moment(voting.expirationDate).format('DD.MM.YYYY')}</div>
          }
          <div className={styles.date}>{moment(voting.votingDate).format('DD.MM.YYYY')}</div>
          <div className={styles.questions}>
              {voting?.questions?.map((q, i) => {
                if (q.checkbox) {
                  return (<QuestionCheckboxItem 
                    key={q.id} 
                    number={i}
                    question={q}
                    votes={votes}
                    setVotes={setVotes}
                    disabled={disabled}
                  />)
                } else {
                  return (<QuestionRadioItem 
                    key={q.id} 
                    number={i}
                    question={q}
                    votes={votes}
                    setVotes={setVotes}
                    disabled={disabled}
                  />)
                }
              })}
          </div>
          { error &&
            <div className={styles.error}>
              ???????????????? ???? ?????? ?????????????? ??????????????????????
            </div>}
          <div className={styles.button_row}>
            {/* <Button
              className='primary-outline'
              onClick={() => {navigate('results')}}
              role="button"
            >????????????????????</Button> */}
            <Button
              className='primary'
              onClick={onSubmit}
              disabled={disabled}
            >??????????????????</Button>
            {(userStore.User.roles && userStore.User.roles.indexOf("ADMIN") != -1) && 
              <Button
                className='secondary-outline'
                onClick={openModal}
                role='button'
              >??????????????</Button>
            }
          </div>
        </div>
      </div>
      {(userStore.User.roles && userStore.User.roles.indexOf("ADMIN") != -1) && 
        <InformationModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        >
          <div className={styles.modal}>
            <div className={styles.modal_header}>
              ???? ?????????????? ?????? ???????????? ?????????????? ?????? ???????????????????????
            </div>
            <div className={styles.modal_content}>
              ???????????? ?? ???????????????????????? ???????????????? ???????????? ?? ?????? ???????????????????? ???? ???????????????????? ??????????????????????
            </div>
            <div className={styles.button_row}>
              <Button
                className='secondary-outline'
                role='button'
                onClick={() => closeModal()}
              >??????</Button>
              <Button
                className='primary'
                role='button'
                onClick={() => deleteAndClose()}
              >????</Button>
            </div>
          </div>
        </InformationModal>
      }
    </Container>
  );
}
 
export default observer(VotingItem);