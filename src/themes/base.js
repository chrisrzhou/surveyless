// https://rebassjs.org/theming

const brand = '#519EF7';
const background = '#FFFFFF';

export default {
  space: [2, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    active: brand,
    inactive: '#A2A9AF',
    primaryText: '#4F565D',
    secondaryText: '#a0afba',
    wash: '#F0F0F0',
    background,
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    regular: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32],
  buttons: {
    primary: {
      color: background,
      backgroundColor: brand,
    },
    outline: {
      color: brand,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
  Button: {
    cursor: 'pointer',
    ':hover': {
      opacity: 0.7,
    },
    ':focus': {
      opacity: 0.7,
      outline: 'none',
    },
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.3,
    },
  },
  // input/textarea
  Card: {
    ':focus': {
      borderColor: brand,
      opacity: 0.7,
      outline: 'none',
    },
  },
};
