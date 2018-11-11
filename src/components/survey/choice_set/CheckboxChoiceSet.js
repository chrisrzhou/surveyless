import React from 'react';

function CheckboxChoiceSet({choices, orientation}) {
  return <div>{orientation}</div>;
}

CheckboxChoiceSet.defaultProps = {
  orientation: 'vertical',
};

export default CheckboxChoiceSet;
