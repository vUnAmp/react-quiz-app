import quizTypes from './quiz.types';

const INITIAL_STATE = {
  addQuiz: true,
};
const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case quizTypes.ADD_QUESTION_SUCCESS:
      return {
        ...state,
        addQuiz: action.payload,
      };
    default:
      return state;
  }
};

export default quizReducer;
