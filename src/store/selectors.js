export function getSurveyInfo(state) {
  return state.survey.info;
}

export function getResponseMaxQuestionIndex(state) {
  return Object.keys(state.responses).length;
}

export function getSurveyQuestion(state, questionId) {
  const {questions, choiceSets} = state.survey;
  const question = questions.byId[questionId];
  question.choiceSet = choiceSets[question.choiceSetId];
  return question;
}

export function getProgressItems(state) {
  const {responses, survey} = state;
  const {allIds, byId} = survey.questions;
  return allIds.map((questionId, index) => {
    const question = byId[questionId];
    const isCompleted = questionId in responses;
    return {
      disabled: index > getResponseMaxQuestionIndex(state) && !isCompleted,
      id: questionId,
      isCompleted,
      text: question.text,
    };
  });
}
