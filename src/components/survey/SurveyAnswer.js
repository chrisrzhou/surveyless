import {choiceTypes, questionTypes} from 'enums';

import ButtonChoiceSet from 'components/choice_set/ButtonChoiceSet';
import CheckboxChoiceSet from 'components/choice_set/CheckboxChoiceSet';
import RadioChoiceSet from 'components/choice_set/RadioChoiceSet';
import RatingChoiceSet from 'components/choice_set/RatingChoiceSet';
import React from 'react';
import SliderChoiceSet from 'components/choice_set/SliderChoiceSet';

// This component controls the valid combinations of question types and choices
function SurveyAnswer({
  answerValue,
  choiceType,
  choices,
  disabled,
  onAnswerChange,
  questionType,
}) {
  const sharedChoiceSetProps = {
    answerValue,
    disabled,
    choices,
    onChange: onAnswerChange,
  };
  switch (questionType) {
    case questionTypes.LIKERT:
    case questionTypes.SINGLE_CHOICE:
    case questionTypes.MATRIX:
      switch (choiceType) {
        case choiceTypes.RATING:
          return <RatingChoiceSet {...sharedChoiceSetProps} />;
        case choiceTypes.HORIZONTAL_BUTTON:
        case choiceTypes.VERTICAL_BUTTON:
          return (
            <ButtonChoiceSet
              isMulti={false}
              isVertical={choiceType === choiceTypes.VERTICAL_BUTTON}
              {...sharedChoiceSetProps}
            />
          );
        case choiceTypes.HORIZONTAL_RADIO:
        case choiceTypes.VERTICAL_RADIO:
        default:
          return (
            <RadioChoiceSet
              isMulti={false}
              isVertical={choiceType === choiceTypes.VERTICAL_RADIO}
              {...sharedChoiceSetProps}
            />
          );
      }
    case questionTypes.MULTI_CHOICE: {
      switch (choiceType) {
        case choiceTypes.HORIZONTAL_BUTTON:
        case choiceTypes.VERTICAL_BUTTON:
          return (
            <ButtonChoiceSet
              isMulti
              isVertical={choiceType === choiceTypes.VERTICAL_BUTTON}
              {...sharedChoiceSetProps}
            />
          );
        case choiceTypes.HORIZONTAL_CHECKBOX:
        case choiceTypes.VERTICAL_CHECKBOX:
        default:
          return (
            <CheckboxChoiceSet
              isVertical={choiceType === choiceTypes.VERTICAL_CHECKBOX}
              {...sharedChoiceSetProps}
            />
          );
      }
    }
    case questionTypes.SLIDER:
      return <SliderChoiceSet onChange={onAnswerChange} />;
    case questionTypes.RANKING:
    case questionTypes.COMMENT:
    default:
      return null;
  }
}

export default SurveyAnswer;
