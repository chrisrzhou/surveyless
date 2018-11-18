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
      p={3}>
      <Link style={{textDecoration: 'none'}} to="/">
        <Flex alignItems="center">
          <Image mr={2} src={src} width={40} />
          <Heading color="brand" level={1} my={1}>
            {title}
          </Heading>
        </Flex>
      </Link>
      <Text color="secondaryText">{subtitle}</Text>
    </Flex>
  );
}

export default Header;
