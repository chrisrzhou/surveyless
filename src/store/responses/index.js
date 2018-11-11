import {createAction, createActionTypes, createReducer} from 'store/utils';

export const actionTypes = createActionTypes('responses', ['SET_RESPONSE']);

export const actions = {
  setResponse: createAction(actionTypes.SET_RESPONSE),
};

const initialState = {
  Q1: {
    responseId: 'R1',
    questionId: 'Q1',
    answerId: 'C1',
    answerValue: 'C1',
  },
  Q2: {
    responseId: 'R1',
    questionId: 'Q2',
    answerId: 'C1',
    answerValue: 'C1',
  },
};

export default createReducer(initialState, {
  [actionTypes.SET_RESPONSE]: (state, {payload}) => ({
    ...state,
    [payload.questionId]: payload,
  }),
});
