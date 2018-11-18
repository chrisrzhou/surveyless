import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import {composeWithDevTools} from 'redux-devtools-extension';
import draft from './draft';
import results from './results';
import storage from 'redux-persist/lib/storage';
import survey from './survey';

const rootReducer = combineReducers({
  draft,
  results,
  survey,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware()),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
