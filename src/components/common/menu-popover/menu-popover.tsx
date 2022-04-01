import { Popover } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { FunctionComponent } from "react";
import { grey } from "@mui/material/colors";

// ----------------------------------------------------------------------

const ArrowStyle = styled("span")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    top: -7,
    zIndex: -1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: "absolute",
    borderRadius: "0 0 4px 0",
    transform: "rotate(-135deg)",
    background: theme.palette.background.default,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

// ----------------------------------------------------------------------

export const MenuPopover: FunctionComponent<{
  sx?: any;
  open: any;
  onClose: any;
  anchorEl: any;
}> = ({ children, sx, ...other }) => {
  return (
    <Popover
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: "inherit",
          boxShadow: `0 0 2px 0 ${alpha(
            grey[500],
            0.2
          )}, 0 20px 40px -4px ${alpha(grey[500], 0.2)}`,
          border: `solid 1px ${alpha("#919EAB", 0.12)}`,
          width: "auto",
          ...sx,
        },
      }}
      {...other}
    >
      <ArrowStyle className="arrow" />

      {children}
    </Popover>
  );
};
