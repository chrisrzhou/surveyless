import React, {useEffect} from 'react';

import SurveyContent from 'components/survey/SurveyContent';
import SurveyPageLayout from 'components/survey/SurveyPageLayout';
import {actions} from 'store/survey/questions';
import {connect} from 'react-redux';
import {graphql} from 'gatsby';

function SurveyPage({data, isCompleted, onInitialize}) {
  useEffect(() => {
    const byId = {};
    data.allMarkdownRemark.edges.forEach(({node}) => {
      const {frontmatter, rawMarkdownBody} = node;
      const {
        id,
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
    });
    onInitialize({byId, allIds: Object.keys(byId)});
  }, []);
  return (
    <SurveyPageLayout>
      <SurveyContent />
    </SurveyPageLayout>
  );
}

export default connect(
  null,
  {
    onInitialize: actions.initialize,
  },
)(SurveyPage);

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//questions/.*.md/"}}
      sort: {order: ASC, fields: [frontmatter___id]}
    ) {
      edges {
        node {
          frontmatter {
            id
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
