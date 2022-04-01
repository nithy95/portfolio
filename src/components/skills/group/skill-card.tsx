import "./skill-card.css";
import { Stack } from "@mui/material";
import Skill from "../../../models/skills/skill.model";
import { Body1Typography } from "../../common/typographies/typographies";
import { Icon } from "@iconify/react";
import { useTheme } from "@mui/material/styles";
import { fontColor } from "../../../utils/color";

export default function SkillCard(props: {
  category: string;
  skills: Skill[];
}) {
  const currentTheme = useTheme();
  return (
    <Stack>
      <Body1Typography variant="h6" style={{ color: fontColor(currentTheme) }}>
        {props.category}
      </Body1Typography>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {props.skills.map((skill) => {
          return (
            <li>
              <div className="skill-block">
                <span>
                  <Icon
                    icon="ic:round-gps-fixed"
                    width="25"
                    height="25"
                    className="icon"
                    color="#ffffffe6"
                    inline={true}
                  />
                  {skill.skill}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </Stack>
  );
}
