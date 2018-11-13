import React, {useState} from 'react';

import {Box} from 'rebass';
import RatingStar from 'components/ui/RatingStar';
import List from 'components/ui/List';
import Tooltip from 'components/ui/Tooltip';

function RatingChoiceSet({answerValue, choices, onChange}) {
  let answerIndex;
  choices.forEach((choice, index) => {
    if (choice.id === answerValue) {
      answerIndex = index;
    }
  });
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <List>
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
    </List>
  );
}

export default RatingChoiceSet;
