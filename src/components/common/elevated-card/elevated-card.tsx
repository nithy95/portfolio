import { Divider } from "@mui/material";
import { FunctionComponent } from "react";
import ElevatedCardProps from "../../../models/common/elevated-card-model";

import PageHeader from "./header/header";

export const ElevatedCard: FunctionComponent<ElevatedCardProps> = (props) => {
  return (
    <section>
      <PageHeader {...props} />
      <Divider></Divider>
      {props.children}
    </section>
  );
};
