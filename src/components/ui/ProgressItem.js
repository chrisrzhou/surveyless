import {Box, Button} from 'rebass';

import React from 'react';
import colors from 'styles/colors';

function ProgressItem({
  disabled,
  index,
  isActive,
  isCompleted,
  onClick,
  title,
}) {
  let color;
  if (isCompleted) {
    color = colors.active;
  } else {
    color = colors.gray;
  }
  return (
    <Button
      bg={color}
      css={{
        appearance: 'none',
        backgroundClip: 'padding-box',
        borderColor: isActive ? color : 'transparent',
        borderRadius: '9999px',
        borderStyle: 'solid',
        borderWidth: '6px',
        cursor: disabled ? 'not-allowed' : undefined,
        padding: '6px',
      }}
      disabled={disabled}
      m={1}
      onClick={onClick}
      title={title}
    />
  );
}

export default ProgressItem;
