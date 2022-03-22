import { Theme } from "@mui/material/styles";

export const fontColor = (theme: Theme) => {
  return theme.palette.mode === "dark" ? "#ffffff" : "#4d4d4d";
};
