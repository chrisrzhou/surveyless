import React, {useState} from 'react';

import {Box} from 'rebass';
import List from 'components/ui/List';
import RatingStar from 'components/ui/RatingStar';
import Tooltip from 'components/ui/Tooltip';

function RatingChoiceSet({answerValue, choices, onChange}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <List>
      {choices.map((choice, index) => {
        return (
          <Tooltip key={choice} tooltip={choice}>
            <Box
              onMouseOver={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
              p={1}>
              <RatingStar
                isActive={
                  activeIndex === -1
                    ? index <= answerValue
                    : index <= activeIndex
                }
                isHovered={activeIndex !== -1 && index <= activeIndex}
                onClick={() => onChange(index)}
              />
            </Box>
          </Tooltip>
        );
      })}
    </List>
  );
}

export default RatingChoiceSet;
