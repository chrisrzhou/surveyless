import List from 'components/ui/List';
import React from 'react';

function AnswerLayout({children, isVertical}) {
  return (
    <List
      spacing={isVertical ? 2 : 3}
      isMobileVertical={!isVertical}
      isVertical={isVertical}>
      {children}
    </List>
  );
}

export default AnswerLayout;
