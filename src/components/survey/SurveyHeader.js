import Header from 'components/ui/Header';
import React from 'react';
import {connect} from 'react-redux';
import {getSurveyInfo} from 'store/selectors';

function SurveyHeader({surveyInfo}) {
  const {logoSrc, subtitle, title} = surveyInfo;
  return <Header logoSrc={logoSrc} subtitle={subtitle} title={title} />;
}

export default connect(state => ({
  surveyInfo: getSurveyInfo(state),
}))(SurveyHeader);
