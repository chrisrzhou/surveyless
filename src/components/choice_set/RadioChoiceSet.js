import CheckboxInput from 'components/ui/CheckboxInput';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function RadioChoiceSet({answerValue, choices, config, isMulti, onChange}) {
  const answerValues = answerValue === null ? [] : answerValue;
  return (
    <ChoiceSetLayout layout={config.layout}>
      {choices.map((choice, index) => {
        const {id, text} = choice;
        return (
          <CheckboxInput
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
          />
        );
      })}
    </ChoiceSetLayout>
  );
}

export default RadioChoiceSet;
