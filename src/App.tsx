import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import {
  useMediaQuery,
  CssBaseline,
  IconButton,
  Toolbar,
  PaletteMode,
  Snackbar,
  Button,
} from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import Home from "./components/home/home";
import { Box } from "@mui/system";
import { Palette } from "@mui/icons-material";
import { MenuPopover } from "./components/common/menu-popover/menu-popover";
import ModeToggle from "./components/common/mode-toggle/mode-toggle";
import TransparentAppBar from "./components/common/app-bar/app-bar";
//@ts-ignore
import { CirclePicker } from "@ziyang2go/react-color";
import themeOptions, {
  darkThemeSuggestion,
  defaultColor,
  defaultPalette,
  lightThemeSuggestion,
  defaultTheme,
  backgoroundPalette,
} from "./theme/palette";
import { TitleTypography } from "./components/common/typographies/typographies";
import { makeStyles, lighten, darken } from "@material-ui/core";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:light)");
  const [mode, setMode] = useState<PaletteMode>(defaultTheme);
  const [open, setOpen] = useState(false);
  const [showThemeSuggestion, setShowThemeSuggestion] = useState(false);
  const [suggestionMessage, setSuggestionMessage] = useState("");
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    createTheme(defaultPalette)
  );
  const [currentPalette, setCurrentPalette] = useState(defaultColor);

  const anchorRef = useRef(null);

  const timelineCssVariables = (theme: Theme) => {
    return {
      "@global": {
        ":root": {
          "--primary-color":
            theme.palette.mode === "dark"
              ? theme.palette.primary.dark
              : theme.palette.primary.main,
          "--secondary-color":
            theme.palette.mode === "dark"
              ? lighten(theme.palette.primary.dark, 0.2)
              : darken(theme.palette.primary.light, 0.1),
          "--timeline-img-color":
            theme.palette.mode === "dark"
              ? darken(theme.palette.primary.dark, 0.2)
              : theme.palette.primary.main,
          "--background-color": theme.palette.background.default,
        },
      },
    };
  };
  // This injects global CSS variable into the App
  makeStyles(timelineCssVariables(currentTheme))();

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  useEffect(() => {
    const themeOption = themeOptions.get(currentPalette)!;
    const background = backgoroundPalette.get(mode);
    const newThemeOption = {
      palette: { mode: mode, ...themeOption, ...background },
    };

    setCurrentTheme(createTheme(newThemeOption));
  }, [currentPalette, mode]);

  const handlePopoverOpen = () => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };

  function closeSuggestion() {
    setShowThemeSuggestion(false);
  }
  function handleModeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMode(event.target.checked ? "dark" : "light");
  }
  function enableSuggestedMode() {
    setMode(suggestionMessage.includes("Dark") ? "dark" : "light");
    closeSuggestion();
  }

  const handleColorChange = (color: any) => {
    if (darkThemeSuggestion.includes(color.hex)) {
      //This only enables if the current mode is not the desired one
      setShowThemeSuggestion(mode !== "dark");
      setSuggestionMessage("This palette looks good on Dark mode!!");
    }

    if (lightThemeSuggestion.includes(color.hex)) {
      setShowThemeSuggestion(mode !== "light");
      setSuggestionMessage("This palette looks good on Light mode!!");
    }
    setCurrentPalette(color.hex);
    handlePopoverClose();
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Snackbar
          open={showThemeSuggestion}
          onClose={closeSuggestion}
          autoHideDuration={4000}
          message={suggestionMessage}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          action={
            <Button color="primary" size="small" onClick={enableSuggestedMode}>
              Enable Now
            </Button>
          }
        />
        <TransparentAppBar>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
              <TitleTypography
                variant="h4"
                sx={{ flexGrow: 1 }}
                style={{
                  fontSize: "40px",
                  overflow: "hidden",
                }}
                color={(theme) => {
                  return theme.palette.primary.main;
                }}
              >
                &gt;_nithY <span className="cursor">_</span>
              </TitleTypography>
              <ModeToggle
                checked={mode === "dark"}
                onChange={handleModeChange}
              />
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handlePopoverOpen}
                color="primary"
                ref={anchorRef}
              >
                <Palette />
              </IconButton>

              <MenuPopover
                open={open}
                onClose={handlePopoverClose}
                anchorEl={anchorRef.current}
              >
                <Box sx={{ p: 1, pl: 3 }}>
                  <CirclePicker
                    style={{ padding: "15px" }}
                    color={currentPalette}
                    colors={Array.from(themeOptions.keys())}
                    onChangeComplete={handleColorChange}
                    circleSpacing={24}
                    circleSize={24}
                  />
                </Box>
              </MenuPopover>
            </Toolbar>
          </Box>
        </TransparentAppBar>
        <Home />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
