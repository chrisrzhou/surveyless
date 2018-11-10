import Progress from 'components/ui/Progress';
import React from 'react';
import {connect} from 'react-redux';

function SurveyProgress({items, onItemClick}) {
  return <Progress items={items} onItemClick={onItemClick} />;
}

export default connect(
  state => ({
    items: [
      {completed: true, disabled: false, id: 'as', title: 'adfadf'},
      {completed: true, disabled: false, id: 'c', title: 'adfadf'},
      {completed: false, disabled: false, id: 'b', title: 'adfadf'},
      {completed: false, disabled: true, id: 'd', title: 'adfadf'},
      {completed: false, disabled: true, id: 'e', title: 'adfadf'},
    ],
  }),
  {onItemClick: id => console.log(id)},
)(SurveyProgress);
