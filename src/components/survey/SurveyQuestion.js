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
    id,
    text,
    questionType,
    choiceType,
    choices,
    description,
    additionalComments,
  } = question;
  return (
    <Box mb="100px">
      <Card>
        <Heading level={2} py={3}>
          {text}
        </Heading>
        <Markdown source={description} />
        {choices.length && (
          <Box py={2}>
            <SurveyChoiceSet
              choices={choices}
              choiceType={choiceType}
              questionId={id}
              questionType={questionType}
            />
          </Box>
        )}
        {additionalComments && (
          <Box pt={5}>
            <TextArea label="Additional Comments" placeholder="" />
          </Box>
        )}
      </Card>
    </Box>
  );
}

export default connect((state, {questionId}) => ({
  question: getSurveyQuestion(state, questionId),
}))(SurveyQuestion);
