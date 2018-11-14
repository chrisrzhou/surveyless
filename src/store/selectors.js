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

export function getSurveyChoiceSet(state, choiceSetId) {
  return state.survey.choiceSets[choiceSetId];
}

export function getSurveyProgressItems(state) {
  const {responses, survey} = state;
  const {allIds, byId} = survey.questions;
  return allIds.map((questionId, index) => {
    const question = byId[questionId];
    const isCompleted = questionId in responses;
    return {
      disabled: index > getResponseMaxQuestionIndex(state) && !isCompleted,
      id: questionId,
      isCompleted,
      tooltip: question.text,
    };
  });
}
