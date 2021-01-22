import userTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const startSignInUser = (userCredentials) => ({
  type: userTypes.SIGN_IN_USER,
  payload: userCredentials,
});

export const startSignUpUser = (userCredentials) => ({
  type: userTypes.SIGN_UP_USER,
  payload: userCredentials,
});
