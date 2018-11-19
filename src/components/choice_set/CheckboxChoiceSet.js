import CheckboxRadioInput from 'components/ui/CheckboxRadioInput';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function CheckboxChoiceSet({
  answerValue,
  choices,
  disabled,
  isVertical,
  onChange,
}) {
  const answerValues = answerValue == null ? [] : answerValue;
  return (
    <ChoiceSetLayout isVertical={isVertical}>
      {choices.map((choice, index) => {
        return (
          <CheckboxRadioInput
            checked={answerValues.includes(index)}
            disabled={disabled}
            key={choice}
            labelValue={choice}
            onChange={checked => {
              if (checked && !answerValues.includes(index)) {
                onChange([...answerValues, index]);
              } else {
                onChange(answerValues.filter(a => a !== index));
              }
            }}
            role="checkbox"
          />
        );
      })}
    </ChoiceSetLayout>
  );
}

export default CheckboxChoiceSet;
