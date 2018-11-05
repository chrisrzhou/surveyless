import React from 'react';
import {connect} from 'react-redux';
import {selectors} from 'redux/survey';

function DraftSurveyInfo({surveyInfo}) {
  const {description, title} = surveyInfo;
  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  );
}

export default connect(state => ({
  surveyInfo: selectors.getSurveyInfo(state.survey),
}))(DraftSurveyInfo);
