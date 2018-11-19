import {
  DISABLED_OPACITY,
  FOCUS_HOVER_OPACITY,
  SURVEYLESS_GRAY,
} from 'styles/constants';

import {Box} from 'rebass';
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
    color = 'brand';
  } else {
    color = 'disabled';
  }
  const item = (
    <Box
      as="button"
      bg={color}
      css={{
        appearance: 'none',
        backgroundClip: 'padding-box',
        border: '4px solid transparent',
        borderRadius: '9999px',
        boxShadow: isActive ? `0 0 0 1px ${SURVEYLESS_GRAY}` : undefined,
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 6,
        ':focus': {
          opacity: FOCUS_HOVER_OPACITY,
          outline: 'none',
        },
        ':disabled': {
          opacity: DISABLED_OPACITY,
        },
      }}
      disabled={disabled}
      onClick={onClick}
    />
  );
  return disabled ? (
    item
  ) : (
    <Tooltip position="top" content={tooltip}>
      {item}
    </Tooltip>
  );
}

export default ProgressItem;
