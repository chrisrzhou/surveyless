import GlobalStyle from 'styles/globalStyle';
import Helmet from 'react-helmet';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import base from 'themes/base';
import {setConfig} from 'react-hot-loader';
import store from 'store';

// HACK: react-hooks bug with react-hot-loader: https://github.com/gatsbyjs/gatsby/issues/9489
setConfig({pureSFC: true});

export default function Root({element}) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={base}>
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
          <GlobalStyle />
        </div>
      </ThemeProvider>
    </StoreProvider>
  );
}
