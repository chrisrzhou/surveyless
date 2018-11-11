export function validateSurvey(surveyData) {
  return surveyData;
}

export function validateResponses(responsesData) {
  const responses = {};
  responsesData.forEach(response => {
    responses[response.questionId] = response;
  });
  return responses;
}
