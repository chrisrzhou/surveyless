import {choiceSetStyles, questionTypes} from 'enums';
import {getResponseAnswerValue, getSurveyChoiceSet} from 'store/selectors';

import BaseChoiceSet from 'components/ui/BaseChoiceSet';
import RatingChoiceSet from 'components/ui/RatingChoiceSet';
import React from 'react';
import SliderChoiceSet from 'components/ui/SliderChoiceSet';
import {actions} from 'store/responses';
import {connect} from 'react-redux';

function SurveyChoiceSet({
  answerValue,
  choiceSet,
  config,
  onSetResponse,
  questionId,
  questionType,
}) {
  const {choices} = choiceSet;
  const isMulti = questionTypes.MULTI_CHOICE;
  switch (questionType) {
    case questionTypes.LIKERT:
    case questionTypes.SINGLE_CHOICE:
    case questionTypes.MULTI_CHOICE:
    case questionTypes.MATRIX:
      switch (config.style) {
        case choiceSetStyles.RATING:
          return (
            <RatingChoiceSet
              answerValue={answerValue}
              choices={choices}
              onChange={answerValue => {
                onSetResponse({questionId, answerValue});
              }}
            />
          );
        case choiceSetStyles.RADIO:
        case choiceSetStyles.BUTTON:
        case choiceSetStyles.CHECKBOX:
        default:
          return (
            <BaseChoiceSet
              answerValue={answerValue}
              isMulti={isMulti}
              choices={choices}
              config={config}
              onChange={answerValue => {
                onSetResponse({questionId, answerValue});
              }}
            />
          );
      }
    case questionTypes.SLIDER:
      return (
        <SliderChoiceSet
          choiceSet={choiceSet}
          onChange={answerValue => {
            onSetResponse({questionId, answerValue});
          }}
        />
      );
    case questionTypes.RANKING:
    case questionTypes.COMMENT:
    default:
      return null;
  }
}

export default connect(
  (state, {id, questionId}) => ({
    choiceSet: getSurveyChoiceSet(state, id),
    answerValue: getResponseAnswerValue(state, questionId),
  }),
  {
    onSetResponse: actions.setResponse,
  },
)(SurveyChoiceSet);
