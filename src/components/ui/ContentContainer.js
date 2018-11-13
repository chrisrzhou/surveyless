import {Flex} from 'rebass';
import {RESPONSIVE_CONTENT_WIDTH} from 'styles/constants';
import React from 'react';

function ContentContainer({alignItems, justifyContent, children}) {
  return (
    <Flex
      alignItems={alignItems}
      css={{
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
      flexDirection="column"
      justifyContent={justifyContent}
      m="auto"
      p={3}
      width={RESPONSIVE_CONTENT_WIDTH}>
      {children}
    </Flex>
  );
}

export default ContentContainer;
