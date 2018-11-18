import React, {useEffect} from 'react';

import PageLayout from 'components/ui/PageLayout';
import SurveyHeader from 'components/SurveyHeader';
import {connect} from 'react-redux';
import {getSession} from 'store/surveySelectors';
import {navigate} from 'gatsby';
import {routes} from 'enums';

function SurveyPageLayout({children, isCompleted}) {
  useEffect(
    () => {
      if (window.location.pathname !== '/') {
        if (isCompleted) {
          navigate(routes.THANKYOU);
        } else {
          navigate(routes.SURVEY);
        }
      }
    },
    [isCompleted],
  );
  return <PageLayout header={<SurveyHeader />}>{children}</PageLayout>;
}

export default connect(state => ({isCompleted: getSession(state).isCompleted}))(
  SurveyPageLayout,
);
