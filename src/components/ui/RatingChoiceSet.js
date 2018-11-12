import React, {useState} from 'react';

import {Box} from 'rebass';
import RatingStar from './RatingStar';
import Row from './Row';
import Tooltip from './Tooltip';

function RatingChoiceSet({answerValue, choices, onChange}) {
  let answerIndex;
  choices.forEach((choice, index) => {
    if (choice.id === answerValue) {
      answerIndex = index;
    }
  });
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <Row>
      {choices.map((choice, index) => {
        const {id, text} = choice;
        return (
          <Tooltip key={id} tooltip={text}>
            <Box
              onMouseOver={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
              p={1}>
              <RatingStar
                isActive={
                  activeIndex === -1
                    ? index <= answerIndex
                    : index <= activeIndex
                }
                isHovered={activeIndex !== -1 && index <= activeIndex}
                onClick={() => onChange(id)}
              />
            </Box>
          </Tooltip>
        );
      })}
    </Row>
  );
}

export default RatingChoiceSet;
