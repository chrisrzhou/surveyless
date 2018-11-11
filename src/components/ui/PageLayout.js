import 'styles/index.css';

import {Flex} from 'rebass';
import React from 'react';

function PageLayout({header, content}) {
  return (
    <Flex
      css={{height: '100vh', overflow: 'hidden'}}
      flexDirection="column"
      mx="auto"
      width={['100vw', 1200]}>
      <Flex p={2}>{header}</Flex>
      <Flex css={{flexGrow: 1}}>{content}</Flex>
    </Flex>
  );
}

export default PageLayout;
