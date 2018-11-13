import {Box, Flex} from 'rebass';

import {Link} from 'gatsby';
import List from './List';
import React from 'react';
import Text from './Text';

function Header({logoSrc, rightContent, subtitle, title}) {
  return (
    <Flex
      bg="background"
      css={{flexShrink: 0, zIndex: 1}}
      flexDirection="column"
      px={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <Link style={{textDecoration: 'none'}} to="/">
          <List spacing={2}>
            <Box
              css={{
                height: '40px',
                width: '40px',
                background: `url(${logoSrc}) center center no-repeat`,
                backgroundSize: 'cover',
              }}
            />
            <Text heading={1}>{title}</Text>
          </List>
        </Link>
        {rightContent}
      </Flex>
      <Text color="secondaryText">{subtitle}</Text>
    </Flex>
  );
}

export default Header;
