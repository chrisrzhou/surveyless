import {Spring, config} from 'react-spring';

import Image from './Image';
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
            maxWidth: '80%',
            ...style,
          }}
          mx="auto"
          src={src.replace(/^\/static\//, '/')}
          {...otherProps}
        />
      )}
    </Spring>
  );
}

export default MarkdownImage;
