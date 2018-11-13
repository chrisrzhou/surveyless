import Button from 'components/ui/Button';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function ButtonChoiceSet({answerValue, choices, config, isMulti, onChange}) {
  const answerValues = answerValue === null ? [] : answerValue;
  return (
    <ChoiceSetLayout layout={config.layout}>
      {choices.map((choice, index) => {
        const {id, text} = choice;
        const isActive = isMulti
          ? answerValues.includes(id)
          : answerValue === id;
        return (
          <Button
            key={id}
            label={text}
            onClick={() => {
              if (isMulti) {
                if (answerValues.includes(id)) {
                  onChange(answerValues.filter(a => a !== id));
                } else {
                  onChange([...answerValues, id]);
                }
              } else {
                onChange(id);
              }
            }}
            variant={isActive ? 'primary' : 'outline'}
          />
        );
      })}
    </ChoiceSetLayout>
  );
}

export default ButtonChoiceSet;
