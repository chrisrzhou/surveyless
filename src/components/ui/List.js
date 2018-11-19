import {Box, Flex} from 'rebass';
import {Trail, animated} from 'react-spring';

import React from 'react';

function List({children, isCentered, isVertical, spacing}) {
  return (
    <Flex
      alignItems={isVertical ? 'flex-start' : 'center'}
      flexDirection={isVertical ? 'column' : 'row'}
      justifyContent={isVertical ? 'center' : 'flex-start'}
      flexWrap="wrap"
      mx={-spacing}
      my={-spacing}>
      <Trail
        from={{opacity: 0}}
        items={React.Children.map(children, child => child)}
        keys={item => item.key}
        native
        to={{opacity: 1}}>
        {item => style => (
          <animated.div style={style}>
            <Box m={spacing}>{item}</Box>
          </animated.div>
        )}
      </Trail>
    </Flex>
  );
}

List.defaultProps = {
  isCentered: false,
  isMobileVertical: false,
  isVertical: false,
  spacing: 1,
};

export default List;
