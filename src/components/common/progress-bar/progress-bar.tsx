import { LinearProgress } from "@material-ui/core";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import { Theme, useTheme } from "@mui/material/styles";

const styles = (theme: Theme) => {
  return {
    root: {
      height: 10,
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : lighten(theme.palette.primary.light, 0.3),
    },
    bar: {
      borderRadius: 20,
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.primary.dark
          : theme.palette.primary.main,
    },
  };
};

// TODO: Move this to a separate component and make sure tool tip is working after moving it.
const ColoredLinearProgress = (theme: Theme) => {
  return withStyles(styles(theme))(LinearProgress);
};

export default ColoredLinearProgress;
