import {Flex} from 'rebass';
import Heading from './Heading';
import Image from './Image';
import {Link} from 'gatsby';
import React from 'react';
import Text from './Text';

function Header({src, subtitle, title}) {
  return (
    <Flex
      bg="background"
      css={{flexShrink: 0, zIndex: 1}}
      flexDirection="column"
      px={3}>
      <Flex alignItems="center">
        <Link style={{textDecoration: 'none'}} to="/">
          <Image mr={2} src={src} width={40} />
        </Link>
        <Link style={{textDecoration: 'none'}} to="/">
          <Heading level={1}>{title}</Heading>
        </Link>
      </Flex>
      <Text color="secondaryText">{subtitle}</Text>
    </Flex>
  );
}

export default Header;
