import {combineReducers, createStore} from 'redux';

import draft from './draft';
import responses from './responses';
import results from './results';
import survey from './survey';

const reducer = combineReducers({
  draft,
  responses,
  results,
  survey,
});

const reduxDevTools =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

export default createStore(reducer, reduxDevTools);
