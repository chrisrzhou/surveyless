import Typography from 'typography';
import theme from './../../survey/theme.json';

const typography = new Typography({
  ...theme.typography,
  headerColor: theme.colors.headerText,
  bodyColor: theme.colors.primaryText,
});

export default typography;
