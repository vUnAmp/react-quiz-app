import { useState, useEffect } from 'react';
import { getToken, getQuestions, configAPI } from '../../API';

import './quiz.css';

const Quiz = () => {
  const [token, setToken] = useState('');
  const [questions, setQuestions] = useState('');
  const [count, setCount] = useState(0);
  const [point, setPoint] = useState(0);

  useEffect(() => {
    getToken().then((res) => {
      setToken(res.token);
    });
  }, []);
  const handleStartGame = (e) => {
    e.preventDefault();
    getQuestions(token).then((questions) => {
      setQuestions(questions.results);
      console.log(questions);
    });
  };
  if (count === 10) {
    setQuestions('');
  }
  const handleAnswer = (a, b) => {
    return () => {
      if (a === b) {
        setPoint(point + 1);
        setCount(count + 1);
      } else {
        setCount(count + 1);
      }
    };
  };
  const ListAnswers = ({ question }) => {
    const list = [...question.incorrect_answers]
      .concat(question.correct_answer)
      .sort();
    return (
      <ul>
        {list.map((answer, i) => (
          <li onClick={handleAnswer(answer, question.correct_answer)} key={i}>
            {' '}
            {atob(answer)}{' '}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <button onClick={handleStartGame}>Start Game</button>
      {questions && (
        <div className="wrapQuestions">
          <span className="quizQuestion">
            {' '}
            {atob(questions[count].question)}{' '}
          </span>
          <div className="quizAnswers">
            <ListAnswers question={questions[count]} />
          </div>
          <div className="quizPoint">
            <span>You got {point} </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
