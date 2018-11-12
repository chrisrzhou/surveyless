import {Flex} from 'rebass';
import React from 'react';
import Text from './Text';

function CheckboxInput({checked, labelValue, onChange}) {
  return (
    <Flex as="label" alignItems="center">
      <input
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        type="checkbox"
      />
      <Text pl={1}>{labelValue}</Text>
    </Flex>
  );
}

export default CheckboxInput;
