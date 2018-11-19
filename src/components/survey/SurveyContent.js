import React from 'react';
import SurveyPageLayout from './SurveyPageLayout';
import SurveyProgress from './SurveyProgress';
import SurveyQuestion from './SurveyQuestion';

function SurveyContent() {
  return (
    <SurveyPageLayout>
      <SurveyQuestion />
      <SurveyProgress />
    </SurveyPageLayout>
  );
}

export default SurveyContent;
