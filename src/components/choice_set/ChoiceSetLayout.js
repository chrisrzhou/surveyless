import List from 'components/ui/List';
import React from 'react';
import {choiceSetLayouts} from 'enums';

function ChoiceSetLayout({children, layout}) {
  return (
    <List
      spacing={3}
      isMobileVertical={layout === choiceSetLayouts.HORIZONTAL}
      isVertical={layout === choiceSetLayouts.VERTICAL}>
      {children}
    </List>
  );
}

export default ChoiceSetLayout;
