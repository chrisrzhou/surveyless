import React from 'react';
import {Heading as RebassHeading} from 'rebass';

function Heading({level, children, ...otherProps}) {
  const headingLevelOffset = level ? 6 - level : 0;
  return (
    <RebassHeading
      as={`h${level}`}
      color="primaryText"
      fontFamily="heading"
      fontSize={[1, 1, 2, 2].map(fontSize => fontSize + headingLevelOffset)}
      lineHeight={headingLevelOffset * 0.2 + 1.25}
      {...otherProps}>
      {children}
    </RebassHeading>
  );
}

export default Heading;
