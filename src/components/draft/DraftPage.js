import DraftNavBar from './DraftNavBar';
import DraftQuestion from './DraftQuestion';
import DraftSurveyInfo from './DraftSurveyInfo';
import React from 'react';

function DraftPage() {
  return (
    <>
      <DraftSurveyInfo />
      <DraftNavBar />
      <DraftQuestion />
    </>
  );
}

export default DraftPage;
