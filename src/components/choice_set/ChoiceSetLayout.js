import List from 'components/ui/List';
import React from 'react';

function ChoiceSetLayout({children, isVertical}) {
  return (
    <List spacing={2} isMobileVertical={!isVertical} isVertical={isVertical}>
      {children}
    </List>
  );
}

export default ChoiceSetLayout;
