import { AppBar, styled } from "@mui/material";
import { alpha } from "@mui/system";

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 70;
// 0 5px 12px 0 rgb(0 0 0  10%)
const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  height: APPBAR_MOBILE,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: "none",
  backgroundColor: `${alpha(
    theme.palette.mode === "dark" ? "#343a40" : "#fff",
    0.2
  )}`,
  [theme.breakpoints.up("md")]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default TransparentAppBar;
