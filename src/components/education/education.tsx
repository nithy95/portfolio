import "./education.css";
import "react-vertical-timeline-component/style.min.css";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import { useTheme } from "@mui/material/styles";
import { profile } from "../../constants/profile";
import { lighten } from "@material-ui/core/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Education = () => {
  const currentTheme = useTheme();
  const isDarkMode = currentTheme.palette.mode === "dark";

  // TODO: Need to add media query to make this to work on mobile
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
    color: "#ffffffb3",
  };

  const contentArrowStyle = {
    borderRight: `7px solid  ${
      isDarkMode
        ? lighten(currentTheme.palette.primary.dark, 0.1)
        : lighten(currentTheme.palette.primary.main, 0.1)
    }`,
  };

  return (
    <>
      <ElevatedCard title={"My Education"}>
        <VerticalTimeline
          lineColor={isDarkMode ? "white" : currentTheme.palette.grey[300]}
          // TODO: try to re animate every time the page scrolls
          animate={false}
        >
          {profile.personal.education.map((education) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                iconStyle={iconStyle}
                // icon={<BusinessCenterIcon style={{ color: "#fff" }} />}
              >
                {/* <h3
                  className="vertical-timeline-element-date"
                  style={{
                    marginTop: "-7px",
                    color: isDarkMode ? "#fff" : currentTheme.palette.grey[700],
                  }}
                >
                  {education.duration}
                </h3> */}
                <h3 className="vertical-timeline-element-title">
                  {education.role}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {education.organization}
                </h4>
                <p>{education.duration}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </ElevatedCard>
    </>
  );
};

export default Education;
