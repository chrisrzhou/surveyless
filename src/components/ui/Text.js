import React from 'react';
import {Text as RebassText} from 'rebass';

function Text({heading, children, color, fontSize, isMono, ...otherProps}) {
  const as = heading ? `h${heading}` : undefined;
  let fontFamily = 'regular';
  if (isMono) {
    fontFamily = 'mono';
  } else if (heading) {
    fontFamily = 'heading';
  }
  const finalFontSize = fontSize || heading ? 7 - heading : 1;
  return (
    <RebassText
      color={color}
      as={as}
      fontFamily={fontFamily}
      fontSize={[finalFontSize - 2, finalFontSize]}
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
