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
    "#ff7043",
    {
      primary: {
        main: "#ff7043",
      },
      secondary: {
        main: "#bf360c",
      },
    },
  ],
  [
    "#0277bd",
    {
      primary: {
        main: "#0277bd",
      },
      secondary: {
        main: "#01579b",
      },
    },
  ],
  [
    "#00838f",
    {
      primary: {
        main: "#00838f",
      },
      secondary: {
        main: "#006064",
      },
    },
  ],
  [
    "#78909c",
    {
      primary: {
        main: "#78909c",
      },
      secondary: {
        main: "#455a64",
      },
    },
  ],
]);

export const defaultPalette: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#1e559a",
    },
    secondary: {
      main: "#6c757d",
    },
  },
};

export const defaultColor = "#ffb74d";

export const defaultTheme = "dark";

export const darkThemeSuggestion = ["#00838f"];

export const lightThemeSuggestion = ["#ff7043", "#ffb74d"];

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
