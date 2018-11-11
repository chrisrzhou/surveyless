import {combineReducers} from 'redux';
import {createReducer} from 'store/utils';

const byId = createReducer({}, {});

const allIds = createReducer([], {});

export default combineReducers({
  allIds,
  byId,
});
