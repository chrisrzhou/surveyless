import React, {useEffect} from 'react';

import PageLayout from 'components/ui/PageLayout';
import SurveyContent from 'components/survey/SurveyContent';
import SurveyHeader from 'components/SurveyHeader';
import {actions} from 'store/survey/questions';
import {connect} from 'react-redux';
import {graphql} from 'gatsby';

function SurveyPage({data, onHydrate}) {
  useEffect(() => {
    const byId = {};
    const allIds = [];
    data.allMarkdownRemark.edges.forEach(({node}) => {
      const {frontmatter, rawMarkdownBody, parent} = node;
      const id = parent.name;
      const {
        text,
        questionType,
        choices,
        choiceType,
        additionalComments,
      } = frontmatter;
      byId[id] = {
        id,
        text,
        questionType,
        choices,
        choiceType,
        description: rawMarkdownBody,
        additionalComments,
      };
      allIds.push(id);
    });
    onHydrate({byId, allIds});
  });
  return <PageLayout header={<SurveyHeader />} content={<SurveyContent />} />;
}

export default connect(
  null,
  {
    onHydrate: actions.hydrate,
  },
)(SurveyPage);

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//questions/.*.md/"}}
      sort: {order: ASC, fields: [fileAbsolutePath]}
    ) {
      edges {
        node {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            text
            questionType
            choices
            choiceType
            additionalComments
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
