import Column from 'components/ui/Column';
import React from 'react';
import Row from 'components/ui/Row';
import {choiceSetLayouts} from 'enums';

function ChoiceSetLayout({children, layout}) {
  switch (layout) {
    case choiceSetLayouts.VERTICAL:
      return <Column spacing={2}>{children}</Column>;
    case choiceSetLayouts.WRAP:
      return (
        <Row spacing={2} wrap>
          {children}
        </Row>
      );
    case choiceSetLayouts.ROW:
    default:
      return <Row spacing={2}>{children}</Row>;
  }
}

export default ChoiceSetLayout;
