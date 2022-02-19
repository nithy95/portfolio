import { Stack } from "@mui/material";
import Skill from "../../models/skills/skill.model";
import { Body1Typography } from "../common/typographies/typographies";
import SkillMeter from "./skill-meter";

export default function SkillGroup(props: {
  category: string;
  skills: Skill[];
}) {
  // TODO: pick a color for header
  return (
    <Stack spacing={2} sx={{ p: 3 }}>
      <Body1Typography variant="h6">{props.category}</Body1Typography>
      {props.skills.map((skill) => {
        return <SkillMeter {...skill} />;
      })}
    </Stack>
  );
}
