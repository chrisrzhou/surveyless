import React from 'react';
import {Button as RebassButton} from 'rebass';

function Button({disabled, label, onClick, variant, ...otherProps}) {
  return (
    <RebassButton
      css={{
        ':disabled': {
          cursor: 'not-allowed',
          opacity: 0.3,
        },
      }}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      {...otherProps}>
      {label}
    </RebassButton>
  );
}

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
