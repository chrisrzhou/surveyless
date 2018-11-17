import 'styles/index.css';

import Helmet from 'react-helmet';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {setConfig} from 'react-hot-loader';
import store from 'store';
import theme from './../../survey/theme.json';

// HACK: react-hooks bug with react-hot-loader: https://github.com/gatsbyjs/gatsby/issues/9489
setConfig({pureSFC: true});

export default function Root({element}) {
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
}
