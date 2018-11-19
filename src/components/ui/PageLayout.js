import {Box, Flex} from 'rebass';

import React from 'react';

function PageLayout({header, children}) {
  return (
    <Flex flexDirection="column" mx="auto" width="100vw">
      <Box
        bg="background"
        css={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      {header}
      {children}
    </Flex>
  );
}

export default PageLayout;
