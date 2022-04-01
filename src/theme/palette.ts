import { ThemeOptions } from "@mui/material/styles";

const themeOptions = new Map([
  [
    "#ffb74d",
    {
      primary: {
        main: "#ffb74d",
        dark: "#d69c42",
      },
      secondary: {
        main: "#f57c00",
      },
    },
  ],
  [
    "#ff8a65",
    {
      primary: {
        main: "#ff8a65",
      },
      secondary: {
        main: "#ff8a65",
      },
    },
  ],
  [
    "#17a2b8",
    {
      primary: {
        main: "#17a2b8",
      },
      secondary: {
        main: "#17a2b8",
      },
    },
  ],
  [
    "#607d8b",
    {
      primary: {
        main: "#607d8b",
      },
      secondary: {
        main: "#607d8b",
      },
    },
  ],
  [
    "#b0bec5",
    {
      primary: {
        main: "#b0bec5",
      },
      secondary: {
        main: "#b0bec5",
      },
    },
  ],
]);

export const defaultPalette: ThemeOptions = {
  palette: themeOptions.get("#ffb74d"),
};

export const defaultColor = "#ffb74d";

export const defaultTheme = "dark";

export const darkThemeSuggestion = ["#17a2b8", "#b0bec5"];

export const lightThemeSuggestion = ["#FF9933", "#ffb74d"];

export const backgoroundPalette = new Map([
  [
    "dark",
    {
      background: {
        default: "#343a40",
        paper: "#424242",
      },
    },
  ],
  [
    "light",
    {
      background: {
        default: "#fafafa",
        paper: "#ffffff",
      },
    },
  ],
]);

export default themeOptions;
