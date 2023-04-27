import {ThemeProvider } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import {MaterialUiTheme} from '../Commons/MaterialUiTheme'

function LineProgress({ value, type }) {
  
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      <LinearProgress color={type} variant="determinate" value={value} />
    </ThemeProvider>
  );
}

export default LineProgress;
