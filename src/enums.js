import keymirror from 'keymirror';

export const surveyMode = keymirror({
  DRAFT: null,
  OPEN: null,
  CLOSED: null,
});

export const hotkeys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWWN: 40,
};

export const questionTypes = keymirror({
  LIKERT: null,
  SINGLE_CHOICE: null,
  MULTI_CHOICE: null,
  COMMENT: null,
  RANKING: null,
  MATRIX: null,
});

export const routes = {
  HOME: '/',
  DRAFT: '/draft',
  SURVEY: '/survey',
  RESULTS: '/results',
};
