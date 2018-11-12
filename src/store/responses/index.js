import {createAction, createActionTypes, createReducer} from 'store/utils';

export const actionTypes = createActionTypes('responses', ['SET_RESPONSE']);

export const actions = {
  setResponse: createAction(actionTypes.SET_RESPONSE),
};

const initialState = {
  Q1: {
    questionId: 'Q1',
    answerValue: 'C1',
  },
  Q2: {
    questionId: 'Q2',
    answerValue: 'C3',
  },
  Q3: {
    questionId: 'Q3',
    answerValue: ['C2'],
  },
};

export default createReducer(initialState, {
  [actionTypes.SET_RESPONSE]: (state, {payload}) => ({
    ...state,
    [payload.questionId]: payload,
  }),
});
