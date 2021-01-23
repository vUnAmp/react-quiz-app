import { combineReducers } from 'redux';
import productReducer from './Product/product.reducer';
import quizReducer from './Quiz/quiz.reducer';

import userReducer from './User/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  quiz: quizReducer,
});

export default rootReducer;
