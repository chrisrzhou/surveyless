import 'styles/index.css';

import Helmet from 'react-helmet';
import PageSpinner from 'components/ui/PageSpinner';
import {PersistGate} from 'redux-persist/integration/react';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import configureStore from 'store/configureStore';
import {setConfig} from 'react-hot-loader';
import theme from './../../survey/theme.json';

// HACK: react-hooks bug with react-hot-loader: https://github.com/gatsbyjs/gatsby/issues/9489
setConfig({pureSFC: true});

const {store, persistor} = configureStore();

export default function Root({element}) {
  return (
    <StoreProvider store={store}>
      <PersistGate
        loading={<PageSpinner title="Loading survey" />}
        persistor={persistor}>
        <ThemeProvider theme={theme}>
          <div>
            <Helmet
              title="surveyless"
              meta={[
                {
                  name: 'description',
                  content: 'Build, run, and analyze simple serverless surveys.',
                },
                {
                  name: 'keywords',
                  content:
                    'survey, serverless, jamstack, gatsby, netlify, react, redux, markdown, visualization, data',
                },
              ]}>
              <html lang="en" />
            </Helmet>
            {element}
          </div>
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
}
