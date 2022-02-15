import { ContentCopy } from "@mui/icons-material";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar,
  Grid,
  Typography,
  Icon,
  Paper,
} from "@mui/material";
import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import copy from "copy-to-clipboard";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import mediumIcon from "../../assets/images/medium-icon.png";
import Mopeim from "../common/custom-icon";

{
  /* TODO: Add mail icon here */
}

function MediumIcon(props: any) {
  return (
    <Icon {...props}>
      <img src={mediumIcon} width="35px" height="35px" />
    </Icon>
  );
}
export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ElevatedCard title={"Hire Me"}>
      <Grid item m={4} ml={15}>
        <Typography variant="h6">
          You have a project in mind and you're looking for someone who has
          diverse set of skills, contact me @
          <OutlinedInput
            type="text"
            value={profile.personal.email}
            size="small"
            disabled
            sx={{ width: "30ch", ml: "5px" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    copy(profile.personal.email);
                    setOpen(true);
                  }}
                  onMouseDown={(event) => event.preventDefault()}
                  edge="end"
                >
                  <ContentCopy />
                </IconButton>
              </InputAdornment>
            }
          />
        </Typography>
      </Grid>
      <Grid item md={10}>
        <Grid container sx={{ ml: "50%", marginBottom: "20px" }}>
          <Grid item xs={1}>
            <LinkedInIcon fontSize="large" />
          </Grid>
          <Grid item xs={1}>
            <GitHubIcon fontSize="large" />
          </Grid>
          <Grid item xs={1}>
            <Mopeim fontSize="large" />
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Copied!
        </Alert>
      </Snackbar>
    </ElevatedCard>
  );
}
