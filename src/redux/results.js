import {createAction, createActionTypes, createReducer} from './utils';

const actionTypes = createActionTypes('results', ['INITIALIZE']);

export const actions = {
  initialize: createAction(actionTypes.INITIALIZE),
};

export default createReducer(
  {test: 'b'},
  {
    [actionTypes.INITIALIZE]: (state, _action) => ({...state}),
  },
);
