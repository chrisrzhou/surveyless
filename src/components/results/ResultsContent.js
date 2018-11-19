import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import Container from 'components/ui/Container';
import {Link} from 'gatsby';
import React from 'react';
import {routes} from 'enums';

function ResultsContent() {
  return (
    <Container>
      <Card>TODO (RESULTS)</Card>
      <Link to={routes.HOME}>
        <Button label="Back to home" mt={4} />
      </Link>
    </Container>
  );
}

export default ResultsContent;
