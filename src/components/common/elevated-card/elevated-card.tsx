import { Divider, Grid, Paper } from "@mui/material";
import { FunctionComponent } from "react";
import ElevatedCardProps from "../../../models/common/elevated-card-model";
import { Body1Typography } from "../typographies/typographies";

export const ElevatedCard: FunctionComponent<ElevatedCardProps> = ({
  title,
  children,
}) => {
  return (
    <Paper
      elevation={3}
      style={{
        margin: "10%",
        width: "80%",
        height: "80%",
        borderRadius: "10px",
      }}
    >
      {title && (
        <>
          <Body1Typography
            variant="h5"
            color="text.primary"
            align="center"
            p="15px"
            pt="40px"
          >
            {title}
          </Body1Typography>
          <Divider />
        </>
      )}
      <Grid container spacing={2} style={{ margin: "10px" }}>
        {children}
      </Grid>
    </Paper>
  );
};
