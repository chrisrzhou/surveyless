// HACK: gatsby build

import Root from 'components/Root';
import typography from 'gatsby-plugin-typography/.cache/typography.js';

export const wrapRootElement = Root;

// HACK: Hot reload typography in development.
export function onClientEntry() {
  if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
  }
}
