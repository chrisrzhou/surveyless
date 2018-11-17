import {Spring, animated, config} from 'react-spring';

import Image from './Image';
import {MAX_IMAGE_WIDTH} from 'styles/constants';
import React from 'react';

function MarkdownImageRenderer({src, ...otherProps}) {
  // HACK strip '/static' from src
  return (
    <Spring
      native
      config={config.slow}
      from={{opacity: 0, transform: 'scale(0.8)'}}
      to={{opacity: 1, transform: 'scale(1)'}}>
      {style => (
        <animated.div style={style}>
          <Image
            css={{
              boxSizing: 'border-box',
              maxWidth: MAX_IMAGE_WIDTH,
              width: '100%',
            }}
            p={3}
            src={src.replace(/^\/static\//, '/')}
            width="100%"
            {...otherProps}
          />
        </animated.div>
      )}
    </Spring>
  );
}

export default MarkdownImageRenderer;
