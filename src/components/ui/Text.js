import React from 'react';
import {Text as RebassText} from 'rebass';

function Text({children, color, isMono, ...otherProps}) {
  return (
    <RebassText
      as="span"
      bg={isMono ? 'wash' : undefined}
      color={color}
      css={{
        display: 'inline',
        wordWrap: 'break-word',
      }}
      fontFamily={isMono ? 'mono' : 'regular'}
      fontSize={1}
      px={isMono ? 1 : undefined}
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
