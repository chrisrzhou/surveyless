import {Spring, config} from 'react-spring';

import Image from './Image';
import {MAX_IMAGE_WIDTH} from 'styles/constants';
import React from 'react';

function MarkdownImage({src, ...otherProps}) {
  // HACK strip '/static' from src
  return (
    <Spring
      config={config.slow}
      from={{opacity: 0, transform: 'scale(0.8)'}}
      to={{opacity: 1, transform: 'scale(1)'}}>
      {style => (
        <Image
          css={{
            boxSizing: 'border-box',
            display: 'block',
            maxWidth: MAX_IMAGE_WIDTH,
            width: '80%',
            ...style,
          }}
          mx="auto"
          p={3}
          src={src.replace(/^\/static\//, '/')}
          width="100%"
          {...otherProps}
        />
      )}
    </Spring>
  );
}

export default MarkdownImage;
