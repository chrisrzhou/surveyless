import {Box} from 'rebass';
import React from 'react';

const ACTIVE_COLOR = '#FAC917';
const INACTIVE_COLOR = '#fff8e5';

function RatingStar({isActive, isHovered, onClick}) {
  return (
    <Box
      css={{
        cursor: 'pointer',
        transform: isHovered ? 'scale(1.2)' : undefined,
        transition: '0.1s ease-in-out',
        svg: {
          fill: isActive ? ACTIVE_COLOR : INACTIVE_COLOR,
          strokeWidth: '32px',
          stroke: ACTIVE_COLOR,
        },
      }}
      onClick={onClick}
      width={20}>
      <svg viewBox="0 0 426.667 426.667">
        <polygon
          points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
      81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
        />
      </svg>
    </Box>
  );
}

export default RatingStar;
