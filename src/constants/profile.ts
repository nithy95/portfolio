import { SkillCategory } from "../models/skills/skill.model";

export const skillSet: SkillCategory[] = [
  {
    category: "Front End",
    skills: [
      { skill: "React", score: 70, icon: "bxl:react" },
      { skill: "React Native", score: 70, icon: "bxl:react" },
    ],
  },
  {
    category: "Back End",
    skills: [
      { skill: "Spring Boot", score: 70, icon: "bxl:spring-boot" },
      { skill: "ExpressJs", score: 60, icon: "bxl:javascript" },
      { skill: "Microservices", score: 80, icon: "carbon:edge-cluster" },
    ],
  },
  {
    category: "Security",
    skills: [
      { skill: "Spring Security", score: 60, icon: "bxl:spring-boot" },
      { skill: "Okta", score: 60, icon: "simple-icons:okta" },
    ],
  },
  {
    category: "Build Tools",
    skills: [
      { skill: "Maven", score: 70, icon: "simple-icons:apachemaven" },
      { skill: "Gradle", score: 60, icon: "simple-icons:gradle" },
      { skill: "Webpack", score: 60, icon: "simple-icons:webpack" },
    ],
  },
  {
    category: "CICD",
    skills: [
      { skill: "Sonar Qube", score: 60, icon: "simple-icons:sonarqube" },
      { skill: "Jenkins", score: 60, icon: "simple-icons:jenkins" },
      { skill: "Argo CD", score: 70, icon: "logos:argo-icon" },
    ],
  },
  {
    category: "Containerization",
    skills: [
      { skill: "Kubernetes", score: 60, icon: "simple-icons:kubernetes" },
      { skill: "Docker", score: 80, icon: "bxl:docker" },
      { skill: "ECS", score: 80, icon: "bxl:react" },
    ],
  },
  {
    category: "Artifactories & Repositories",
    skills: [
      { skill: "JFrog", score: 60, icon: "simple-icons:jfrog" },
      { skill: "Quay", score: 60, icon: "logos:quay" },
      { skill: "Git", score: 60, icon: "bxl:git" },
    ],
  },
  {
    category: "Orchestration Tools",
    skills: [
      { skill: "Terraform", score: 70, icon: "simple-icons:terraform" },
      { skill: "CloudFormation", score: 70, icon: "ph:file-cloud-bold" },
    ],
  },
  {
    category: "Cloud",
    skills: [{ skill: "AWS", score: 80, icon: "bxl:aws" }],
  },
];

export const profile = {
  personal: {
    firstName: "Nithyanantham",
    lastName: "Gopalsamy",
    birthDate: "02/09/1995",
    contact: {
      mobile: "+91-9698860066",
      email: "nithy.official95@gmail.com",
      gitHub: "https://github.com/nithy95",
      linkedIn: "https://www.linkedin.com/in/gnithyanantham",
      medium: "https://medium.com/@nithy.official95",
      instagram: "https://www.instagram.com/__nithy_",
    },
    education: [
      // TODO: Introduce education comoponent in the future.
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
