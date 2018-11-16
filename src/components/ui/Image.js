import {Box} from 'rebass';
import {MAX_IMAGE_WIDTH} from 'styles/constants';
import React from 'react';

function Image({src, width, ...otherProps}) {
  // HACK strip '/static' from src
  return (
    <Box
      as="img"
      css={{maxWidth: MAX_IMAGE_WIDTH}}
      src={src.replace(/^\/static\//, '/')}
      width={width}
      {...otherProps}
    />
  );
}

export default Image;
