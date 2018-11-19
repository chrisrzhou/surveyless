import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import Container from 'components/ui/Container';
import {Link} from 'gatsby';
import React from 'react';
import {routes} from 'enums';

function DraftContent() {
  return (
    <Container>
      <Card>TODO (DRAFT)</Card>
      <Link to={routes.HOME}>
        <Button label="Back to home" mt={4} />
      </Link>
    </Container>
  );
}

export default DraftContent;
