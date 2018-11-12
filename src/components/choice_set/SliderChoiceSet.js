import React from 'react';

function SliderChoiceSet({choiceSet}) {
  return <div>{JSON.stringify(choiceSet, null, 2)}</div>;
}

export default SliderChoiceSet;
