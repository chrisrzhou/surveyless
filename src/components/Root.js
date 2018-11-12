import 'styles/index.css';

import Helmet from 'react-helmet';
import {Provider} from 'react-redux';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import base from 'themes/base';
import {setConfig} from 'react-hot-loader';
import store from 'store';

// HACK: react-hooks bug with react-hot-loader: https://github.com/gatsbyjs/gatsby/issues/9489
setConfig({pureSFC: true});

export default function Root({element}) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={base}>
        <div>
          <Helmet
            title="Surveyless"
            meta={[
              {
                name: 'description',
                content:
                  'Serverless and simple way to build, run and analyze surveys',
              },
              {
                name: 'keywords',
                content: 'survey, serverless, jamstack, gatsby, netlify',
              },
            ]}>
            <html lang="en" />
          </Helmet>
          {element}
        </div>
      </ThemeProvider>
    </Provider>
  );
}
