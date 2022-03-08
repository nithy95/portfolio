import { Divider } from "@mui/material";
import { FunctionComponent } from "react";
import ElevatedCardProps from "../../../models/common/elevated-card-model";
import { Body1Typography } from "../typographies/typographies";

export const ElevatedCard: FunctionComponent<ElevatedCardProps> = ({
  title,
  children,
  id,
}) => {
  return (
    <section
      // style={{
      //   width: "100%",
      //   minHeight: "100vh",
      //   background: bg,
      // }}
      id={id}
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
      {children}
    </section>
  );
};
