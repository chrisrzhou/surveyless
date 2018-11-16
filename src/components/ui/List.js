import {Box, Flex} from 'rebass';
import {Trail, animated} from 'react-spring';

import React from 'react';

function List({children, isCentered, isMobileVertical, isVertical, spacing}) {
  return (
    <Flex
      alignItems={
        isVertical
          ? 'flex-start'
          : isMobileVertical
          ? ['flex-start', 'center']
          : 'center'
      }
      flexDirection={
        isVertical ? 'column' : isMobileVertical ? ['column', 'row'] : 'row'
      }
      justifyContent={
        isVertical
          ? 'center'
          : isMobileVertical
          ? ['center', 'flex-start']
          : isCentered
          ? 'center'
          : 'flex-start'
      }
      flexWrap="wrap"
      mx={-spacing}
      my={-spacing}>
      <Trail
        from={{opacity: 0, transform: 'scale(0)'}}
        items={React.Children.map(children, child => child)}
        keys={item => item.key}
        native
        to={{opacity: 1, transform: 'scale(1)'}}>
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
