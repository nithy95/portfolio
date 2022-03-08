import "./skill-meter.css";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import ColoredLinearProgress from "../../common/progress-bar/progress-bar";
import ColoredTooltip from "../../common/tool-tip/colored-tooltip";
import { Body1Typography } from "../../common/typographies/typographies";

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
    <Stack spacing={2} sx={{ p: 3 }}>
      <Body1Typography variant="body1">{props.skill}</Body1Typography>
      <ColoredTooltip
        title={
          <>
            <Typography>{progress + "%"}</Typography>
          </>
        }
      >
        <BorderLinearProgress variant="determinate" value={progress} />
      </ColoredTooltip>
    </Stack>
  );
}
export default SkillMeter;
