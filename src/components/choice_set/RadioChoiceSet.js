import CheckboxRadioInput from 'components/ui/CheckboxRadioInput';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function RadioChoiceSet({
  answerValue,
  choices,
  disabled,
  isVertical,
  onChange,
}) {
  return (
    <ChoiceSetLayout isVertical={isVertical}>
      {choices.map((choice, index) => {
        return (
          <CheckboxRadioInput
            disabled={disabled}
            checked={answerValue === index}
            key={choice}
            labelValue={choice}
            onChange={() => {
              onChange(index);
            }}
            role="radio"
          />
        );
      })}
    </ChoiceSetLayout>
  );
}

export default RadioChoiceSet;
