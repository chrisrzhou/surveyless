import Card from 'components/ui/Card';
import ContentContainer from 'components/ui/ContentContainer';
import Markdown from 'components/ui/Markdown';
import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import SurveyHeader from 'components/SurveyHeader';
import {graphql} from 'gatsby';

function ThankyouPage({data}) {
  const {rawMarkdownBody} = data.allMarkdownRemark.edges[0].node;
  const content = (
    <ContentContainer alignItems="center">
      <Card>
        <Markdown source={rawMarkdownBody} />
      </Card>
    </ContentContainer>
  );
  return <PageLayout header={<SurveyHeader />} content={content} />;
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
