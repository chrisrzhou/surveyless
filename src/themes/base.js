// https://rebassjs.org/theming

const active = '#519EF7';

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    active,
    inactive: '#A2A9AF',
    primaryText: '#4F565D',
    secondaryText: '#a0afba',
    background: '#FFFFFF',
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    regular: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [
    '1.0em',
    '1.15em',
    '1.25em',
    '1.5em',
    '1.75em',
    '2em',
    '2.25em',
    '2.5em',
  ],
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: active,
    },
    outline: {
      color: active,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
};
