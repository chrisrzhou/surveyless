import {Box, Flex} from 'rebass';

import React from 'react';

function Column({children, spacing}) {
  return (
    <Flex flexDirection="column" justifyContent="center">
      {React.Children.map(children, (child, i) => {
        return <Box pt={i > 0 ? spacing : undefined}>{child}</Box>;
      })}
    </Flex>
  );
}

Column.defaultProps = {
  spacing: 1,
};

export default Column;
