import DraftNavBar from './DraftNavBar';
import DraftQuestion from './DraftQuestion';
import DraftSurveyInfo from './DraftSurveyInfo';
import React from 'react';

function DraftContent() {
  return (
    <>
      <DraftSurveyInfo />
      <DraftNavBar />
      <DraftQuestion />
    </>
  );
}

export default DraftContent;
