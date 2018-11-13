import {Box} from 'rebass';
import Card from 'components/ui/Card';
import React from 'react';
import SurveyChoiceSet from './SurveyChoiceSet';
import Text from 'components/ui/Text';
import TextArea from 'components/ui/TextArea';
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
    <Box mb="100px">
      <Card>
        <Text heading={2}>{text}</Text>
        {choiceSetId && (
          <SurveyChoiceSet
            id={choiceSetId}
            config={choiceSetConfig}
            questionId={id}
            questionType={type}
          />
        )}
        {optionalCommentsText && (
          <Box py={4}>
            <TextArea label={optionalCommentsText} placeholder="" />
          </Box>
        )}
      </Card>
    </Box>
  );
}

export default connect((state, {questionId}) => ({
  question: getSurveyQuestion(state, questionId),
}))(SurveyQuestion);
