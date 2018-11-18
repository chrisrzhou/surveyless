import {Card} from 'rebass';
import React from 'react';
import Text from './Text';

function Button({disabled, label, onClick, variant, ...otherProps}) {
  const isPrimary = variant === 'primary';
  return (
    <Card
      as="button"
      borderColor={isPrimary ? undefined : 'brand'}
      borderRadius={0}
      bg={isPrimary ? 'brand' : 'transparent'}
      css={{
        borderStyle: 'solid',
        borderWidth: '2px',
        cursor: 'pointer',
        ':hover': {
          opacity: 0.6,
        },
        ':focus': {
          opacity: 0.6,
          outline: 'none',
        },
        ':disabled': {
          cursor: 'not-allowed',
          opacity: 0.3,
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
  variant: 'outline',
};

export default Button;
