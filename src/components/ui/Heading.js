import React from 'react';
import {Text} from 'rebass';

function Heading({level, children, ...otherProps}) {
  return (
    <Text as={`h${level}`} {...otherProps}>
      {children}
    </Text>
  );
}

export default Heading;
