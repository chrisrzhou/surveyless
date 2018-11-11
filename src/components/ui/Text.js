import React from 'react';
import {Text as RebassText} from 'rebass';

function Text({heading, children, color, isMono, ...otherProps}) {
  const as = heading ? `h${heading}` : undefined;
  let fontFamily;
  if (isMono) {
    fontFamily = 'mono';
  } else if (heading) {
    fontFamily = 'heading';
  }
  const fontSize = heading ? 7 - heading : 1;
  return (
    <RebassText
      color={color}
      as={as}
      fontFamily={fontFamily}
      fontSize={[fontSize - 1, fontSize]}
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
