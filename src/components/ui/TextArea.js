import {Card, Flex} from 'rebass';

import {DEFAULT_HOVER_COLOR} from 'styles/constants';
import React from 'react';
import Text from './Text';

const BASE_HEIGHT = 30;

function TextArea({label, onChange}) {
  return (
    <Flex flexDirection="column">
      <Text as="label" color="secondaryText" py={1}>
        {label}
      </Text>
      <Card
        as="textarea"
        bg="background"
        borderColor="disabled"
        borderRadius={4}
        boxShadow="0 2px 2px rgba(0, 0, 0, 0.25)"
        css={{
          height: `${BASE_HEIGHT}px`,
          border: `1px solid ${DEFAULT_HOVER_COLOR}`,
          transition: '0.2s ease-in',
          ':focus': {
            height: `${2 * BASE_HEIGHT}px`,
          },
        }}
        my={1}
        p={1}
      />
    </Flex>
  );
}

export default TextArea;
