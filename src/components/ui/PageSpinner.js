import {Flex} from 'rebass';
import React from 'react';

function PageSpinner({title}) {
  return (
    <Flex
      bg="rgba(255, 255, 255, 0.8)"
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
      }}>
      {title}
    </Flex>
  );
}

export default PageSpinner;
