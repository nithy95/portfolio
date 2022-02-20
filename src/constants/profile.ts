export const skillSet = new Map([
  [
    "Front End",
    [
      { skill: "React", score: 70 },
      { skill: "React Native", score: 70 },
      { skill: "JavaScript", score: 80 },
      { skill: "TypeScript", score: 80 },
      { skill: "Redux", score: 70 },
    ],
  ],
  [
    "Back End",
    [
      { skill: "Java", score: 80 },
      { skill: "Spring Boot", score: 70 },
      { skill: "ExpressJs", score: 60 },
    ],
  ],
  [
    "Security",
    [
      { skill: "Spring Security", score: 60 },
      { skill: "Okta", score: 60 },
    ],
  ],
  [
    "Build Tools",
    [
      { skill: "Maven", score: 70 },
      { skill: "Gradle", score: 60 },
      { skill: "Webpack", score: 60 },
    ],
  ],
  [
    "CICD",
    [
      { skill: "Sonar Qube", score: 60 },
      { skill: "Jenkins", score: 60 },
      { skill: "Argo CD", score: 70 },
    ],
  ],
  [
    "Containerization",
    [
      { skill: "Kubernetes", score: 60 },
      { skill: "Docker", score: 80 },
      { skill: "ECS", score: 80 },
    ],
  ],
  [
    "Artifactories & Repositories",
    [
      { skill: "JFrog", score: 60 },
      { skill: "Quay", score: 60 },
      { skill: "GitHub", score: 60 },
      { skill: "BitBucket", score: 60 },
    ],
  ],
  [
    "Orchestration Tools",
    [
      { skill: "Terraform", score: 70 },
      { skill: "CloudFormation", score: 70 },
    ],
  ],
  ["Cloud", [{ skill: "AWS", score: 80 }]],
]);

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
  },
  professional: {
    resume: `${process.env.PUBLIC_URL}/Nithyanantham Gopalsamy Resume.pdf`,
    experiences: [
      {
        id: 1,
        organization: "Accenture Pvt Ltd",
        from: "Jun, 2016",
        to: "Dec, 2019",
        locations: ["Pune", "Chennai"],
        description: "I worked here as a full stack developer",
      },
      {
        id: 2,
        organization: "Athenahealth Pvt Ltd",
        from: "Jan, 2020",
        to: "Aug, 2021",
        locations: ["Chennai"],
        description: "",
      },
      {
        id: 3,
        organization: "Legato Health Technologies LLP",
        from: "Sep, 2021",
        to: "Present",
        locations: ["Bangalore"],
        description: "",
      },
    ],
    allSkills: skillSet,
  },
};
