import 'styles/index.css';

import {Flex} from 'rebass';
import React from 'react';

function PageLayout({header, main, footer}) {
  return (
    <Flex
      css={{height: '100vh', overflow: 'hidden'}}
      flexDirection="column"
      width={['100vw']}>
      <Flex p={2}>{header}</Flex>
      <Flex css={{flexGrow: 1}}>{main}</Flex>
      <Flex justifyContent="center" p={2}>
        {footer}
      </Flex>
    </Flex>
  );
}

export default PageLayout;
