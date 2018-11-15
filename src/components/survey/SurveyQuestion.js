import {Box} from 'rebass';
import Card from 'components/ui/Card';
import Heading from 'components/ui/Heading';
import Markdown from 'components/ui/Markdown';
import React from 'react';
import SurveyChoiceSet from './SurveyChoiceSet';
import TextArea from 'components/ui/TextArea';
import {connect} from 'react-redux';
import {getSurveyQuestion} from 'store/selectors';

function SurveyQuestion({question}) {
  const {
    choiceSetId,
    choiceSetConfig,
    description,
    id,
    optionalCommentsText,
    text,
    type,
  } = question;
  return (
    <Box mb="100px">
      <Card>
        <Heading level={2} py={3}>
          {text}
        </Heading>
        <Markdown html={description} />
        {choiceSetId && (
          <Box py={2}>
            <SurveyChoiceSet
              id={choiceSetId}
              config={choiceSetConfig}
              questionId={id}
              questionType={type}
            />
          </Box>
        )}
        {optionalCommentsText && (
          <Box pt={5}>
            <TextArea label={optionalCommentsText} placeholder="" />
          </Box>
        )}
      </Card>
    </Box>
  );
}

export default connect((state, {questionId}) => ({
  question: getSurveyQuestion(state, questionId),
}))(SurveyQuestion);
