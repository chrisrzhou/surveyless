import {Box, Flex} from 'rebass';
import React, {useEffect, useState} from 'react';
import {Spring, animated, config} from 'react-spring';
import {
  getResponseMaxQuestionIndex,
  getSurveyProgressItems,
} from 'store/selectors';

import Button from 'components/ui/Button';
import ContentContainer from 'components/ui/ContentContainer';
import Progress from 'components/ui/Progress';
import SurveyQuestion from './SurveyQuestion';
import {connect} from 'react-redux';
import {keyCodes} from 'enums';
import useHotKeys from 'hooks/useHotKeys';

function SurveyContent({progressItems, responseMaxQuestionIndex}) {
  if (progressItems.length === 0) {
    return <div>No questions to display</div>;
  }
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    responseMaxQuestionIndex,
  );

  useEffect(() => {
    return useHotKeys({
      [keyCodes.UP]: nextQuestion,
      [keyCodes.RIGHT]: nextQuestion,
      [keyCodes.DOWN]: previousQuestion,
      [keyCodes.LEFT]: previousQuestion,
    });
  });

  function setQuestionIndex(index) {
    setCurrentQuestionIndex(index);
  }

  function nextQuestion() {
    if (currentQuestionIndex < totalQuestionsCount - 1) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (!progressItems[nextQuestionIndex].disabled) {
        setQuestionIndex(nextQuestionIndex);
      }
    }
  }

  function previousQuestion() {
    if (currentQuestionIndex > 0) {
      setQuestionIndex(currentQuestionIndex - 1);
    }
  }

  const totalQuestionsCount = progressItems.length;
  const completedQuestionsCount = progressItems.filter(item => item.isCompleted)
    .length;
  const currentQuestionId = progressItems[currentQuestionIndex].id;
  return (
    <>
      <ContentContainer>
        <Spring
          native
          config={config.slow}
          key={currentQuestionId}
          from={{opacity: 0, transform: 'translate3d(0, -100%, 0)'}}
          to={{opacity: 1, transform: 'translate3d(0, 0, 0)'}}>
          {style => (
            <animated.div style={style}>
              <SurveyQuestion questionId={currentQuestionId} />
            </animated.div>
          )}
        </Spring>
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
        <Box pb={2}>
          {currentQuestionIndex < completedQuestionsCount && (
            <Button label="Next" onClick={nextQuestion} />
          )}
          {completedQuestionsCount === totalQuestionsCount && (
            <Button label="Submit" onClick={() => alert('submitted survey!')} />
          )}
        </Box>
        <Progress
          currentIndex={currentQuestionIndex}
          items={progressItems}
          onItemClick={setQuestionIndex}
        />
      </Flex>
    </>
  );
}

export default connect(state => ({
  progressItems: getSurveyProgressItems(state),
  responseMaxQuestionIndex: getResponseMaxQuestionIndex(state),
}))(SurveyContent);
