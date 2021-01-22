import productTyeps from './product.types';

import { takeLatest, put, all, call, takeEvery } from 'redux-saga/effects';

import { startAddProduct, addProductSuccess } from './product.actions';
import { handleAddProduct } from './product.helpers';

import { auth } from '../../firebase/utils';

export function* addProduct({ payload }) {
  const status = yield handleAddProduct(payload);
  //   yield console.log(`Product ${product} was added successfully`);
  yield put(addProductSuccess(status));
}

export function* onAddProductStart() {
  yield takeEvery(productTyeps.ADD_PRODUCT, addProduct);
}

export default function* productSagas() {
  yield all([call(onAddProductStart)]);
}
