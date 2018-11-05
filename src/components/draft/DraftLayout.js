import DraftNavBar from './DraftNavBar';
import DraftQuestion from './DraftQuestion';
import DraftSurveyInfo from './DraftSurveyInfo';
import React from 'react';

export default function DraftLayout() {
  return (
    <>
      <DraftSurveyInfo />
      <DraftNavBar />
      <DraftQuestion />
    </>
  );
}
