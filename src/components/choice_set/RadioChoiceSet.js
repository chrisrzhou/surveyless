import CheckboxRadioInput from 'components/ui/CheckboxRadioInput';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function RadioChoiceSet({answerValue, choices, isVertical, onChange}) {
  return (
    <ChoiceSetLayout isVertical={isVertical}>
      {choices.map((choice, index) => {
        return (
          <CheckboxRadioInput
            key={choice}
            checked={answerValue === index}
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
