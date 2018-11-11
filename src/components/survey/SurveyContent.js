import {Parallax, ParallaxLayer} from 'react-spring/dist/addons';
import React, {useEffect, useRef, useState} from 'react';
import {getProgressItems, getResponseMaxQuestionIndex} from 'store/selectors';

import {Flex} from 'rebass';
import Progress from 'components/ui/Progress';
import SurveyQuestion from './SurveyQuestion';
import {connect} from 'react-redux';

function SurveyContent({progressItems, responseMaxQuestionIndex}) {
  const ref = useRef();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    responseMaxQuestionIndex,
  );
  useEffect(() => {
    ref.current.scrollTo(currentQuestionIndex);
  });

  function setQuestionIndex(index) {
    ref.current.scrollTo(index);
    setCurrentQuestionIndex(index);
  }

  const itemCount = progressItems.length;
  return (
    <>
      <Parallax
        style={{width: '100%', height: '100%'}}
        pages={itemCount}
        scrolling={false}
        horizontal
        ref={ref}>
        {progressItems.map(({id}, index) => {
          return (
            <ParallaxLayer key={id} offset={index} speed={0.2}>
              <SurveyQuestion
                questionId={id}
                onNext={
                  index < itemCount - 1
                    ? () => {
                        setQuestionIndex(index + 1);
                      }
                    : undefined
                }
              />
            </ParallaxLayer>
          );
        })}
      </Parallax>
      <Flex
        alignItems="center"
        css={{position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1}}
        justifyContent="center"
        p={2}>
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
