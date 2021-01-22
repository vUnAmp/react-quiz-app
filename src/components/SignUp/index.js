import React, { useState, useEffect } from 'react';
import { auth, firestore, handleUserData } from '../../firebase/utils';

// Redux
import { startSignUpUser } from '../../redux/User/user.actions';
import { useDispatch, useSelector } from 'react-redux';

import { Redirect, useHistory } from 'react-router-dom';
import FormInput from '../Shared/FormInput';
import Button from '../Shared/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useSelector(mapState);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);

  const handleSignUp = (e) => {
    e.preventDefault();

    dispatch(
      startSignUpUser({
        displayName: name,
        email,
        password,
      })
    );

    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userAuth) => {
    //     console.log(userAuth);
    //     firestore
    //       .collection('users')
    //       .doc(userAuth.user.uid)
    //       .set({
    //         displayName: name,
    //         email,
    //         createdDate: new Date(),
    //         userRoles: ['user'],
    //       })
    //       .then(() => {
    //         handleUserData(userAuth.user);
    //         history.push('/');
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  if (history.action === 'POP') return <Redirect to="/" />;
  return (
    <form onSubmit={handleSignUp} className="loginForm formWrap">
      <h3>Registration</h3>
      <FormInput
        value={name}
        handleChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Your Name"
        required
      />
      <FormInput
        value={email}
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Email"
        required
      />

      <FormInput
        value={password}
        handleChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
        required
      />

      <Button>Submit</Button>
    </form>
  );
};

export default SignUp;
