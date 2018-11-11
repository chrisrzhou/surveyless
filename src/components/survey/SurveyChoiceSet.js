import {Flex} from 'rebass';
import React from 'react';

function SurveyChoiceSet({choiceSet, onChange, renderType}) {
  const {choices, config} = choiceSet;
  return (
    <Flex>
      {renderType}
      {JSON.stringify(choices, null, 2)}
    </Flex>
  );
}

export default SurveyChoiceSet;
