import ContentContainer from 'components/ui/ContentContainer';
import {Flex} from 'rebass';
import React from 'react';
import SurveyChoiceSet from './SurveyChoiceSet';
import Text from 'components/ui/Text';
import TextInput from 'components/ui/TextInput';
import {connect} from 'react-redux';
import {getSurveyQuestion} from 'store/selectors';

function SurveyQuestion({question}) {
  const {
    choiceSetId,
    choiceSetConfig,
    id,
    optionalCommentsText,
    text,
    type,
  } = question;
  return (
    <ContentContainer mb={100}>
      <Flex flexDirection="column">
        <Text heading={2}>{text}</Text>
        {choiceSetId && (
          <SurveyChoiceSet
            id={choiceSetId}
            config={choiceSetConfig}
            questionId={id}
            questionType={type}
          />
        )}
        {optionalCommentsText && <TextInput value={optionalCommentsText} />}
      </Flex>
    </ContentContainer>
  );
}

export default connect((state, {questionId}) => ({
  question: getSurveyQuestion(state, questionId),
}))(SurveyQuestion);
