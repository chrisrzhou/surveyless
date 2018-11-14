import {Flex} from 'rebass';
import {RESPONSIVE_CONTENT_WIDTH} from 'styles/constants';
import React from 'react';

function ContentContainer({children}) {
  return (
    <Flex
      css={{
        flexShrink: 0,
      }}
      flexDirection="column"
      m="auto"
      px={3}
      py={4}
      width={RESPONSIVE_CONTENT_WIDTH}>
      {children}
    </Flex>
  );
}

export default ContentContainer;
