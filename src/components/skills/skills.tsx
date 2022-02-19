import { Grid } from "@mui/material";
import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import { Body1Typography } from "../common/typographies/typographies";
import SkillGroup from "./skill-grouping";

export default function Skills() {
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
    >
      {Array.from(profile.professional.allSkills).map(([category, skills]) => {
        return (
          //TODO: Add margin bottom 3 px to make the progressive bar more lengthier
          <Grid key={category} item xs={12} sm={6} md={4}>
            <SkillGroup category={category} skills={skills} />
          </Grid>
        );
      })}
    </ElevatedCard>
  );
}
