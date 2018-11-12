import {choiceSetStyles, questionTypes} from 'enums';
import {getResponseAnswerValue, getSurveyChoiceSet} from 'store/selectors';

import ButtonChoiceSet from 'components/choice_set/ButtonChoiceSet';
import CheckboxChoiceSet from 'components/choice_set/CheckboxChoiceSet';
import RadioChoiceSet from 'components/choice_set/RadioChoiceSet';
import RatingChoiceSet from 'components/choice_set/RatingChoiceSet';
import React from 'react';
import SliderChoiceSet from 'components/choice_set/SliderChoiceSet';
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
        case choiceSetStyles.BUTTON:
          return (
            <ButtonChoiceSet
              answerValue={answerValue}
              isMulti={isMulti}
              choices={choices}
              config={config}
              onChange={answerValue => {
                onSetResponse({questionId, answerValue});
              }}
            />
          );
        case choiceSetStyles.RADIO:
        default:
          return (
            <RadioChoiceSet
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
    case questionTypes.MULTI_CHOICE: {
      switch (config.style) {
        case choiceSetStyles.BUTTON:
          return (
            <ButtonChoiceSet
              answerValue={answerValue}
              isMulti={isMulti}
              choices={choices}
              config={config}
              onChange={answerValue => {
                onSetResponse({questionId, answerValue});
              }}
            />
          );
        case choiceSetStyles.CHECKBOX:
        default:
          return (
            <CheckboxChoiceSet
              answerValue={answerValue}
              choices={choices}
              config={config}
              onChange={answerValue => {
                onSetResponse({questionId, answerValue});
              }}
            />
          );
      }
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
