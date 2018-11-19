import {Box, Flex} from 'rebass';
import {
  getAnswer,
  getCurrentQuestionId,
  getQuestion,
  getSession,
} from 'store/surveySelectors';

import Card from 'components/ui/Card';
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';
import Markdown from 'components/ui/Markdown';
import React from 'react';
import SurveyAnswer from './answer/SurveyAnswer';
import Text from 'components/ui/Text';
import TextArea from 'components/ui/TextArea';
import {actions} from 'store/survey/responses';
import {connect} from 'react-redux';

function SurveyQuestion({answer, onSetResponse, question, isCompleted}) {
  const {
    id,
    text,
    questionType,
    choiceType,
    choices,
    description,
    additionalComments,
    auxiliaryData,
  } = question;
  if (id == null) {
    return null;
  }
  return (
    <Container key={id}>
      <Card>
        <Box py={3}>
          <Markdown source={description} />
        </Box>
        <Heading level={2}>{text}</Heading>
        <SurveyAnswer
          auxiliaryData={auxiliaryData}
          answerValue={answer.answerValue}
          choices={choices}
          choiceType={choiceType}
          disabled={isCompleted}
          questionId={id}
          questionType={questionType}
          onAnswerChange={answerValue => {
            onSetResponse({questionId: id, answerValue});
          }}
        />
        {additionalComments && (
          <Flex flexDirection="column" pt={5}>
            <Text color="secondaryText">Additional Comments</Text>
            <TextArea
              disabled={isCompleted}
              onChange={value => {
                onSetResponse({
                  questionId: id,
                  additionalComments: value,
                });
              }}
              value={answer.additionalComments}
            />
          </Flex>
        )}
      </Card>
    </Container>
  );
}

export default connect(
  state => {
    const questionId = getCurrentQuestionId(state);
    return {
      isCompleted: getSession(state).isCompleted,
      answer: getAnswer(state, questionId),
      question: getQuestion(state, questionId),
    };
  },
  {
    onSetResponse: actions.setResponse,
  },
)(SurveyQuestion);
