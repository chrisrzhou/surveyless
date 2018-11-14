import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import SurveyContent from 'components/survey/SurveyContent';
import SurveyHeader from 'components/SurveyHeader';

function SurveyPage({data}) {
  return <PageLayout header={<SurveyHeader />} content={<SurveyContent />} />;
}

export default SurveyPage;
