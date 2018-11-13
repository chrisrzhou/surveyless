import CheckboxRadioInput from 'components/ui/CheckboxRadioInput';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function RadioChoiceSet({answerValue, choices, config, onChange}) {
  return (
    <ChoiceSetLayout layout={config.layout}>
      {choices.map((choice, index) => {
        const {id, text} = choice;
        return (
          <CheckboxRadioInput
            key={id}
            checked={answerValue === id}
            labelValue={text}
            onChange={() => {
              onChange(id);
            }}
            role="radio"
          />
        );
      })}
    </ChoiceSetLayout>
  );
}

export default RadioChoiceSet;
