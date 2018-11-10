import ProgressButton from './ProgressButton';
import React from 'react';
import Row from './Row';

function Progress({items, onItemClick}) {
  return (
    <Row>
      {items.map(({completed, disabled, id, title}) => {
        return (
          <ProgressButton
            completed={completed}
            disabled={disabled}
            id={id}
            key={id}
            title={title}
            onClick={onItemClick}
          />
        );
      })}
    </Row>
  );
}

export default Progress;
