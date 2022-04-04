import { ContentCopy } from "@mui/icons-material";
import { alpha, OutlinedInput, InputAdornment } from "@mui/material";
import copy from "copy-to-clipboard";
import { useTheme, Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import SocialMediaIconButton from "../buttons/social-media-icon-button";

const outlinedInputStyles = (theme: Theme) => {
  return {
    root: {
      "&$disabled $notchedOutline": {
        borderColor: theme.palette.primary.main,
        background: alpha(theme.palette.primary.main, 0.06),
      },
    },
    notchedOutline: {},
    disabled: {},
  };
};

const CopyContentInput = ({
  value,
  setOpen,
}: {
  value: string;
  setOpen: any;
}) => {
  const currentTheme = useTheme();
  const outlinedInputClasses = makeStyles(outlinedInputStyles(currentTheme))();
  return (
    <OutlinedInput
      type="text"
      value={value}
      size="small"
      disabled
      sx={{ width: "30ch", ml: "5px" }}
      className={`"copy-text"`}
      classes={outlinedInputClasses}
      endAdornment={
        <InputAdornment position="end">
          <SocialMediaIconButton
            aria-label="toggle password visibility"
            onClick={() => {
              copy(value);
              setOpen(true);
            }}
            onMouseDown={(event) => event.preventDefault()}
            edge="end"
          >
            <ContentCopy
              style={{
                color: currentTheme.palette.primary.light,
              }}
            />
          </SocialMediaIconButton>
        </InputAdornment>
      }
    />
  );
};

export default CopyContentInput;
