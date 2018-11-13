import {Card, Flex} from 'rebass';

import React from 'react';
import Text from './Text';

function TextArea({label, onChange}) {
  return (
    <Flex flexDirection="column">
      <Text as="label" color="secondaryText" py={1}>
        {label}
      </Text>
      <Card>Adfadf</Card>
    </Flex>
  );
}

export default TextArea;
