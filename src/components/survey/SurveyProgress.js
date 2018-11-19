import {Box, Flex} from 'rebass';
import React, {useEffect, useState} from 'react';
import {getProgressItems, getSession} from 'store/surveySelectors';
import {keyCodes, routes} from 'enums';

import Button from 'components/ui/Button';
import PageSpinner from 'components/ui/PageSpinner';
import Progress from 'components/ui/Progress';
import {actions} from 'store/survey/session';
import {connect} from 'react-redux';
import {navigate} from 'gatsby';
import useHotKeys from 'hooks/useHotKeys';

function SurveyContent({
  progressItems,
  session,
  onSetCurrentQuestionIndex,
  onSetIsCompleted,
}) {
  // TODO hookup to real API
  const [isLoading, setIsLoading] = useState(false);
  const [mockSubmitTimeout, setMockSubmitTimeout] = useState();

  useEffect(() => {
    return () => {
      if (mockSubmitTimeout) {
        clearTimeout(mockSubmitTimeout);
      }
    };
  }, []);

  useHotKeys({
    [keyCodes.UP]: nextQuestion,
    [keyCodes.RIGHT]: nextQuestion,
    [keyCodes.DOWN]: previousQuestion,
    [keyCodes.LEFT]: previousQuestion,
  });

  const {currentQuestionIndex, isCompleted} = session;

  const totalQuestionsCount = progressItems.length;
  const lastCompletedQuestionIndex = progressItems.filter(
    item => item.isCompleted,
  ).length;

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

  function continueSurvey() {
    goToQuestionIndex(lastCompletedQuestionIndex);
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
  }

  let button;
  if (isCompleted) {
    button = (
      <Button
        label="Survey completed"
        onClick={() => navigate(routes.THANKYOU)}
      />
    );
  } else {
    if (lastCompletedQuestionIndex === totalQuestionsCount) {
      button = <Button label="Submit results" onClick={submit} />;
    } else if (currentQuestionIndex < lastCompletedQuestionIndex) {
      button = <Button label="Continue" onClick={continueSurvey} />;
    }
  }
  return (
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
      {isLoading && <PageSpinner title="Submitting results" />}
    </Flex>
  );
}

export default connect(
  state => ({
    progressItems: getProgressItems(state),
    session: getSession(state),
  }),
  {
    onSetCurrentQuestionIndex: actions.setCurrentQuestionIndex,
    onSetIsCompleted: actions.setIsCompleted,
  },
)(SurveyContent);
