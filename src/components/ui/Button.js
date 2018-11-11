import React from 'react';
import {Button as RebassButton} from 'rebass';

function Button({label, onClick, variant, ...otherProps}) {
  return (
    <RebassButton onClick={onClick} variant={variant} {...otherProps}>
      {label}
    </RebassButton>
  );
}

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
