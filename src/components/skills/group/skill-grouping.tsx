import { Stack } from "@mui/material";
import Skill from "../../../models/skills/skill.model";
import { Body1Typography } from "../../common/typographies/typographies";
import SkillMeter from "../meter/skill-meter";
import Slider from "react-slick";

export default function SkillGroup(props: {
  category: string;
  skills: Skill[];
}) {
  // TODO: pick a color for header
  return (
    <Stack spacing={2} sx={{ p: 0, pt: 3, pl: 3 }}>
      <Body1Typography variant="h6">{props.category}</Body1Typography>
      <Stack>
        <ul style={{ listStyle: "none" }}>
          {props.skills.map((skill) => {
            return (
              <li>
                <SkillMeter {...skill} />
              </li>
            );
          })}
        </ul>
      </Stack>
    </Stack>
  );
}
