import {Flex} from 'rebass';
import {RESPONSIVE_CONTENT_WIDTH} from 'styles/constants';
import React from 'react';

function ContentContainer({children}) {
  return (
    <Flex
      css={{
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
      flexDirection="column"
      m="auto"
      p={4}
      pb="100px"
      width={RESPONSIVE_CONTENT_WIDTH}>
      {children}
    </Flex>
  );
}

ContentContainer.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
};

export default ContentContainer;
