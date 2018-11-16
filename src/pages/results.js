import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import ResultsContent from 'components/results/ResultsContent';
import SurveyHeader from 'components/SurveyHeader';

function ResultsPage() {
  return <PageLayout header={<SurveyHeader />} content={<ResultsContent />} />;
}

export default ResultsPage;
