import React from 'react';
import {Spring} from 'react-spring';
import {connect} from 'react-redux';

function SurveyQuestion({question, onSubmitResponse}) {
  return (
    <Spring from={{opacity: 0}} to={{opacity: 1}}>
      {props => (
        <form style={props}>
          {JSON.stringify(question)}
          <button>aadfdf</button>
        </form>
      )}
    </Spring>
  );
}

export default connect(
  state => ({
    question: {
      id: 'adf',
      type: 'LIKERT',
      markdown: 'adfadf',
      choices: [
        {id: 'a', text: 'adfdf', tooltip: 'adfadfad'},
        {id: 'b', text: 'bbb', tooltip: 'adfadfad'},
        {id: 'c', text: 'ccc', tooltip: 'adfadfad'},
        {id: 'd', text: 'ddd', tooltip: 'adfadfad'},
        {id: 'e', text: 'eee', tooltip: 'adfadfad'},
      ],
    },
  }),
  {onSubmitResponse: () => console.log('submitted response')},
)(SurveyQuestion);
