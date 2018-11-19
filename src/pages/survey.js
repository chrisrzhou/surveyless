import React, {useEffect} from 'react';

import SurveyContent from 'components/survey/SurveyContent';
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
        ...auxiliaryData // capture all other data in question into an object
      } = frontmatter;
      byId[id] = {
        id,
        text,
        questionType,
        choices,
        choiceType,
        description: rawMarkdownBody,
        additionalComments,
        auxiliaryData,
      };
    });
    onInitialize({byId, allIds: Object.keys(byId)});
  }, []);
  return <SurveyContent />;
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
            # auxiliary data fields for special question types
            sliderMaxValue
            sliderMinValue
            sliderStepValue
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
