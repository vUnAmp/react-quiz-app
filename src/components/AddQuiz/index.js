import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Button from '../Shared/Button';
import FormInput from '../Shared/FormInput';
import './addquiz.scss';

const AddQuiz = () => {
  const initialValues = {
    question: '',
    correct_answer: '',
    wrong_answer1: '',
    wrong_answer2: '',
    wrong_answer3: '',
  };
  const dataQuestion = [...Object.keys(initialValues)];
  console.log(dataQuestion);
  const [values, setValues] = useState(initialValues);
  const [count, setCount] = useState(0);
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleAddQuiz = (e) => {
    e.preventDefault();
    // if (count === 3) return;
    setCount(count + 1);
    console.log(e.target);
    console.log(values);
  };

  if (history.action === 'POP') {
    return <Redirect to="/" />;
  }
  console.log(dataQuestion);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Add Question !</h1>
        </div>
      </div>
      {count < 5 ? (
        <form onSubmit={handleAddQuiz} className="row addQuiz">
          <FormInput
            value={values[dataQuestion[count]]}
            name={dataQuestion[count]}
            handleChange={handleChange}
            label={dataQuestion[count]}
          />

          <Button>Add</Button>
        </form>
      ) : (
        <button>Sure Add Question?</button>
      )}

      <div>
        {dataQuestion.map((item, i) => {
          return (
            <div key={i} className="row checkQuestion">
              <span className="keyQuiz">{item}</span>
              <span className="valueQuiz">{values[item]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddQuiz;
