import React, { useState } from 'react';

import styles from './QuestionRadioItem.module.css';

const QuestionRadioItem = ({number, question, votes, setVotes, disabled}) => {

  const [answer, setAnswer] = useState();

  const changeAnswer = (value) => {
    setAnswer(value);
    let newArr = votes;
    newArr[number].answers = [value];
    setVotes(newArr);
  }

  return (
    <div className={styles.question}>
      <div className={styles.question_label}>{number + 1}. {question.question}</div>
      <div className={styles.answers}>
        { question.answers.map((ans) => {
        return (
          <div key={ans.id} className={styles.answer}>
            <input 
                id={ans.id}
                name={question.question}
                value={ans.id}
                type={'radio'}
                checked={answer == ans.id}
                onChange = {(event) => {changeAnswer(event.target.value)}}
                disabled={disabled ? 'disabled' : ''}
              />
            <label htmlFor={ans.id}>
              <span>{ans.answer}</span>
            </label>
          </div>
        )})}
      </div>
    </div>
  );
}
 
export default QuestionRadioItem;