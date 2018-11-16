import React from 'react';
import Text from './Text';

function Blockquote({children}) {
  return (
    <Text
      as="blockquote"
      bg="wash"
      css={`
        border-left: 8px solid #ccc;
        :before {
          color: #ccc;
          content: open-quote;
          font-size: 4em;
          line-height: 0.1em;
          vertical-align: -0.4em;
        }
        p {
          display: inline;
        }
      `}
      mx={2}
      my={3}
      p={2}>
      {children}
    </Text>
  );
}

export default Blockquote;
