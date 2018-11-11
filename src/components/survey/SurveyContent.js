import {Parallax, ParallaxLayer} from 'react-spring/dist/addons';
import React, {useEffect, useRef, useState} from 'react';
import {getProgressItems, getResponseMaxQuestionIndex} from 'store/selectors';

import {Flex} from 'rebass';
import Progress from 'components/ui/Progress';
import SurveyQuestion from './SurveyQuestion';
import {connect} from 'react-redux';
import {hotkeys} from 'enums';
import useHotKeys from 'hooks/useHotKeys';

const parallaxOverrideStyle = {
  height: undefined,
  position: undefined,
};

function SurveyContent({progressItems, responseMaxQuestionIndex}) {
  const ref = useRef();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    responseMaxQuestionIndex,
  );
  useEffect(() => {
    ref.current.scrollTo(currentQuestionIndex);
    return useHotKeys({
      [hotkeys.UP]: nextQuestion,
      [hotkeys.RIGHT]: nextQuestion,
      [hotkeys.DOWN]: nextQuestion,
      [hotkeys.LEFT]: previousQuestion,
    });
  });

  function setQuestionIndex(index) {
    ref.current.scrollTo(index);
    setCurrentQuestionIndex(index);
  }

  function nextQuestion() {
    if (currentQuestionIndex < itemCount - 1) {
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

  const itemCount = progressItems.length;
  return (
    <>
      <Parallax
        style={parallaxOverrideStyle}
        pages={itemCount}
        scrolling={false}
        horizontal
        ref={ref}>
        {progressItems.map(({id}, index) => {
          return (
            <ParallaxLayer key={id} offset={index} speed={0.2}>
              <SurveyQuestion
                disableNextButton={currentQuestionIndex === itemCount - 1}
                onNext={() => setQuestionIndex(index + 1)}
                questionId={id}
              />
            </ParallaxLayer>
          );
        })}
      </Parallax>
      <Flex
        alignItems="center"
        css={{
          height: '40px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
        justifyContent="center">
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
  progressItems: getProgressItems(state),
  responseMaxQuestionIndex: getResponseMaxQuestionIndex(state),
}))(SurveyContent);
