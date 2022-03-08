export interface TimelineItem {
  title: string;
  description: string;
}

export default interface WorkTimelineItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
  skills: string[];
}
