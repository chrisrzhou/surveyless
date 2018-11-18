import React from 'react';
import {Text as RebassText} from 'rebass';

function Text({children, isMono, ...otherProps}) {
  return (
    <RebassText
      as="span"
      bg={isMono ? 'wash' : undefined}
      css={{
        display: 'inline',
        wordWrap: 'break-word',
      }}
      px={isMono ? 1 : undefined}
      {...otherProps}>
      {children}
    </RebassText>
  );
}

Text.defaultProps = {
  isMono: false,
};

export default Text;
