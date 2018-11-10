import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import SurveyHeader from './SurveyHeader';
import SurveyProgress from './SurveyProgress';
import SurveyQuestion from './SurveyQuestion';

function SurveyPage() {
  return (
    <PageLayout
      header={<SurveyHeader />}
      main={<SurveyQuestion />}
      footer={<SurveyProgress />}
    />
  );
}

export default SurveyPage;
