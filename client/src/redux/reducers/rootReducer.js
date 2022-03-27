import { combineReducers } from 'redux';
import  userReducer  from './userReducer';
import contactReduser from './contactReduser';

export const rootReducer = combineReducers({
  userReducer,
  contactReduser
});
