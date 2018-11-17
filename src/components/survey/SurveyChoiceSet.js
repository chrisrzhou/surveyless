import {choiceTypes, questionTypes} from 'enums';

import ButtonChoiceSet from 'components/choice_set/ButtonChoiceSet';
import CheckboxChoiceSet from 'components/choice_set/CheckboxChoiceSet';
import RadioChoiceSet from 'components/choice_set/RadioChoiceSet';
import RatingChoiceSet from 'components/choice_set/RatingChoiceSet';
import React from 'react';
import SliderChoiceSet from 'components/choice_set/SliderChoiceSet';

// This component controls the combination of valid questionTypes and choiceTypes and provides a common wrapper to set responses
function SurveyChoiceSet({
  answerValue,
  choiceType,
  choices,
  onChoiceChange,
  questionType,
}) {
  switch (questionType) {
    case questionTypes.LIKERT:
    case questionTypes.SINGLE_CHOICE:
    case questionTypes.MATRIX:
      switch (choiceType) {
        case choiceTypes.RATING:
          return (
            <RatingChoiceSet
              answerValue={answerValue}
              choices={choices}
              onChange={onChoiceChange}
            />
          );
        case choiceTypes.HORIZONTAL_BUTTON:
        case choiceTypes.VERTICAL_BUTTON:
          return (
            <ButtonChoiceSet
              answerValue={answerValue}
              choices={choices}
              isMulti={false}
              isVertical={choiceType === choiceTypes.VERTICAL_BUTTON}
              onChange={onChoiceChange}
            />
          );
        case choiceTypes.HORIZONTAL_RADIO:
        case choiceTypes.VERTICAL_RADIO:
        default:
          return (
            <RadioChoiceSet
              answerValue={answerValue}
              choices={choices}
              isMulti={false}
              isVertical={choiceType === choiceTypes.VERTICAL_RADIO}
              onChange={onChoiceChange}
            />
          );
      }
    case questionTypes.MULTI_CHOICE: {
      switch (choiceType) {
        case choiceTypes.HORIZONTAL_BUTTON:
        case choiceTypes.VERTICAL_BUTTON:
          return (
            <ButtonChoiceSet
              answerValue={answerValue}
              choices={choices}
              isMulti
              isVertical={choiceType === choiceTypes.VERTICAL_BUTTON}
              onChange={onChoiceChange}
            />
          );
        case choiceTypes.HORIZONTAL_CHECKBOX:
        case choiceTypes.VERTICAL_CHECKBOX:
        default:
          return (
            <CheckboxChoiceSet
              answerValue={answerValue}
              choices={choices}
              isVertical={choiceType === choiceTypes.VERTICAL_CHECKBOX}
              onChange={onChoiceChange}
            />
          );
      }
    }
    case questionTypes.SLIDER:
      return <SliderChoiceSet onChange={onChoiceChange} />;
    case questionTypes.RANKING:
    case questionTypes.COMMENT:
    default:
      return null;
  }
}

export default SurveyChoiceSet;
