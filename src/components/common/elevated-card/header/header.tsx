import ElevatedCardProps from "../../../../models/common/elevated-card-model";
import { Body1Typography } from "../../typographies/typographies";
import { useTheme } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { fontColor } from "../../../../utils/color";

const PageHeader = ({ title, subtitle, icon }: ElevatedCardProps) => {
  const currentTheme = useTheme();
  return (
    <Body1Typography variant="h5" color="text.primary" align="center" pb="15px">
      <Icon icon={icon} width="50" height="50" color={"#919EAB"} />
      <article
        style={{
          overflow: "hidden",
          color: fontColor(currentTheme),
        }}
      >
        {title}
      </article>
      {subtitle && (
        <Body1Typography variant="caption" color="text.primary" align="center">
          {subtitle}
        </Body1Typography>
      )}
    </Body1Typography>
  );
};

export default PageHeader;
