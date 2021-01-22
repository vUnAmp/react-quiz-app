import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './config';

// Redyx

import { store } from '../redux/createStore';
import { setCurrentUser } from '../redux/User/user.actions';

// Initialze App
firebase.initializeApp(firebaseConfig);

// Export auth and firestore

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Export some function

export const handleUserData = async ({ userAuth, additionalData }) => {
  const userRef = firestore.collection('users').doc(userAuth.uid);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const timestamp = new Date();
    const userRoles = ['user'];

    try {
      await userRef.set({
        email,
        createDate: timestamp,
        userRoles,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const checkCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unscribe = auth.onAuthStateChanged((userAuth) => {
      unscribe();
      resolve(userAuth);
    }, reject);
  });
};
