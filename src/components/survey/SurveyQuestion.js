import Button from 'components/ui/Button';
import ContentContainer from 'components/ui/ContentContainer';
import {Link} from 'rebass';
import React from 'react';
import SurveyChoiceSet from './SurveyChoiceSet';
import Text from 'components/ui/Text';
import TextInput from 'components/ui/TextInput';
import {connect} from 'react-redux';
import {getSurveyQuestion} from 'store/selectors';

function SurveyQuestion({disableNextButton, onNext, question}) {
  const {
    id,
    text,
    type,
    optionalCommentsText,
    choiceSet,
    choiceSetRenderType,
  } = question;
  return (
    <ContentContainer css={{height: '100%'}}>
      <Text heading={2}>{text}</Text>
      <Link>adfdaf</Link>
      {choiceSet && (
        <SurveyChoiceSet
          choiceSet={choiceSet}
          renderType={choiceSetRenderType}
        />
      )}
      {optionalCommentsText && <TextInput value={optionalCommentsText} />}
      {!disableNextButton && <Button label="Next" onClick={onNext} />}
    </ContentContainer>
  );
}

export default connect((state, {questionId}) => ({
  question: getSurveyQuestion(state, questionId),
}))(SurveyQuestion);
