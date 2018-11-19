import React, {useEffect} from 'react';

import {Box} from 'rebass';
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
        if (!isCompleted) {
          navigate(routes.SURVEY);
        }
      }
    },
    [isCompleted],
  );
  return (
    <PageLayout header={<SurveyHeader />}>
      <Box mb="140px">{children}</Box>
    </PageLayout>
  );
}

export default connect(state => ({isCompleted: getSession(state).isCompleted}))(
  SurveyPageLayout,
);
