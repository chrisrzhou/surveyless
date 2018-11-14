import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import ContentContainer from 'components/ui/ContentContainer';
import {Link} from 'gatsby';
import React from 'react';
import {routes} from 'enums';

function ResultsContent() {
  return (
    <ContentContainer alignItems="center">
      <Card>TODO</Card>
      <Link to={routes.HOME}>
        <Button label="Back to home" mt={4} />
      </Link>
    </ContentContainer>
  );
}

export default ResultsContent;
