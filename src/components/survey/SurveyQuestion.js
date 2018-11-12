import {
  getResponseIsQuestionCompleted,
  getSurveyQuestion,
} from 'store/selectors';

import Button from 'components/ui/Button';
import ContentContainer from 'components/ui/ContentContainer';
import React from 'react';
import SurveyChoiceSet from './SurveyChoiceSet';
import Text from 'components/ui/Text';
import TextInput from 'components/ui/TextInput';
import {connect} from 'react-redux';

function SurveyQuestion({
  isQuestionCompleted,
  hideNextButton,
  onNext,
  question,
}) {
  const {
    choiceSetId,
    choiceSetLayout,
    choiceSetStyle,
    id,
    optionalCommentsText,
    text,
    type,
  } = question;
  return (
    <ContentContainer>
      <Text heading={2}>{text}</Text>
      {choiceSetId && (
        <SurveyChoiceSet
          choiceSetId={choiceSetId}
          choiceSetLayout={choiceSetLayout}
          choiceSetStyle={choiceSetStyle}
          questionId={id}
          questionType={type}
        />
      )}
      {optionalCommentsText && <TextInput value={optionalCommentsText} />}
      {!hideNextButton &&
        isQuestionCompleted && <Button label="Next" onClick={onNext} />}
    </ContentContainer>
  );
}

export default connect((state, {questionId}) => ({
  isQuestionCompleted: getResponseIsQuestionCompleted(state, questionId),
  question: getSurveyQuestion(state, questionId),
}))(SurveyQuestion);
