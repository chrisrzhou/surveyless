import Container from './Container';
import {Flex} from 'rebass';
import Heading from './Heading';
import Image from './Image';
import {Link} from 'gatsby';
import React from 'react';
import Text from './Text';

function Header({src, subtitle, title}) {
  return (
    <Container>
      <Link style={{textDecoration: 'none'}} to="/">
        <Flex alignItems="center">
          <Image mr={2} src={src} height={30} />
          <Heading color="brand" level={1} my={1}>
            {title}
          </Heading>
        </Flex>
      </Link>
      <Text color="secondaryText">{subtitle}</Text>
    </Container>
  );
}

export default Header;
