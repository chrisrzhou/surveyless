import {Box, Flex} from 'rebass';

import Heading from './Heading';
import {Link} from 'gatsby';
import React from 'react';
import Text from './Text';
import src from 'images/logo.png';

function Header({logo, subtitle, title}) {
  return (
    <Flex
      bg="background"
      css={{flexShrink: 0, zIndex: 1}}
      flexDirection="column"
      px={3}>
      <Link style={{textDecoration: 'none'}} to="/">
        <Flex alignItems="center">
          <Box as="img" mr={2} src={src} width={40} />
          <Heading level={1}>{title}</Heading>
        </Flex>
      </Link>
      <Text color="secondaryText">{subtitle}</Text>
    </Flex>
  );
}

export default Header;
