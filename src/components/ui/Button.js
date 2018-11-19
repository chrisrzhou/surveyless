import {DISABLED_OPACITY, FOCUS_HOVER_OPACITY} from 'styles/constants';

import {Card} from 'rebass';
import React from 'react';
import Text from './Text';

function Button({disabled, label, onClick, variant, ...otherProps}) {
  const isPrimary = variant === 'primary';
  return (
    <Card
      as="button"
      borderColor="brand"
      borderRadius={0}
      bg={isPrimary ? 'brand' : 'transparent'}
      css={{
        borderStyle: 'solid',
        borderWidth: '2px',
        cursor: 'pointer',
        outline: 'none',
        ':hover': {
          opacity: FOCUS_HOVER_OPACITY,
        },
        ':disabled': {
          cursor: 'not-allowed',
          opacity: DISABLED_OPACITY,
        },
      }}
      disabled={disabled}
      onClick={onClick}
      px={3}
      py={1}
      {...otherProps}>
      <Text color={isPrimary ? 'background' : 'brand'}>{label}</Text>
    </Card>
  );
}

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
