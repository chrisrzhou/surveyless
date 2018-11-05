import {combineReducers, createStore} from 'redux';

import draft from './draft';
import results from './results';
import survey from './survey';

const reducer = combineReducers({
  draft,
  results,
  survey,
});

const reduxDevTools =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

export default createStore(reducer, reduxDevTools);
