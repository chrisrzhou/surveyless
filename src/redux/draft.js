import {createAction, createActionTypes, createReducer} from './utils';

const actionTypes = createActionTypes('admin', ['SET_PREVIEW_MODE']);

const initialState = {
  isPreviewMode: false,
};

export const actions = {
  setPreviewMode: createAction(actionTypes.SET_PREVIEW_MODE),
};

export default createReducer(initialState, {
  [actionTypes.SET_PREVIEW_MODE]: (state, {payload}) => ({
    ...state,
    isPreviewMode: payload,
  }),
});
