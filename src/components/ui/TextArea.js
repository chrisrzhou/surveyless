import {Card} from 'rebass';
import {DEFAULT_HOVER_COLOR} from 'styles/constants';
import React from 'react';

const BASE_HEIGHT = 40;

function TextArea({onChange, placeholder, value}) {
  return (
    <Card
      as="textarea"
      bg="background"
      borderColor="disabled"
      borderRadius={4}
      boxShadow="0 2px 2px rgba(0, 0, 0, 0.25)"
      css={{
        height: `${BASE_HEIGHT}px`,
        border: `2px solid ${DEFAULT_HOVER_COLOR}`,
        transition: '0.2s ease-in',
        ':focus': {
          height: `${2 * BASE_HEIGHT}px`,
        },
      }}
      my={1}
      onChange={e => onChange(e.target.value)}
      p={1}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default TextArea;
