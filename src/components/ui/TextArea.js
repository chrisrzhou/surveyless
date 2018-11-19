import {DISABLED_OPACITY, SURVEYLESS_LIGHT_GRAY} from 'styles/constants';

import {Card} from 'rebass';
import React from 'react';

function TextArea({disabled, height, onChange, placeholder, value}) {
  return (
    <Card
      as="textarea"
      bg="background"
      borderRadius={4}
      css={{
        cursor: disabled ? 'not-allowed' : undefined,
        height,
        border: `2px solid ${SURVEYLESS_LIGHT_GRAY}`,
        resize: 'vertical',
        transition: '0.2s ease-in',
        ':focus': {
          height: 2 * height,
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
      value={value}
      width="100%"
    />
  );
}

TextArea.defaultProps = {
  height: 50,
};

export default TextArea;
