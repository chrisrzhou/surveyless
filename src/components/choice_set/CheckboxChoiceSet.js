import CheckboxRadioInput from 'components/ui/CheckboxRadioInput';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function CheckboxChoiceSet({answerValue, choices, config, onChange}) {
  const answerValues = answerValue === null ? [] : answerValue;
  return (
    <ChoiceSetLayout layout={config.layout}>
      {choices.map((choice, index) => {
        const {id, text} = choice;
        return (
          <CheckboxRadioInput
            key={id}
            checked={answerValues.includes(id)}
            labelValue={text}
            onChange={checked => {
              if (checked && !answerValues.includes(id)) {
                onChange([...answerValues, id]);
              } else {
                onChange(answerValues.filter(a => a !== id));
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
