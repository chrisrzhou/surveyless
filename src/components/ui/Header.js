import {Box, Flex} from 'rebass';

import {Link} from 'gatsby';
import React from 'react';
import Row from './Row';
import Text from './Text';

function Header({logoSrc, rightContent, subtitle, title}) {
  return (
    <Flex flexDirection="column" width="100%">
      <Flex alignItems="center" justifyContent="space-between">
        <Link style={{textDecoration: 'none'}} to="/">
          <Row spacing={2}>
            <Box
              css={{
                height: '40px',
                width: '40px',
                background: `url(${logoSrc}) center center no-repeat`,
                backgroundSize: 'cover',
              }}
            />
            <Text heading={1}>{title}</Text>
          </Row>
        </Link>
        {rightContent}
      </Flex>
      <Text color="secondaryText">{subtitle}</Text>
    </Flex>
  );
}

export default Header;
