import Card from 'components/ui/Card';
import ContentContainer from 'components/ui/ContentContainer';
import Markdown from 'components/ui/Markdown';
import React from 'react';
import SurveyPageLayout from 'components/survey/SurveyPageLayout';
import {graphql} from 'gatsby';

function ThankyouPage({data}) {
  const {rawMarkdownBody} = data.allMarkdownRemark.edges[0].node;
  return (
    <SurveyPageLayout>
      <ContentContainer alignItems="center">
        <Card>
          <Markdown source={rawMarkdownBody} />
        </Card>
      </ContentContainer>
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
