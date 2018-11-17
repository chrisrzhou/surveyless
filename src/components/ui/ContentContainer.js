import {Spring, animated, config} from 'react-spring';

import {Flex} from 'rebass';
import {RESPONSIVE_CONTENT_WIDTH} from 'styles/constants';
import React from 'react';

function ContentContainer({children}) {
  return (
    <Spring
      native
      config={config.slow}
      from={{opacity: 0, transform: 'translate3d(0, -100%, 0)'}}
      to={{opacity: 1, transform: 'translate3d(0, 0, 0)'}}>
      {style => (
        <animated.div style={style}>
          <Flex
            css={{
              flexShrink: 0,
            }}
            flexDirection="column"
            m="auto"
            px={3}
            py={4}
            width={RESPONSIVE_CONTENT_WIDTH}>
            {children}
          </Flex>
        </animated.div>
      )}
    </Spring>
  );
}

export default ContentContainer;
