import DraftContent from 'components/draft/DraftContent';
import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import SurveyHeader from 'components/SurveyHeader';

function DraftPage() {
  return <PageLayout header={<SurveyHeader />} content={<DraftContent />} />;
}

export default DraftPage;
