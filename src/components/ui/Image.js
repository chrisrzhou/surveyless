import {Box} from 'rebass';
import React from 'react';

function Image({src, width, ...otherProps}) {
  return <Box as="img" my="auto" src={src} width={width} {...otherProps} />;
}

export default Image;
