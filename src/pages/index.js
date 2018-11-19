import {graphql, navigate} from 'gatsby';

import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import Container from 'components/ui/Container';
import {Flex} from 'rebass';
import Markdown from 'components/ui/Markdown';
import React from 'react';
import SurveyPageLayout from 'components/survey/SurveyPageLayout';
import {routes} from 'enums';

function HomePage({data}) {
  const {rawMarkdownBody} = data.allMarkdownRemark.edges[0].node;
  return (
    <SurveyPageLayout>
      <Container>
        <Card>
          <Markdown source={rawMarkdownBody} />
        </Card>
        <Flex justifyContent="center" mt={4}>
          <Button label="Start" onClick={() => navigate(routes.SURVEY)} />
        </Flex>
      </Container>
    </SurveyPageLayout>
  );
}

export default HomePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/README.md/"}}) {
      edges {
        node {
          rawMarkdownBody
        }
      }
    }
  }
`;
