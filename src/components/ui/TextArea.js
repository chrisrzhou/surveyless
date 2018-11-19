import {DISABLED_OPACITY, SURVEYLESS_LIGHT_GRAY} from 'styles/constants';

import {Card} from 'rebass';
import React from 'react';

const BASE_HEIGHT = 40;

function TextArea({disabled, onChange, placeholder, value}) {
  return (
    <Card
      as="textarea"
      bg="background"
      borderRadius={4}
      css={{
        cursor: disabled ? 'not-allowed' : undefined,
        height: `${BASE_HEIGHT}px`,
        border: `2px solid ${SURVEYLESS_LIGHT_GRAY}`,
        transition: '0.2s ease-in',
        ':focus': {
          height: `${2 * BASE_HEIGHT}px`,
          borderColor: '#519EF7',
          outline: 'none',
        },
        ':disabled': {
          opacity: DISABLED_OPACITY,
        },
      }}
      disabled={disabled}
      my={1}
      onChange={e => onChange(e.target.value)}
      p={1}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default TextArea;
