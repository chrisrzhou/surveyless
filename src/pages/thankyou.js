import Card from 'components/ui/Card';
import Container from 'components/ui/Container';
import Markdown from 'components/ui/Markdown';
import React from 'react';
import SurveyPageLayout from 'components/survey/SurveyPageLayout';
import {graphql} from 'gatsby';

function ThankyouPage({data}) {
  const {rawMarkdownBody} = data.allMarkdownRemark.edges[0].node;
  return (
    <SurveyPageLayout>
      <Container>
        <Card>
          <Markdown source={rawMarkdownBody} />
        </Card>
      </Container>
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
