import choiceSets from './choiceSets';
import {combineReducers} from 'redux';
import questions from './questions';

export default combineReducers({
  choiceSets,
  questions,
});
