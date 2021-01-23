import React, { useState, useEffect } from 'react';
import { auth, handleUserData } from '../../firebase/utils';

import { Redirect, useHistory } from 'react-router-dom';

// Redux

import { useDispatch, useSelector } from 'react-redux';
import { startSignInUser } from '../../redux/User/user.actions';
// Form

import FormInput from '../Shared/FormInput';
import Button from '../Shared/Button';
import Loading from '../Loading';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useSelector(mapState);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setLoading(false);
      history.push('/');
    }
  }, [currentUser, history]);

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(startSignInUser({ email, password }));
  };

  if (history.action === 'POP') return <Redirect to="/" />;

  return (
    <form onSubmit={handleSignIn} className="loginForm formWrap">
      <h3>Login</h3>
      {loading && <Loading />}
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

export default SignIn;
