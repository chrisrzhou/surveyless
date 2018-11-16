import CheckboxRadioInput from 'components/ui/CheckboxRadioInput';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function CheckboxChoiceSet({answerValue, choices, isVertical, onChange}) {
  const answerValues = answerValue === null ? [] : answerValue;
  return (
    <ChoiceSetLayout isVertical={isVertical}>
      {choices.map((choice, index) => {
        return (
          <CheckboxRadioInput
            key={choice}
            checked={answerValues.includes(index)}
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
