import Header from 'components/ui/Header';
import {Link} from 'gatsby';
import React from 'react';
import List from 'components/ui/List';
import {connect} from 'react-redux';
import {getSurveyInfo} from 'store/selectors';
import {routes} from 'enums';

function LandingHeader({surveyInfo}) {
  const {logoSrc, subtitle, title} = surveyInfo;
  return (
    <Header
      logoSrc={logoSrc}
      rightContent={
        <List>
          <Link to={routes.DRAFT}>Draft</Link>
          <Link to={routes.RESULTS}>Results</Link>
        </List>
      }
      subtitle={subtitle}
      title={title}
    />
  );
}

export default connect(state => ({
  surveyInfo: getSurveyInfo(state),
}))(LandingHeader);
