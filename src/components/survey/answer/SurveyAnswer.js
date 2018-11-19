import {choiceTypes, questionTypes} from 'enums';

import ButtonAnswer from './ButtonAnswer';
import CheckboxAnswer from './CheckboxAnswer';
import RadioAnswer from './RadioAnswer';
import RatingAnswer from './RatingAnswer';
import React from 'react';
import SliderAnswer from './SliderAnswer';
import TextArea from 'components/ui/TextArea';

// This component controls the valid combinations of question types and choices
function SurveyAnswer({
  answerValue,
  auxiliaryData,
  choiceType,
  choices,
  disabled,
  onAnswerChange,
  questionType,
}) {
  const sharedAnswerProps = {
    value: answerValue,
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
          return <RatingAnswer {...sharedAnswerProps} />;
        case choiceTypes.HORIZONTAL_BUTTON:
        case choiceTypes.VERTICAL_BUTTON:
          return (
            <ButtonAnswer
              isMulti={false}
              isVertical={choiceType === choiceTypes.VERTICAL_BUTTON}
              {...sharedAnswerProps}
            />
          );
        case choiceTypes.HORIZONTAL_RADIO:
        case choiceTypes.VERTICAL_RADIO:
        default:
          return (
            <RadioAnswer
              isMulti={false}
              isVertical={choiceType === choiceTypes.VERTICAL_RADIO}
              {...sharedAnswerProps}
            />
          );
      }
    case questionTypes.MULTI_CHOICE: {
      switch (choiceType) {
        case choiceTypes.HORIZONTAL_BUTTON:
        case choiceTypes.VERTICAL_BUTTON:
          return (
            <ButtonAnswer
              isMulti
              isVertical={choiceType === choiceTypes.VERTICAL_BUTTON}
              {...sharedAnswerProps}
            />
          );
        case choiceTypes.HORIZONTAL_CHECKBOX:
        case choiceTypes.VERTICAL_CHECKBOX:
        default:
          return (
            <CheckboxAnswer
              isVertical={choiceType === choiceTypes.VERTICAL_CHECKBOX}
              {...sharedAnswerProps}
            />
          );
      }
    }
    case questionTypes.COMMENT:
      return <TextArea height={100} {...sharedAnswerProps} />;
    case questionTypes.SLIDER:
      return (
        <SliderAnswer auxiliaryData={auxiliaryData} {...sharedAnswerProps} />
      );
    case questionTypes.RANKING:
    default:
      return null;
  }
}

export default SurveyAnswer;
