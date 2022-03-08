import { SkillCategory } from "../models/skills/skill.model";

export const skillSet: SkillCategory[] = [
  {
    category: "Front End",
    skills: [
      { skill: "React", score: 70 },
      { skill: "React Native", score: 70 },
      { skill: "JavaScript", score: 80 },
      { skill: "TypeScript", score: 80 },
      { skill: "Redux", score: 70 },
    ],
  },
  {
    category: "Back End",
    skills: [
      { skill: "Java", score: 80 },
      { skill: "Spring Boot", score: 70 },
      { skill: "ExpressJs", score: 60 },
    ],
  },
  {
    category: "Security",
    skills: [
      { skill: "Spring Security", score: 60 },
      { skill: "Okta", score: 60 },
    ],
  },
  {
    category: "Build Tools",
    skills: [
      { skill: "Maven", score: 70 },
      { skill: "Gradle", score: 60 },
      { skill: "Webpack", score: 60 },
    ],
  },
  {
    category: "CICD",
    skills: [
      { skill: "Sonar Qube", score: 60 },
      { skill: "Jenkins", score: 60 },
      { skill: "Argo CD", score: 70 },
    ],
  },
  {
    category: "Containerization",
    skills: [
      { skill: "Kubernetes", score: 60 },
      { skill: "Docker", score: 80 },
      { skill: "ECS", score: 80 },
    ],
  },
  {
    category: "Artifactories & Repositories",
    skills: [
      { skill: "JFrog", score: 60 },
      { skill: "Quay", score: 60 },
      { skill: "Git", score: 60 },
    ],
  },
  {
    category: "Orchestration Tools",
    skills: [
      { skill: "Terraform", score: 70 },
      { skill: "CloudFormation", score: 70 },
    ],
  },
  {
    category: "Cloud",
    skills: [{ skill: "AWS", score: 80 }],
  },
];

export const profile = {
  personal: {
    firstName: "Nithyanantham",
    lastName: "Gopalsamy",
    birthDate: "02/09/1995",
    contact: {
      email: "nithy.official95@gmail.com",
      gitHub: "https://github.com/nithy95",
      linkedIn: "https://www.linkedin.com/in/gnithyanantham",
      medium: "https://medium.com/@nithy.official95",
      instagram: "https://www.instagram.com/__nithy_",
    },
    education: [
      {
        role: "Higher Secondary",
        organization: "Govt. Boys Hr. School",
        description: "",
        skills: [],
        duration: "Apr 2011 - Mar 2012",
      },
      {
        role: "B.E. Computer Science",
        organization: "Kongu Engineering College",
        description: "",
        skills: [],
        duration: "Apr 2012 - May 2016",
      },
      // {
      //   title:"Higher Secondary",
      //   description:"Govt. Boys Hr. School - Apr 2011 - Mar 2012"
      // }
    ],
  },
  professional: {
    resume: `${process.env.PUBLIC_URL}/Nithyanantham Gopalsamy Resume.pdf`,
    experiences: [
      {
        role: "Fullstack Developer",
        organization: "Accenture Pvt Ltd",
        duration: "Jun 2016 - Dec 2019",
        description:
          "Creating proof of concepts for created design and developing skeletal structure for the application and developing core modules of the application.",
        skills: ["React", "Spring Boot", "Microservices", "Spring Batch"],
      },
      {
        role: "Fullstack Engineer",
        organization: "Athenahealth Pvt Ltd",
        duration: "Jan 2020 - Aug 2021",
        description:
          "Working with the architect and graphics designer to create designs and create overarching architectures, Creating POC for created design and developing core application modules. Orechestrating infrastructure using terraform and creating and managing pipelines",
        skills: ["React", "Spring Boot", "Microservices", "AWS", "DevOps"],
      },
      {
        role: "Fullstack Developer",
        organization: "Legato Health Technologies LLP",
        duration: "Sep 2021 - Present",
        description:
          "Working with the architect and graphics designer to create designs and create overarching architectures, Creating POC for created design and developing core application modules. Orechestrating infrastructure using terraform and creating and managing pipelines",
        skills: [
          "React",
          "Spring Boot",
          "Microservices",
          "Kubenetes",
          "DevOps",
        ],
      },
    ],
    allSkills: skillSet,
  },
};
