import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'components/ui/Heading';
import {Link} from 'gatsby';
import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import SurveyHeader from 'components/SurveyHeader';
import {routes} from 'enums';

function NotFoundPage() {
  const content = (
    <ContentContainer alignItems="center">
      <Card>
        <Heading level={1}>Page Not Found</Heading>
        <Link to={routes.HOME}>
          <Button label="Back to survey" mt={4} />
        </Link>
      </Card>
    </ContentContainer>
  );
  return <PageLayout header={<SurveyHeader />} content={content} />;
}

export default NotFoundPage;
