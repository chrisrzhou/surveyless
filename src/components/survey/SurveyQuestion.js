import {Flex} from 'rebass';
import React from 'react';
import {connect} from 'react-redux';
import {getSurveyQuestion} from 'store/selectors';

function SurveyQuestion({question, onNext}) {
  return (
    <Flex alignItems="center" justifyContent="center">
      <pre>{JSON.stringify(question, null, 2)}</pre>
      {onNext && <button onClick={onNext}>next</button>}
    </Flex>
  );
}

export default connect((state, {questionId}) => ({
  question: getSurveyQuestion(state, questionId),
}))(SurveyQuestion);
