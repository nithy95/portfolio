import { useTheme } from "@mui/material/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import ColoredTooltip from "../common/tool-tip/colored-tooltip";
import ColoredLinearProgress from "../common/progress-bar/progress-bar";
import { Body1Typography } from "../common/typographies/typographies";

function SkillMeter(props: any) {
  const [progress, setProgress] = useState(0);

  const BorderLinearProgress = ColoredLinearProgress(useTheme());

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.score ? props.score : prevProgress + 10
      );
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Body1Typography variant="body1">{props.skill}</Body1Typography>
        </Grid>
        <Grid item md={8}>
          <ColoredTooltip
            title={
              <>
                <Typography>{progress + "%"}</Typography>
              </>
            }
          >
            <BorderLinearProgress variant="determinate" value={progress} />
          </ColoredTooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
export default SkillMeter;
