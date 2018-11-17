import {createAction, createActionTypes, createReducer} from 'store/utils';

import {combineReducers} from 'redux';

export const actionTypes = createActionTypes('survey/questions', [
  'INITIALIZE',
]);

export const actions = {
  initialize: createAction(actionTypes.INITIALIZE),
};

const byId = createReducer(
  {},
  {
    [actionTypes.INITIALIZE]: (state, {payload}) => {
      return payload.byId;
    },
  },
);

const allIds = createReducer([], {
  [actionTypes.INITIALIZE]: (state, {payload}) => {
    return payload.allIds;
  },
});

export default combineReducers({
  allIds,
  byId,
});
