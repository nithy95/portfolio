import "../vertical-timeline.css";
import WorkTimelineItem from "../../../../models/common/timeline/timeline";

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
          <i className="fa fa-id-badge" aria-hidden="true"></i>
          {role}
        </span>
        <span className="timeline-content-info-date">
          <i className="fa fa-calendar-o" aria-hidden="true"></i>
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
