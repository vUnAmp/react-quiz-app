import { useState, useEffect } from 'react';
import { getToken, getQuestions, configAPI } from '../../API';

import './quiz.scss';

const Quiz = () => {
  const [token, setToken] = useState('');
  const [questions, setQuestions] = useState('');
  const [count, setCount] = useState(0);
  const [point, setPoint] = useState(0);
  const [checkQuestion, setCheckQuestion] = useState('');
  const [clicked, setClicked] = useState(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    getToken().then((res) => {
      setToken(res.token);
    });
  }, []);
  const reset = () => {
    setActive(true);
    setClicked(null);
    setCheckQuestion('');
    // setPoint(0);
  };
  const handleStartGame = (e) => {
    e.preventDefault();
    setCount(0);
    setPoint(0);
    reset();
    getQuestions(token).then((questions) => {
      setQuestions(questions.results);
      console.log(questions);
    });
  };
  if (count === 10) {
    setQuestions('');
  }
  const handleAnswer = (a, b, i) => {
    if (active) {
      return () => {
        setClicked(i);
        setActive(false);
        if (a === b) {
          // setClicked(true);
          setPoint(point + 1);
          // e.target.classList.add(checkQuestion);
          setCheckQuestion('rightQuestion');
        } else {
          setCheckQuestion('falseQuestion');
          // setCount(count + 1);
        }
      };
    }
  };
  const handleNextQuestion = () => {
    reset();
    setCount(count + 1);
  };
  const ListAnswers = ({ question }) => {
    const list = [...question.incorrect_answers]
      .concat(question.correct_answer)
      .sort();
    return (
      <div className="container">
        <ul className="row">
          {list.map((answer, i) => (
            <li
              className={`col-12 col-sm-12 col-md-6 answer ${
                clicked === i && checkQuestion
              } ${!active && 'disable'} `}
              onClick={handleAnswer(answer, question.correct_answer, i)}
              key={i}
            >
              {' '}
              {atob(answer)}{' '}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  console.log(count);
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
          <div className="quizPoint container">
            <div className="row point">
              <span className="col-12">You got {point} </span>
            </div>
            <div className="row">
              {count <= 8 ? (
                <button
                  onClick={handleNextQuestion}
                  className="btn btn-primary btn-lg col-12"
                >
                  Next
                </button>
              ) : (
                !active && (
                  <button
                    onClick={handleStartGame}
                    className="btn btn-info btn-lg col-12"
                  >
                    Play again
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
