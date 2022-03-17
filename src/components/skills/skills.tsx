import "./skills.css";
import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import { Body1Typography } from "../common/typographies/typographies";
import SkillGroup from "./group/skill-grouping";
import { SkillCategory } from "../../models/skills/skill.model";
import { useEffect, useState } from "react";

export default function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    // adaptiveHeight: true,
  };

  const [skillListChunks, setSkillListChunks] = useState<SkillCategory[][]>([]);
  useEffect(() => {
    setSkillListChunks(sliceIntoChunks(profile.professional.allSkills, 3));
  }, []);

  return (
    <ElevatedCard
      title={
        <>
          Check out my skills...
          <br />
          <Body1Typography
            variant="caption"
            color="text.primary"
            align="center"
          >
            <span style={{ color: "red" }}>*</span>These points are the average
            of all the points that I received from various interviewers and SMEs
            over the course of my career.
          </Body1Typography>
        </>
      }
      id="skills"
    >
      {skillListChunks.map((chunks) => {
        return (
          <div>
            {chunks.map(({ category, skills }: SkillCategory) => {
              return (
                <div className="skills-container">
                  <SkillGroup category={category} skills={skills} />
                </div>
              );
            })}
          </div>
        );
      })}
    </ElevatedCard>
  );
}
function sliceIntoChunks(arr: SkillCategory[], chunkSize: number) {
  let res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}
