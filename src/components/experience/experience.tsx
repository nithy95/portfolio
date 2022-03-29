import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import VerticalTimeline from "../common/vertical-timeline/vertical-timeline";

export default function Experience() {
  return (
    <ElevatedCard title={"My professional journey..."} icon="iconoir:large-suitcase">
      <VerticalTimeline workItems={profile.professional.experiences} />
    </ElevatedCard>
  );
}
