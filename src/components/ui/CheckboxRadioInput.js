import {Box, Flex} from 'rebass';

import {SURVEYLESS_LIGHT_GRAY} from 'styles/constants';
import React from 'react';
import {keyCodes} from 'enums';

function CheckboxRadioInput({checked, labelValue, role, onChange}) {
  const hoverBackground = checked ? undefined : SURVEYLESS_LIGHT_GRAY;
  return (
    <Flex
      alignItems="center"
      css={{cursor: 'pointer'}}
      onClick={e => onChange(!checked)}>
      <Box
        ariaChecked={checked}
        bg={checked ? 'brand' : 'background'}
        css={{
          border: '1px solid black',
          borderRadius: role === 'radio' ? '9999px' : undefined,
          flexShrink: 0,
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
        onKeyDown={e => {
          if ([keyCodes.SPACE, keyCodes.ENTER].includes(e.keyCode)) {
            onChange(!checked);
          }
        }}
        mr={1}
        role={role}
        tabIndex="0"
      />
      {labelValue}
    </Flex>
  );
}

export default CheckboxRadioInput;
