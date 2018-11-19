import {graphql, navigate} from 'gatsby';

import Button from 'components/ui/Button';
import Card from 'components/ui/Card';
import Container from 'components/ui/Container';
import {Flex} from 'rebass';
import Markdown from 'components/ui/Markdown';
import React from 'react';
import SurveyPageLayout from 'components/survey/SurveyPageLayout';
import {routes} from 'enums';

function ThankyouPage({data}) {
  const {rawMarkdownBody} = data.allMarkdownRemark.edges[0].node;
  return (
    <SurveyPageLayout>
      <Container>
        <Card>
          <Markdown source={rawMarkdownBody} />
        </Card>
      </Container>
      <Flex justifyContent="center" mt={4}>
        <Button
          label="Review answers"
          onClick={() => navigate(routes.SURVEY)}
        />
      </Flex>
    </SurveyPageLayout>
  );
}

export default ThankyouPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/thankyou.md/"}}) {
      edges {
        node {
          rawMarkdownBody
        }
      }
    }
  }
`;
