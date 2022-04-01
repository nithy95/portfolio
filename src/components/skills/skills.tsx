import "./skills.css";
import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import SkillCard from "./group/skill-card";
import { SkillCategory } from "../../models/skills/skill.model";
import { useEffect, useState } from "react";

export default function Skills() {
  const [skillListChunks, setSkillListChunks] = useState<SkillCategory[][]>([]);
  useEffect(() => {
    setSkillListChunks(sliceIntoChunks(profile.professional.allSkills, 3));
  }, []);

  return (
    <ElevatedCard
      title={"Check out my skills..."}
      subtitle={
        <>
          {/* <span style={{ color: "red" }}>*</span>These points are the average of
          all the points that I received from various interviewers and SMEs over
          the course of my career. */}
          These are the few Technologies , languages and frameworks that i grind
          on a regular basis..
        </>
      }
      icon="ion:hardware-chip-outline"
    >
      {skillListChunks.map((chunks) => {
        return (
          <div>
            {chunks.map(({ category, skills }: SkillCategory) => {
              return (
                <div className="skills-container">
                  <SkillCard category={category} skills={skills} />
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
