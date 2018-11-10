import {Box, Flex} from 'rebass';

import React from 'react';

function Row({children, spacing}) {
  return (
    <Flex alignItems="center">
      {React.Children.map(children, (child, i) => {
        return <Box ml={i > 0 ? spacing : undefined}>{child}</Box>;
      })}
    </Flex>
  );
}

Row.defaultProps = {
  spacing: 1,
};

export default Row;
