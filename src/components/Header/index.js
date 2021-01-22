import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

// redux

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/User/user.actions';
import AddQuestion from '../../pages/AddQuestion/addquestion';
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  return (
    <div className="boxFlex headerWrap">
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
      {currentUser ? (
        <>
          <Link
            to="/"
            onClick={() => {
              auth
                .signOut()
                .then(() => {
                  dispatch(setCurrentUser(null));
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Log Out
          </Link>
          {/* <Link to="/adminboard">Admin Board</Link> */}
          {currentUser.userRoles.includes('admin') ? (
            <Link to="/addquestion">AddQuestion</Link>
          ) : null}
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </>
      )}
    </div>
  );
};

export default Header;
