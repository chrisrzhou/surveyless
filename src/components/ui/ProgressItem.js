import {Button, Flex} from 'rebass';

import React from 'react';

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
    color = 'active';
  } else {
    color = 'inactive';
  }
  return (
    <Flex
      alignItems="center"
      bg={color}
      css={{
        height: '16px',
        width: '16px',
        borderRadius: '9999px',
        opacity: disabled ? 0.3 : 1,
      }}
      justifyContent="center"
      m={1}>
      <Button
        bg={isActive ? color : 'white'}
        css={{
          appearance: 'none',
          borderRadius: '9999px',
          cursor: disabled ? 'not-allowed' : undefined,
          padding: '4px',
          ':focus': {
            opacity: 0.5,
            outlineWidth: 0,
          },
        }}
        disabled={disabled}
        onClick={onClick}
        title={title}
      />
    </Flex>
  );
}

export default ProgressItem;
