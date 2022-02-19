import "./contact.css";
import { ContentCopy } from "@mui/icons-material";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar,
  Typography,
} from "@mui/material";
import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import copy from "copy-to-clipboard";
import { useState } from "react";
import MediumIcon from "../common/icons/medium";
import GitHubIcon from "../common/icons/github";
import LinkedInIcon from "../common/icons/linkedin";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "../common/icons/instagram";

// Icons used from https://icons8.com/icon/set/social-media/fluency-systems-regular
export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const currentTheme = useTheme();

  const contact = profile.personal.contact;
  return (
    <ElevatedCard title={"Hire Me"}>
      <div className="contact">
        <div className="contact-container">
          <ul>
            <li>
              <Typography variant="h6">
                You have a project in mind and you're looking for someone who
                has diverse set of skills, contact me @
              </Typography>
            </li>
            <li>
              <OutlinedInput
                type="text"
                value={contact.email}
                size="small"
                disabled
                sx={{ width: "30ch", ml: "5px" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        copy(contact.email);
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
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <ul>
            <li className="social-bar">
              <a href={contact.linkedIn} target="_blank">
                <LinkedInIcon
                  fontSize="large"
                  color={currentTheme.palette.primary.main}
                />
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.gitHub} target="_blank">
                <GitHubIcon
                  fontSize="large"
                  color={currentTheme.palette.primary.main}
                />
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.medium} target="_blank">
                <MediumIcon
                  fontSize="large"
                  color={currentTheme.palette.primary.main}
                />
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.instagram} target="_blank">
                <InstagramIcon
                  fontSize="large"
                  color={currentTheme.palette.primary.main}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
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
