import "./vertical-timeline.css";
import WorkTimelineItem, {
  TimelineItem,
} from "../../../models/common/timeline/timeline";
import TimelineElement from "./timeline-contents/timeline-item";
import WorkTimelineElement from "./timeline-contents/work-timeline-item";

const VerticalTimeline = ({
  items,
  workItems,
}: {
  items?: TimelineItem[];
  workItems?: WorkTimelineItem[];
}) => {
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
