import keymirror from 'keymirror';

export const SURVEY_MODE = keymirror({
  DRAFT: null,
  OPEN: null,
  CLOSED: null,
});

export const QUESTION_TYPES = keymirror({
  LIKERT: null,
  MULTIPLE_CHOICE: null,
  COMMENT: null,
  STAR_RATING: null,
  RANKING: null,
});
