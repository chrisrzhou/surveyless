import {Box, Flex} from 'rebass';

import Button from 'components/ui/Button';
import React from 'react';
import Row from 'components/ui/Row';
import {connect} from 'react-redux';

function SurveyHeader({isCompleted, logoSrc, title, onSubmitSurvey}) {
  return (
    <Flex alignItems="center" justifyContent="space-between" width="100%">
      <Row>
        <Box
          css={{
            height: '40px',
            width: '40px',
            background: `url(${logoSrc}) center center no-repeat`,
            backgroundSize: 'cover',
          }}
        />
        <div>{title}</div>
      </Row>
      {isCompleted && <Button label="Submit" onClick={onSubmitSurvey} />}
    </Flex>
  );
}

export default connect(
  state => ({
    isCompleted: false,
    logoSrc:
      'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
    title: 'my survey',
  }),
  {onSubmitSurvey: () => console.log('submit survey')},
)(SurveyHeader);
