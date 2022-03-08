import "./vertical-timeline.css";
import WorkTimelineItem, {
  TimelineItem,
} from "../../../models/common/timeline/timeline";
import TimelineElement from "./timeline-contents/timeline-item";
import WorkTimelineElement from "./timeline-contents/work-timeline-item";
import { useTheme, Theme } from "@mui/material/styles";
import { makeStyles, lighten, darken } from "@material-ui/core";

const timelineCssVariables = (theme: Theme) => {
  return {
    "@global": {
      ":root": {
        "--timeline-primary":
          theme.palette.mode === "dark"
            ? theme.palette.primary.dark
            : theme.palette.primary.main,
        "--timeline-secondary":
          theme.palette.mode === "dark"
            ? lighten(theme.palette.primary.dark, 0.2)
            : darken(theme.palette.primary.light, 0.1),
        "--timeline-img-color":
          theme.palette.mode === "dark"
            ? darken(theme.palette.primary.dark, 0.2)
            : theme.palette.primary.main,
      },
    },
  };
};

const VerticalTimeline = ({
  items,
  workItems,
}: {
  items?: TimelineItem[];
  workItems?: WorkTimelineItem[];
}) => {
  const currentTheme = useTheme();

  // This injects global CSS variable into the App
  makeStyles(timelineCssVariables(currentTheme))();

  return (
    <section className="cd-timeline">
      {workItems
        ? workItems.map((item) => {
            return (
              <div className="cd-timeline-block">
                <div className="cd-timeline-img"></div>
                <WorkTimelineElement {...item} />
              </div>
            );
          })
        : items
        ? items.map((item) => {
            return (
              <div className="cd-timeline-block">
                <div className="cd-timeline-img"></div>
                <TimelineElement {...item} />
              </div>
            );
          })
        : ""}
    </section>
  );
};

export default VerticalTimeline;
