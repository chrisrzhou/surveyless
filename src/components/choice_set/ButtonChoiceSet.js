import Button from 'components/ui/Button';
import ChoiceSetLayout from './ChoiceSetLayout';
import React from 'react';

function ButtonChoiceSet({
  answerValue,
  choices,
  disabled,
  isMulti,
  isVertical,
  onChange,
}) {
  const answerValues = answerValue == null ? [] : answerValue;
  return (
    <ChoiceSetLayout isVertical={isVertical}>
      {choices.map((choice, index) => {
        const isActive = isMulti
          ? answerValues.includes(index)
          : answerValue === index;
        return (
          <Button
            disabled={disabled}
            key={choice}
            label={choice}
            onClick={() => {
              if (isMulti) {
                if (answerValues.includes(index)) {
                  onChange(answerValues.filter(a => a !== index));
                } else {
                  onChange([...answerValues, index]);
                }
              } else {
                onChange(index);
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
