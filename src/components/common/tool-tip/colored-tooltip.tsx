import { Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import { Theme, useTheme } from "@mui/material/styles";

const toolTipStyles = (theme: Theme) => {
  return {
    arrow: {
      color: theme.palette.primary.main,
    },
    tooltip: {
      backgroundColor: theme.palette.primary.main,
    },
  };
};

const ColoredTooltip = (props: any) => {
  const theme = useTheme();
  const styles = makeStyles(toolTipStyles(theme))();

  return (
    <Tooltip
      arrow
      placement="top"
      TransitionComponent={Zoom}
      title={props.title}
      classes={{ arrow: styles.arrow, tooltip: styles.tooltip }}
    >
      {props.children}
    </Tooltip>
  );
};
export default ColoredTooltip;
