import './App.scss';
import React, { useEffect } from 'react';
import './style/main.scss';

import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Registration from './pages/Registration';
import AboutUs from './pages/About';

// redux
import { useDispatch } from 'react-redux';

import { checkUserSession } from './redux/User/user.actions';
import AdminBoard from './pages/AdminBoard';
import QuizPage from './pages/QuizPage';
import AddQuestion from './pages/AddQuestion/addquestion';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    // if (!currentUser) {
    //   auth.onAuthStateChanged((userAuth) => {
    //     console.log(userAuth);
    //     // if (userAuth) {
    //     //   handleUserData(userAuth);
    //     // }
    //   });
    // }
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route
            path="/login"
            // render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
            component={Login}
          />
          <Route path="/quiz" component={QuizPage} />
          <Route path="/registration" component={Registration} />
          <Route path="/adminboard" component={AdminBoard} />
          <Route path="/addquestion" component={AddQuestion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
