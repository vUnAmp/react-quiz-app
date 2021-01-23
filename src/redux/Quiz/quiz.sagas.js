import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';

import { startAddQuestion, addQuestionSuccess } from './quiz.action';
import quizReducer from './quiz.reducer';
import quizTypes from './quiz.types';

import { handleAddQuestion } from './quiz.helpers';

export function* addQuestion({ payload: { values, addQuiz } }) {
  try {
    yield console.log(addQuiz);
    yield handleAddQuestion(values);
    yield alert('Question Added');
    // We can here yield put (dispatch some successfully)
    yield put(addQuestionSuccess(addQuiz));
  } catch (error) {
    yield console.log(error);
  }
}

export function* onAddQuestion() {
  yield takeEvery(quizTypes.ADD_QUESTION, addQuestion);
}

export default function* quizSagas() {
  yield all([call(onAddQuestion)]);
}
