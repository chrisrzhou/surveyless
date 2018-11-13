import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import ContentContainer from 'components/ui/ContentContainer';
import {Link} from 'gatsby';
import React from 'react';
import Text from 'components/ui/Text';
import {connect} from 'react-redux';
import {getSurveyInfo} from 'store/selectors';
import {routes} from 'enums';

function LandingContent({surveyInfo}) {
  return (
    <ContentContainer alignItems="center">
      <Card>
        <Text>{surveyInfo.info}</Text>
      </Card>
      <Link to={routes.SURVEY}>
        <Button label="Begin Survey" mt={4} />
      </Link>
    </ContentContainer>
  );
}

export default connect(state => ({
  surveyInfo: getSurveyInfo(state),
}))(LandingContent);
