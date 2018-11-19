import {Spring, animated, config} from 'react-spring';

import {Flex} from 'rebass';
import React from 'react';

function Container({children}) {
  return (
    <Spring native config={config.slow} from={{opacity: 0}} to={{opacity: 1}}>
      {style => (
        <animated.div style={style}>
          <Flex
            css={{
              flexShrink: 0,
              maxWidth: 800,
            }}
            flexDirection="column"
            m="auto"
            p={3}
            width="100%">
            {children}
          </Flex>
        </animated.div>
      )}
    </Spring>
  );
}

export default Container;
