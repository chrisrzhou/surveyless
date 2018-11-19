import Button from 'components/ui/Button';
import AnswerLayout from './AnswerLayout';
import React from 'react';

function ButtonAnswer({
  choices,
  disabled,
  isMulti,
  isVertical,
  onChange,
  value,
}) {
  const values = value == null ? [] : value;
  return (
    <AnswerLayout isVertical={isVertical}>
      {choices.map((choice, index) => {
        const isActive = isMulti ? values.includes(index) : value === index;
        return (
          <Button
            disabled={disabled}
            key={choice}
            label={choice}
            onClick={() => {
              if (isMulti) {
                if (values.includes(index)) {
                  onChange(values.filter(a => a !== index));
                } else {
                  onChange([...values, index]);
                }
              } else {
                onChange(index);
              }
            }}
            variant={isActive ? 'primary' : 'outline'}
          />
        );
      })}
    </AnswerLayout>
  );
}

export default ButtonAnswer;
