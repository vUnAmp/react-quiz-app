import { all, call } from 'redux-saga/effects';

import productSagas from './Product/product.sagas';
import userSagas from './User/user.sagas';
import quizSagas from './Quiz/quiz.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(productSagas), call(quizSagas)]);
}
