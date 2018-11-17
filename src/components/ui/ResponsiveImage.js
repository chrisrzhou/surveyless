import {Box} from 'rebass';
import {MAX_IMAGE_WIDTH} from 'styles/constants';
import React from 'react';

function Image({isResponsive, src, width, ...otherProps}) {
  // HACK strip '/static' from src
  return (
    <Box
      as="img"
      css={{
        maxWidth: MAX_IMAGE_WIDTH,
        width: isResponsive ? '100%' : undefined,
      }}
      src={src.replace(/^\/static\//, '/')}
      width={width}
      {...otherProps}
    />
  );
}

Image.defaultProps = {
  isResponsive: false,
};

export default Image;
