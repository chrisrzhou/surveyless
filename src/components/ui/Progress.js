import List from './List';
import ProgressItem from './ProgressItem';
import React from 'react';

function Progress({currentIndex, items, onItemClick}) {
  return (
    <List isCentered spacing={0}>
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
    </List>
  );
}

export default Progress;
