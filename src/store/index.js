import {combineReducers, createStore} from 'redux';
import {validateResponses, validateSurvey} from 'validators';

import draft from './draft';
import responses from './responses';
import responsesData from '_data/responses.json';
import results from './results';
import survey from './survey';
import surveyData from '_data/survey.json';

const reducer = combineReducers({
  draft,
  responses,
  results,
  survey,
});

const getPreloadedState = () => ({
  responses: validateResponses(responsesData),
  survey: validateSurvey(surveyData),
});

const reduxDevTools =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

export default createStore(reducer, getPreloadedState(), reduxDevTools);
