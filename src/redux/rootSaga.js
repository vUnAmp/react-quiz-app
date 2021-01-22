import { all, call } from 'redux-saga/effects';

import productSagas from './Product/product.sagas';
import userSagas from './User/user.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(productSagas)]);
}
