import {createAction, createActionTypes, createReducer} from 'store/utils';

export const actionTypes = createActionTypes('responses', ['SET_RESPONSE']);

export const actions = {
  setResponse: createAction(actionTypes.SET_RESPONSE),
};

const initialState = {};

export default createReducer(initialState, {
  [actionTypes.SET_RESPONSE]: (state, {payload}) => ({
    ...state,
    [payload.questionId]: payload,
  }),
});
