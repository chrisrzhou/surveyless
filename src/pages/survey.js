import Markdown from 'components/ui/Markdown';
import PageLayout from 'components/ui/PageLayout';
import React from 'react';
import SurveyContent from 'components/survey/SurveyContent';
import SurveyHeader from 'components/SurveyHeader';
import {graphql} from 'gatsby';

function SurveyPage({data}) {
  return <PageLayout header={<SurveyHeader />} content={<SurveyContent />} />;
}

export default SurveyPage;

// hydrate redux state with this
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//questions/.*.md/"}}
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
