import {Box, Flex} from 'rebass';

import {Link} from 'gatsby';
import React from 'react';
import Text from './Text';

function Header({logoSrc, subtitle, title}) {
  return (
    <Flex
      bg="background"
      css={{flexShrink: 0, zIndex: 1}}
      flexDirection="column"
      px={3}>
      <Link style={{textDecoration: 'none'}} to="/">
        <Flex alignItems="center">
          <Box
            css={{
              height: '40px',
              width: '40px',
              background: `url(${logoSrc}) center center no-repeat`,
              backgroundSize: 'cover',
            }}
            mr={2}
          />
          <Text heading={1}>{title}</Text>
        </Flex>
      </Link>
      <Text color="secondaryText">{subtitle}</Text>
    </Flex>
  );
}

export default Header;
