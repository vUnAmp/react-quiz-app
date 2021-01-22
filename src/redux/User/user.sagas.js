import userTypes from './user.types';
import { setCurrentUser } from './user.actions';

import { takeLatest, call, all, put } from 'redux-saga/effects';

import { auth, handleUserData, checkCurrentUser } from '../../firebase/utils';

export function* getSnapShotUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(handleUserData, {
      userAuth,
      additionalData,
    });
    const snapShot = yield userRef.get();

    yield put(
      setCurrentUser({
        id: snapShot.id,
        ...snapShot.data(),
      })
    );
  } catch (error) {
    console.log(error);
  }
}

// user Sign In

export function* emailSignIn({ payload: { email, password } }) {
  const userAuth = yield auth.signInWithEmailAndPassword(email, password);
  yield getSnapShotUserAuth(userAuth.user);
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.SIGN_IN_USER, emailSignIn);
}

// User Sign Up

export function* emailSignUp({ payload: { displayName, email, password } }) {
  const additionalData = { displayName };

  try {
    const userAuth = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapShotUserAuth(userAuth.user, additionalData);
  } catch (error) {
    console.log(error);
  }
}

export function* onEmailSignUpStart() {
  yield takeLatest(userTypes.SIGN_UP_USER, emailSignUp);
}

// Check User Session

export function* checkUserSession() {
  try {
    const userAuth = yield checkCurrentUser();
    if (!userAuth) return;
    yield getSnapShotUserAuth(userAuth);
  } catch (error) {
    console.log(error);
  }
}

export function* onCheckUserSessionStart() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSession);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onEmailSignUpStart),
    call(onCheckUserSessionStart),
  ]);
}
