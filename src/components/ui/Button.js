import React from 'react';
import {Button as RebassButton} from 'rebass';

function Button({active, disabled, label, onClick}) {
  return <RebassButton>{label}</RebassButton>;
}

export default Button;
