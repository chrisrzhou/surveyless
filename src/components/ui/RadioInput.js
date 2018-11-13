import {Box, Flex} from 'rebass';

import React from 'react';
import Text from './Text';
import {keyCodes} from 'enums';

function RadioInput({checked, labelValue, onChange}) {
  return (
    <Flex alignItems="center">
      <Box
        ariaChecked={checked}
        bg={checked ? 'active' : 'background'}
        css={{
          border: '1px solid black',
          borderRadius: '9999px',
          flexShrink: 0,
          cursor: 'pointer',
          height: '16px',
          width: '16px',
          ':hover': {
            background: checked ? undefined : '#efefef',
          },
        }}
        onClick={e => onChange(!checked)}
        onKeyDown={e => {
          if ([keyCodes.SPACE, keyCodes.ENTER].includes(e.keyCode)) {
            onChange(!checked);
          }
        }}
        mr={1}
        role="radio"
        tabIndex="0"
      />
      <Text pl={1}>
        <label>{labelValue}</label>
      </Text>
    </Flex>
  );
}

export default RadioInput;
