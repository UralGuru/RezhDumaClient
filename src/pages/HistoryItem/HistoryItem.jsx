import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Carousel } from 'react-carousel-minimal';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import styles from './HistoryItem.module.css';
import Button from '../../components/shared/Button/Button';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Container from '../../components/shared/Container/Container';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { fetchOneHistory } from '../../http/historyApi';
import EditHistory from '../../components/shared/HistoryModals/EditHistory/EditHistory';
import DeleteHistory from '../../components/shared/HistoryModals/DeleteHistory/DeleteHistory';

const HistoryItem = () => {
  const {userStore} = useContext(Context);

  const params = useParams();

  const [editIsOpen, setEditIsOpen] = useState(false);
  const openEditModal = () => setEditIsOpen(true);
  const closeEditModal = () => setEditIsOpen(false);

  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const openDeleteModal = () => setDeleteIsOpen(true);
  const closeDeleteModal = () => setDeleteIsOpen(false);

  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState({});

  useEffect(() => {
    fetchOneHistory(params.id).then((data) => {
      setHistory(data);
      setIsLoading(false);
    })
  }, [editIsOpen])

  if (isLoading) {
    return (
      <Spinner />
    )}

  return ( 
    <Container>
      <div className={styles.outer}>
        <BreadCrumbs data={[{'label': 'Главная', 'path': '/'}, {'label': 'История', 'path': '/history'}]}/>
        <div className={styles.inner}>
          <div className={styles.date}>{moment(history.projectsDate).format('DD.MM.YYYY')}</div>
          <div className={styles.title}>{history.title}</div>
          {history.filesNames.length != 0 &&
            <Carousel 
            data={history.filesNames.map((data) => {
              return {'image': data}
            })}
            height="400px"
            captionStyle={{
              fontSize: '2rem',
              fontWeight: '700',
            }}
            radius="1rem"
            slideNumber={true}
            slideNumberStyle={{
              fontSize: '1.5rem',
              fontWeight: '700',
            }}
            captionPosition="bottom"
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              margin: "0 auto"
            }}
          />}
          <div className={styles.description}>{history.text}</div>
          
          {(userStore.User.roles && userStore.User.roles.indexOf("ADMIN") != -1) && 
            <div className={styles.button_row}>
              <Button
                onClick={openEditModal}
                className='primary-outline'
              >Редактировать</Button>
              <Button
                onClick={openDeleteModal}
                className='primary-outline'
              >Удалить историю</Button>
              <EditHistory id={params.id} modalIsOpen={editIsOpen} closeModal={closeEditModal}/>
              <DeleteHistory id={params.id} modalIsOpen={deleteIsOpen} closeModal={closeDeleteModal}/>
            </div>
          }
        </div>
      </div>
    </Container>
  );
}

export default observer(HistoryItem);