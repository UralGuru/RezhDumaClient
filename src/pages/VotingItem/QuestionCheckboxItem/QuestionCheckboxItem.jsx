import React, { useState } from 'react';

import styles from './QuestionCheckboxItem.module.css';

const QuestionCheckboxItem = ({number, question, votes, setVotes, disabled}) => {

  const [answers, setAnswers] = useState([]);

  const changeAnswer = (value) => {
    let newAnswers = answers;
    if (answers.includes(value)) {
      newAnswers = answers.filter((ans) => {
        return ans != value;
      });
      setAnswers(newAnswers);
    } else {
      newAnswers.push(value);
      setAnswers(newAnswers);
    }
    let newArr = votes;
    newArr[number].answers = newAnswers;
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
              type={'checkbox'}
              onChange={(event) => {changeAnswer(event.target.value)}}
              disabled={disabled ? 'disabled' : ''}
            />
            <label htmlFor={ans.id}>{ans.answer}</label>
          </div>
        )})}
      </div>
    </div>
  );
}
 
export default QuestionCheckboxItem;