import React from 'react';
import {Link as RebassLink} from 'rebass';

function Link({children, href, isExternal}) {
  return (
    <RebassLink
      color="active"
      href={href}
      target={isExternal ? '_blank' : undefined}>
      {children}
    </RebassLink>
  );
}

Link.defaultProps = {
  isExternal: true,
};

export default Link;
