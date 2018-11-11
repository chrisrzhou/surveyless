import {Box, Flex} from 'rebass';

import {Link} from 'gatsby';
import React from 'react';
import Row from 'components/ui/Row';
import {connect} from 'react-redux';
import {getSurveyInfo} from 'store/selectors';

function SurveyHeader({surveyInfo}) {
  const {logoSrc, subtitle, title} = surveyInfo;
  return (
    <Flex alignItems="center" justifyContent="space-between" width="100%">
      <Row>
        <Link to="/">
          <Box
            css={{
              height: '40px',
              width: '40px',
              background: `url(${logoSrc}) center center no-repeat`,
              backgroundSize: 'cover',
            }}
          />
        </Link>
        <div>{title}</div>
        <div>{subtitle}</div>
      </Row>
      <div>info-glyph</div>
    </Flex>
  );
}

export default connect(state => ({
  surveyInfo: getSurveyInfo(state),
}))(SurveyHeader);
