import React from 'react';
import {Card as RebassCard} from 'rebass';

function Card({children}) {
  return (
    <RebassCard
      bg="background"
      borderRadius={8}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      my={3}
      p={[3, 4]}>
      {children}
    </RebassCard>
  );
}

export default Card;
