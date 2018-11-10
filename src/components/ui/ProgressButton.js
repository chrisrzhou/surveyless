import {Button} from 'rebass';
import React from 'react';
import colors from 'styles/colors';

function ProgressButton({completed, disabled, id, title, onClick}) {
  return (
    <Button
      bg={completed ? colors.active : colors.gray}
      css={{
        appearance: 'none',
        cursor: disabled ? 'not-allowed' : undefined,
        border: '4px solid transparent',
        backgroundClip: 'padding-box',
        borderRadius: '9999px',
        padding: '6px',
      }}
      disabled={disabled}
      title={title}
      onClick={() => onClick(id)}
    />
  );
}

export default ProgressButton;
