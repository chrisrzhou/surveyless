import {createAction, createActionTypes, createReducer} from 'store/utils';

export const actionTypes = createActionTypes('results', ['INITIALIZE']);

export const actions = {
  initialize: createAction(actionTypes.INITIALIZE),
};

export default createReducer(
  {},
  {
    [actionTypes.INITIALIZE]: (state, _action) => ({...state}),
  },
);
