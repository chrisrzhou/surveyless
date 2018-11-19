import CheckboxRadioInput from 'components/ui/CheckboxRadioInput';
import AnswerLayout from './AnswerLayout';
import React from 'react';

function RadioAnswer({choices, disabled, isVertical, onChange, value}) {
  return (
    <AnswerLayout isVertical={isVertical}>
      {choices.map((choice, index) => {
        return (
          <CheckboxRadioInput
            disabled={disabled}
            checked={value === index}
            key={choice}
            labelValue={choice}
            onChange={() => {
              onChange(index);
            }}
            role="radio"
          />
        );
      })}
    </AnswerLayout>
  );
}

export default RadioAnswer;
