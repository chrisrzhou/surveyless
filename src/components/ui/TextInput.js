import {Card} from 'rebass';
import React from 'react';

function TextInput({value, onChange}) {
  return <Card variant="input">{value}</Card>;
}

export default TextInput;
