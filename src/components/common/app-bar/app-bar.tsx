import { AppBar, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { alpha } from "@mui/system";

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 90;

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
    height: APPBAR_MOBILE,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    padding: theme.spacing(0, 3),
    boxShadow: "0 5px 12px 0 rgb(0 0 0 / 10%)",
    backgroundColor: `${alpha(theme.palette.mode === 'dark' ? grey[900] : "#fff", 0.72)}`,
    [theme.breakpoints.up('md')]: {
      height: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5)
    }
  }));

  export default TransparentAppBar