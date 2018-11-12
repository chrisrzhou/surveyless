import {Box} from 'rebass';
import Column from './Column';
import React from 'react';
import Row from './Row';
import {choiceSetLayouts} from 'enums';

function BaseChoiceSet({answerValue, choices, choiceSetLayout, onChange}) {
  const content = choices.map((choice, index) => {
    const {id, text} = choice;
    return <Box onClick={() => onChange(id)}>{text}</Box>;
  });
  switch (choiceSetLayout) {
    case choiceSetLayouts.VERTICAL:
      return <Column>{content}</Column>;
    case choiceSetLayouts.WRAP:
      return <Row wrap>{content}</Row>;
    case choiceSetLayouts.ROW:
    default:
      return <Row>{content}</Row>;
  }
}

export default BaseChoiceSet;
