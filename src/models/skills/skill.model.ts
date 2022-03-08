export default interface Skill {
  skill: string;
  score: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  name: string;
  duration: string;
  description: string;
}
