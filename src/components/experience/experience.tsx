import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import { useTheme } from "@mui/material/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { lighten } from "@material-ui/core/styles";

export default function Experience() {
  const currentTheme = useTheme();
  const isDarkMode = currentTheme.palette.mode === "dark";

  const iconStyle = {
    background: currentTheme.palette.primary.main,
    width: "50px",
    height: "50px",
    marginLeft: "-25px",
  };

  const contentStyle = {
    background: isDarkMode
      ? lighten(currentTheme.palette.primary.dark, 0.05)
      : lighten(currentTheme.palette.primary.main, 0.1),
    color: "#fff",
  };

  const contentArrowStyle = {
    borderRight: `7px solid  ${
      isDarkMode
        ? lighten(currentTheme.palette.primary.dark, 0.1)
        : lighten(currentTheme.palette.primary.main, 0.1)
    }`,
  };

  return (
    <ElevatedCard title={"My professional experience"}>
      <VerticalTimeline
        lineColor={isDarkMode ? "white" : currentTheme.palette.grey[300]}
        // TODO: try to re animate every time the page scrolls
        // animate={false}
      >
        {profile.professional.experiences.map((experience) => {
          return (
            <VerticalTimelineElement
              // className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={iconStyle}
              icon={<BusinessCenterIcon style={{ color: "#fff" }} />}
            >
              <h3
                className="vertical-timeline-element-date"
                style={{
                  marginTop: "-7px",
                  color: isDarkMode ? "#fff" : currentTheme.palette.grey[700],
                }}
              >
                {`${experience.from} - ${experience.to}`}
              </h3>
              <h3 className="vertical-timeline-element-title">
                {experience.organization}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.locations.join(", ")}
              </h4>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </ElevatedCard>
  );
}
