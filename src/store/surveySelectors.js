export function getIsQuestionCompleted(state, questionId) {
  return questionId in state.survey.responses;
}

export function getMaxRespondedQuestionIndex(state) {
  return Object.keys(state.survey.responses).length;
}

export function getAnswer(state, questionId) {
  return state.survey.responses[questionId] || {};
}

export function getQuestion(state, questionId) {
  return state.survey.questions.byId[questionId];
}

export function getSession(state) {
  return state.survey.session;
}

export function getProgressItems(state) {
  const {questions, responses} = state.survey;
  const {allIds, byId} = questions;
  return allIds.map((id, index) => {
    const question = byId[id];
    const isCompleted = responses[id] && responses[id].answerValue != null;
    return {
      disabled: index > getMaxRespondedQuestionIndex(state) && !isCompleted,
      id,
      isCompleted,
      tooltip: question.text,
    };
  });
}
