import React from 'react';
import ReactTooltip from 'react-tooltip-lite';

function Tooltip({children, content, otherProps}) {
  return (
    <ReactTooltip content={content} useDefaultStyles {...otherProps}>
      {children}
    </ReactTooltip>
  );
}

export default Tooltip;
