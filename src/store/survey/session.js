import {createAction, createActionTypes, createReducer} from 'store/utils';

export const actionTypes = createActionTypes('survey/session', [
  'SET_CURRENT_QUESTION_ID',
  'SET_IS_COMPLETED',
]);

export const actions = {
  setCurrentQuestionIndex: createAction(actionTypes.SET_CURRENT_QUESTION_ID),
  setIsCompleted: createAction(actionTypes.SET_IS_COMPLETED),
};

const initialState = {
  currentQuestionIndex: 0,
  isCompleted: false,
};

export default createReducer(initialState, {
  [actionTypes.SET_CURRENT_QUESTION_ID]: (state, {payload}) => ({
    ...state,
    currentQuestionIndex: payload,
  }),
  [actionTypes.SET_IS_COMPLETED]: (state, {payload}) => ({
    ...state,
    isCompleted: true,
  }),
});
