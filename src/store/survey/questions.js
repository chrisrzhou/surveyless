import {createAction, createActionTypes, createReducer} from 'store/utils';

import {combineReducers} from 'redux';

export const actionTypes = createActionTypes('survey/questions', ['HYDRATE']);

export const actions = {
  hydrate: createAction(actionTypes.HYDRATE),
};

const byId = createReducer(
  {},
  {
    [actionTypes.HYDRATE]: (state, {payload}) => {
      return payload.byId;
    },
  },
);

const allIds = createReducer([], {
  [actionTypes.HYDRATE]: (state, {payload}) => {
    return payload.allIds;
  },
});

export default combineReducers({
  allIds,
  byId,
});
