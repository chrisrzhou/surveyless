import {Parallax, ParallaxLayer} from 'react-spring/dist/addons';
import React, {useEffect, useRef, useState} from 'react';
import {
  getResponseMaxQuestionIndex,
  getSurveyProgressItems,
} from 'store/selectors';

import Button from 'components/ui/Button';
import {Flex} from 'rebass';
import Progress from 'components/ui/Progress';
import SurveyQuestion from './SurveyQuestion';
import {connect} from 'react-redux';
import {keyCodes} from 'enums';
import useHotKeys from 'hooks/useHotKeys';

function SurveyContent({progressItems, responseMaxQuestionIndex}) {
  const ref = useRef();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    responseMaxQuestionIndex,
  );
  useEffect(() => {
    ref.current.scrollTo(currentQuestionIndex);
    return useHotKeys({
      [keyCodes.UP]: nextQuestion,
      [keyCodes.RIGHT]: nextQuestion,
      [keyCodes.DOWN]: previousQuestion,
      [keyCodes.LEFT]: previousQuestion,
    });
  });

  function setQuestionIndex(index) {
    ref.current.scrollTo(index);
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
  return (
    <>
      <Parallax
        style={{
          // override buggy styles
          height: undefined,
          position: undefined,
        }}
        pages={totalQuestionsCount}
        scrolling={false}
        horizontal
        ref={ref}>
        {progressItems.map(({id}, index) => {
          return (
            <ParallaxLayer
              style={{
                // this is to prevent tabscrolling to 'hidden' parallax layers
                display: index !== currentQuestionIndex ? 'none' : undefined,
              }}
              key={id}
              offset={index}
              speed={0.2}>
              <SurveyQuestion
                hideNextButton={
                  currentQuestionIndex === totalQuestionsCount - 1
                }
                onNext={() => setQuestionIndex(index + 1)}
                questionId={id}
              />
            </ParallaxLayer>
          );
        })}
      </Parallax>
      <Flex
        alignItems="center"
        bg="background"
        css={{
          height: '80px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
        flexDirection="column"
        justifyContent="center"
        py={1}>
        <Flex css={{height: '40px'}}>
          {currentQuestionIndex < completedQuestionsCount && (
            <Button label="Next" onClick={nextQuestion} />
          )}
          {completedQuestionsCount === totalQuestionsCount && (
            <Button label="Submit" onClick={() => alert('submitted survey!')} />
          )}
        </Flex>
        <Flex css={{height: '40px'}}>
          <Progress
            currentIndex={currentQuestionIndex}
            items={progressItems}
            onItemClick={setQuestionIndex}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default connect(state => ({
  progressItems: getSurveyProgressItems(state),
  responseMaxQuestionIndex: getResponseMaxQuestionIndex(state),
}))(SurveyContent);
