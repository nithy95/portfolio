import "./introduction.css";
import Avatar from "./avatar/avatar";
import { Paper, Table, TableCell, TableRow, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme, Theme } from "@mui/material/styles";
import TextSwipe from "../common/text-swipe/text-swipe";

const animationStyles = (theme: Theme) => {
  return {
    hiText: {
      animation: "bounce 2.5s linear infinite",
      color: theme.palette.primary.main,
      fontFamily: "'Nunito', sans-serif;",
      fontWeight: 600,
    },
  };
};
export default function Introduction() {
  const currentTheme = useTheme();

  const fadeStyles = makeStyles(animationStyles(currentTheme))();

  return (
    <Paper
      elevation={3}
      style={{
        margin: "10%",
        width: "80%",
        height: "80%",
        borderRadius: "10px",
        padding: "5%",
      }}
    >
      <Table
        aria-label="simple table"
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableRow>
          <TableCell>
            <Typography variant="h2" className={fadeStyles.hiText}>
              Hi there..
            </Typography>

            <Typography
              style={{
                fontSize: "25px",
                fontFamily: "'Nunito', sans-serif",
                width: "170%",
                fontWeight: 600,
              }}
            >
              <TextSwipe />
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Avatar />
          </TableCell>
        </TableRow>
      </Table>
    </Paper>
  );
}
