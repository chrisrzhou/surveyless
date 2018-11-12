import ProgressItem from './ProgressItem';
import React from 'react';
import Row from './Row';

function Progress({currentIndex, items, onItemClick}) {
  return (
    <Row>
      {items.map(({disabled, id, isCompleted, tooltip}, index) => {
        return (
          <ProgressItem
            disabled={disabled}
            id={id}
            isActive={currentIndex === index}
            isCompleted={isCompleted}
            key={id}
            onClick={() => onItemClick(index)}
            tooltip={tooltip}
          />
        );
      })}
    </Row>
  );
}

export default Progress;
