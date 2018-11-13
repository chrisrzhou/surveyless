import React from 'react';
import {Text as RebassText} from 'rebass';

function Text({as, heading, children, color, isMono, ...otherProps}) {
  let fontFamily = 'regular';
  if (isMono) {
    fontFamily = 'mono';
  } else if (heading) {
    fontFamily = 'heading';
  }
  const headingFontsizeOffset = heading ? 6 - heading : 0;
  return (
    <RebassText
      color={color}
      as={as || (heading ? `h${heading}` : undefined)}
      fontFamily={fontFamily}
      fontSize={[1, 1, 2, 2].map(fs => fs + headingFontsizeOffset)}
      {...otherProps}>
      {children}
    </RebassText>
  );
}

Text.defaultProps = {
  color: 'primaryText',
  isMono: false,
};

export default Text;
