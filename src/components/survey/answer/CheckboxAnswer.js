import CheckboxRadioInput from 'components/ui/CheckboxRadioInput';
import AnswerLayout from './AnswerLayout';
import React from 'react';

function CheckboxAnswer({choices, disabled, isVertical, onChange, value}) {
  const values = value == null ? [] : value;
  return (
    <AnswerLayout isVertical={isVertical}>
      {choices.map((choice, index) => {
        return (
          <CheckboxRadioInput
            checked={values.includes(index)}
            disabled={disabled}
            key={choice}
            labelValue={choice}
            onChange={checked => {
              if (checked && !values.includes(index)) {
                onChange([...values, index]);
              } else {
                onChange(values.filter(a => a !== index));
              }
            }}
            role="checkbox"
          />
        );
      })}
    </AnswerLayout>
  );
}

export default CheckboxAnswer;
