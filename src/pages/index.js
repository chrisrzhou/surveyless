import Image from 'components/ui/Image';
import LandingLayout from 'components/landing/LandingLayout';
import {Link} from 'gatsby';
import React from 'react';
import {connect} from 'react-redux';

function LandingPage({description, title}) {
  return (
    <LandingLayout>
      <h1>{title}</h1>
      <p>{description}</p>
      <div style={{maxWidth: '300px', marginBottom: '1.45rem'}}>
        <Image />
      </div>
      <Link to="/draft/">Go to draft</Link>
      <Link to="/results/">Go to Results</Link>
    </LandingLayout>
  );
}

export default connect(state => ({
  title: state.survey.title,
  description: state.survey.description,
}))(LandingPage);
