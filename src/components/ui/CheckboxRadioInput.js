import {Box, Flex} from 'rebass';

import {DEFAULT_HOVER_COLOR} from 'styles/constants';
import React from 'react';
import Text from './Text';
import {keyCodes} from 'enums';

function CheckboxRadioInput({checked, labelValue, role, onChange}) {
  const hoverBackground = checked ? undefined : DEFAULT_HOVER_COLOR;
  return (
    <Flex alignItems="center">
      <Box
        ariaChecked={checked}
        bg={checked ? 'active' : 'background'}
        css={{
          border: '1px solid black',
          borderRadius: role === 'radio' ? '9999px' : undefined,
          flexShrink: 0,
          cursor: 'pointer',
          height: '16px',
          width: '16px',
          ':hover': {
            background: hoverBackground,
          },
          ':focus': {
            background: hoverBackground,
            outline: 'none',
          },
        }}
        onClick={e => onChange(!checked)}
        onKeyDown={e => {
          if ([keyCodes.SPACE, keyCodes.ENTER].includes(e.keyCode)) {
            onChange(!checked);
          }
        }}
        mr={1}
        role={role}
        tabIndex="0"
      />
      <Text pl={1}>
        <label>{labelValue}</label>
      </Text>
    </Flex>
  );
}

export default CheckboxRadioInput;
