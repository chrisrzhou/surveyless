import {Button, Flex} from 'rebass';

import React from 'react';
import Tooltip from './Tooltip';

function ProgressItem({
  disabled,
  index,
  isActive,
  isCompleted,
  onClick,
  tooltip,
}) {
  let color;
  if (isCompleted) {
    color = 'active';
  } else {
    color = 'inactive';
  }
  return (
    <Tooltip position="top" tooltip={tooltip}>
      <Flex
        alignItems="center"
        bg={color}
        css={{
          borderRadius: '9999px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          height: '16px',
          opacity: disabled ? 0.3 : 1,
          width: '16px',
        }}
        justifyContent="center"
        m={1}
        onClick={() => !disabled && onClick()}>
        <Button
          bg={isActive ? color : 'background'}
          css={{
            appearance: 'none',
            borderRadius: '9999px',
            cursor: 'inherit',
            padding: '4px',
            ':focus': {
              opacity: 0.5,
              outlineWidth: 0,
            },
          }}
          disabled={disabled}
        />
      </Flex>
    </Tooltip>
  );
}

export default ProgressItem;
