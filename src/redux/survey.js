import {createAction, createActionTypes, createReducer} from './utils';

import {SURVEY_MODE} from 'enums';
import surveyData from '_data/survey.json';
import {validateSurvey} from 'validators';

const actionTypes = createActionTypes('survey', ['INITIALIZE']);

const initialState = {
  title: 'Surveyless Survey',
  description:
    'Serverless and simple way to build, run and analyze survey results',
  mode: SURVEY_MODE.DRAFT,
  openDate: null,
  closeDate: null,
  questionById: {},
  allQuestionIds: [],
  ...validateSurvey(surveyData),
};

export const actions = {
  initialize: createAction(actionTypes.INITIALIZE),
};

export const selectors = {
  getSurveyInfo: state => ({
    title: state.title,
    description: state.description,
  }),
};

export default createReducer(initialState, {
  [actionTypes.INITIALIZE]: (state, _action) => ({...state}),
});
