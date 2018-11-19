import {Box, Flex} from 'rebass';
import {getAnswer, getQuestion} from 'store/surveySelectors';

import Card from 'components/ui/Card';
import Heading from 'components/ui/Heading';
import Markdown from 'components/ui/Markdown';
import React from 'react';
import SurveyChoiceSet from './SurveyChoiceSet';
import Text from 'components/ui/Text';
import TextArea from 'components/ui/TextArea';
import {actions} from 'store/survey/responses';
import {connect} from 'react-redux';

function SurveyQuestion({answer, onSetResponse, question}) {
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
    <Card>
      <Box py={3}>
        <Markdown source={description} />
      </Box>
      <Heading level={2}>{text}</Heading>
      {choiceType !== null && choices.length && (
        <SurveyChoiceSet
          answerValue={answer.answerValue}
          choices={choices}
          choiceType={choiceType}
          questionId={id}
          questionType={questionType}
          onChoiceChange={answerValue => {
            onSetResponse({questionId: id, answerValue});
          }}
        />
      )}
      {additionalComments && (
        <Flex flexDirection="column" pt={5}>
          <Text color="secondaryText">Additional Comments</Text>
          <TextArea
            onChange={value => {
              onSetResponse({
                questionId: id,
                additionalComments: value,
              });
            }}
            placeholder="Please provide any additional comments here"
            value={answer.additionalComments}
          />
        </Flex>
      )}
    </Card>
  );
}

export default connect(
  (state, {questionId}) => ({
    answer: getAnswer(state, questionId),
    question: getQuestion(state, questionId),
  }),
  {
    onSetResponse: actions.setResponse,
  },
)(SurveyQuestion);
