import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import SurveyContent from './SurveyContent';
import SurveyHeader from './SurveyHeader';

function SurveyPage({questions}) {
  return <PageLayout header={<SurveyHeader />} content={<SurveyContent />} />;
}

export default SurveyPage;
