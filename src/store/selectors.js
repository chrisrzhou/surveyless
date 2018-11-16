export function getResponseIsQuestionCompleted(state, questionId) {
  return questionId in state.responses;
}

export function getResponseMaxQuestionIndex(state) {
  return Object.keys(state.responses).length;
}

export function getResponseAnswerValue(state, questionId) {
  const response = state.responses[questionId];
  return response ? response.answerValue : null;
}

export function getSurveyQuestion(state, questionId) {
  return state.survey.questions.byId[questionId];
}

export function getSurveyProgressItems(state) {
  const {responses, survey} = state;
  const {allIds, byId} = survey.questions;
  return allIds.map((id, index) => {
    const question = byId[id];
    const isCompleted = id in responses;
    return {
      disabled: index > getResponseMaxQuestionIndex(state) && !isCompleted,
      id,
      isCompleted,
      tooltip: question.text,
    };
  });
}
