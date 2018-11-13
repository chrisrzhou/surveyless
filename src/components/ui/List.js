import {Box, Flex} from 'rebass';
import {Trail, animated, config} from 'react-spring';

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
      flexWrap="wrap">
      <Trail
        config={{...config.gentle, precision: 0.6}}
        from={{transform: 'translate3d(0,-100%, 0)'}}
        items={React.Children.map(children, child => child)}
        keys={item => item.key}
        native
        to={{transform: 'translate3d(0,0,0)'}}>
        {item => style => (
          <animated.div style={style}>
            <Box p={spacing}>{item}</Box>
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
