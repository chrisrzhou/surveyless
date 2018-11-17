import {combineReducers} from 'redux';
import questions from './questions';
import responses from './responses';
import session from './session';

export default combineReducers({
  questions,
  responses,
  session,
});
