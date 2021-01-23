import quizTypes from './quiz.types';

export const startAddQuestion = (data) => ({
  type: quizTypes.ADD_QUESTION,
  payload: data,
});

export const addQuestionSuccess = (addQuiz) => ({
  type: quizTypes.ADD_QUESTION_SUCCESS,
  payload: addQuiz,
});
