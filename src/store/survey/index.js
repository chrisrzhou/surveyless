import choiceSets from './choiceSets';
import {combineReducers} from 'redux';
import info from './info';
import questions from './questions';

export default combineReducers({
  choiceSets,
  info,
  questions,
});
