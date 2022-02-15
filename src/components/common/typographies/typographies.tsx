import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";

export const TitleTypography = withStyles({
  root: {
    fontFamily: "Righteous, cursive",
    fontWeight: "bold",
  },
})(Typography);

export const Body1Typography = withStyles({
  root: {
    fontFamily: "'Nunito', sans-serif;",
    fontWeight: "bolder",
  },
})(Typography);
