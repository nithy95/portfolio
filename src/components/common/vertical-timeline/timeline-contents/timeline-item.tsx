import { TimelineItem } from "../../../../models/common/timeline/timeline";
import "../vertical-timeline.css";

const TimelineElement = ({ title, description }: TimelineItem) => {
  return (
    <div className="cd-timeline-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TimelineElement;
