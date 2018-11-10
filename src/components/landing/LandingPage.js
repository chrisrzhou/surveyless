import Image from 'components/ui/Image';
import {Link} from 'gatsby';
import React from 'react';
import {connect} from 'react-redux';

function LandingPage({description, title}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div style={{maxWidth: '300px', marginBottom: '1.45rem'}}>
        <Image />
      </div>
      <Link to="/draft/">Go to draft</Link>
      <Link to="/survey/">Take survey</Link>
      <Link to="/results/">Go to Results</Link>
    </div>
  );
}

export default connect(state => ({
  title: state.survey.title,
  description: state.survey.description,
}))(LandingPage);
