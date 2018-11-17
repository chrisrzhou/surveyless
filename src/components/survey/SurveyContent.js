import {Box, Flex} from 'rebass';
import React, {useEffect, useState} from 'react';
import {
  getMaxRespondedQuestionIndex,
  getProgressItems,
  getSession,
} from 'store/surveySelectors';
import {keyCodes, routes} from 'enums';

import Button from 'components/ui/Button';
import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'components/ui/Heading';
import PageSpinner from 'components/ui/PageSpinner';
import Progress from 'components/ui/Progress';
import SurveyQuestion from './SurveyQuestion';
import {actions} from 'store/survey/session';
import {connect} from 'react-redux';
import {navigate} from 'gatsby';
import useHotKeys from 'hooks/useHotKeys';

function SurveyContent({
  session,
  progressItems,
  responseMaxQuestionIndex,
  onSetCurrentQuestionIndex,
  onSetIsCompleted,
}) {
  // TODO hookup to real API
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [mockSubmitTimeout, setMockSubmitTimeout] = useState();

  useEffect(() => {
    return useHotKeys({
      [keyCodes.UP]: nextQuestion,
      [keyCodes.RIGHT]: nextQuestion,
      [keyCodes.DOWN]: previousQuestion,
      [keyCodes.LEFT]: previousQuestion,
    });
  });

  useEffect(
    () => {
      return () => {
        if (mockSubmitTimeout) {
          clearTimeout(mockSubmitTimeout);
        }
      };
    },
    [hasSubmitted],
  );

  if (progressItems.length === 0) {
    return (
      <ContentContainer>
        <Heading level={2}>:( No questions to display</Heading>
      </ContentContainer>
    );
  }

  const {currentQuestionIndex, isCompleted} = session;
  const totalQuestionsCount = progressItems.length;
  const completedQuestionsCount = progressItems.filter(item => item.isCompleted)
    .length;
  const currentQuestionId =
    progressItems[Math.min(currentQuestionIndex, totalQuestionsCount - 1)].id;

  function goToQuestionIndex(questionIndex) {
    onSetCurrentQuestionIndex(questionIndex);
    window.scrollTo(0, 0);
  }

  function nextQuestion() {
    if (currentQuestionIndex < totalQuestionsCount - 1) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (!progressItems[nextQuestionIndex].disabled) {
        goToQuestionIndex(nextQuestionIndex);
      }
    }
  }

  function previousQuestion() {
    goToQuestionIndex(Math.max(0, currentQuestionIndex - 1));
  }

  function submit() {
    setIsLoading(true);
    setMockSubmitTimeout(
      setTimeout(() => {
        setIsLoading(false);
        onSetIsCompleted(true);
        navigate(routes.THANKYOU);
      }, 2000),
    );
    setHasSubmitted(true);
  }

  let button;
  if (completedQuestionsCount === totalQuestionsCount) {
    if (isCompleted) {
      button = (
        <Button
          label="Survey completed"
          onClick={() => navigate(routes.THANKYOU)}
        />
      );
    } else {
      button = <Button label="Submit Results" onClick={submit} />;
    }
  } else if (currentQuestionIndex < completedQuestionsCount) {
    button = (
      <Button
        label="Continue"
        onClick={() => goToQuestionIndex(completedQuestionsCount)}
      />
    );
  }
  return (
    <>
      {isLoading && <PageSpinner title="Submitting results" />}
      <ContentContainer key={currentQuestionId}>
        <SurveyQuestion questionId={currentQuestionId} />
      </ContentContainer>
      <Flex
        alignItems="center"
        bg="background"
        css={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
        flexDirection="column"
        justifyContent="center"
        py={2}>
        <Box pb={2}>{button}</Box>
        <Progress
          currentIndex={currentQuestionIndex}
          items={progressItems}
          onItemClick={onSetCurrentQuestionIndex}
        />
      </Flex>
    </>
  );
}

export default connect(
  state => ({
    session: getSession(state),
    progressItems: getProgressItems(state),
    responseMaxQuestionIndex: getMaxRespondedQuestionIndex(state),
  }),
  {
    onSetCurrentQuestionIndex: actions.setCurrentQuestionIndex,
    onSetIsCompleted: actions.setIsCompleted,
  },
)(SurveyContent);
