import React from 'react';
import {Button as RebassButton} from 'rebass';

function Button({disabled, label, onClick, variant, ...otherProps}) {
  return (
    <RebassButton
      borderRadius={0}
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
