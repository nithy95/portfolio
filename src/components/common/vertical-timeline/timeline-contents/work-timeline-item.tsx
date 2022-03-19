import "../vertical-timeline.css";
import WorkTimelineItem from "../../../../models/common/timeline/timeline";
import { Icon } from "@iconify/react";

const WorkTimelineElement = ({
  role,
  organization,
  duration,
  description,
  skills,
}: WorkTimelineItem) => {
  return (
    <div className="cd-timeline-content">
      <h2>{organization}</h2>
      <div className="timeline-content-info">
        <span className="timeline-content-info-title">
          <i>
            <Icon icon="fa-regular:id-badge" />
          </i>
          {role}
        </span>
        <span className="timeline-content-info-date">
          <i>
            <Icon icon="uil:calender" width={15} height={15} />
          </i>
          {duration}
        </span>
      </div>
      {<p>{description}</p>}
      {skills && (
        <ul className="content-skills">
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkTimelineElement;
