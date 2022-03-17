import "./skill-grouping.css";
import { Stack } from "@mui/material";
import Skill from "../../../models/skills/skill.model";
import { Body1Typography } from "../../common/typographies/typographies";

export default function SkillGroup(props: {
  category: string;
  skills: Skill[];
}) {
  // TODO: pick a color for header
  return (
    <Stack>
      <Body1Typography variant="h6">{props.category}</Body1Typography>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {props.skills.map((skill) => {
          return (
            <li>
              <div className="skill-block">
                <span>
                  <i className="fa fa-eercast" aria-hidden="true"></i>
                  <span>{skill.skill}</span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </Stack>
  );
}
