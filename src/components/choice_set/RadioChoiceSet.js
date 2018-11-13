import ChoiceSetLayout from './ChoiceSetLayout';
import RadioInput from 'components/ui/RadioInput';
import React from 'react';

function RadioChoiceSet({answerValue, choices, config, onChange}) {
  return (
    <ChoiceSetLayout layout={config.layout}>
      {choices.map((choice, index) => {
        const {id, text} = choice;
        return (
          <RadioInput
            key={id}
            checked={answerValue === id}
            labelValue={text}
            onChange={() => {
              onChange(id);
            }}
          />
        );
      })}
    </ChoiceSetLayout>
  );
}

export default RadioChoiceSet;
