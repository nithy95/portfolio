import "./contact.css";
import { ContentCopy } from "@mui/icons-material";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar,
  Typography,
  Tooltip,
} from "@mui/material";
import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import copy from "copy-to-clipboard";
import { useState } from "react";
import MediumIcon from "../common/icons/medium";
import GitHubIcon from "../common/icons/github";
import LinkedInIcon from "../common/icons/linkedin";
import InstagramIcon from "../common/icons/instagram";
import DownloadIcon from "../common/icons/download";
import { useTheme, Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import SocialMediaIconButton from "../common/buttons/social-media-icon-button";
import FacebookIcon from "../common/icons/facebook";
import Divider from "@mui/material/Divider";

// Icons used from https://icons8.com/icon/set/social-media/fluency-systems-regular

const animationStyles = (animation: string) => {
  return {
    resume: {
      animation: animation,
    },
  };
};

export default function Contact() {
  const [open, setOpen] = useState(false);

  const [downloadAnimation, setDownloadAnimation] = useState(
    "tada 2.5s linear infinite"
  );
  const handleClose = () => {
    setOpen(false);
  };

  const contact = profile.personal.contact;

  const currentTheme = useTheme();

  const downloadButtonStyles = makeStyles(animationStyles(downloadAnimation))();

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
                <SocialMediaIconButton>
                  <LinkedInIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.gitHub} target="_blank">
                <SocialMediaIconButton>
                  <GitHubIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.medium} target="_blank">
                <SocialMediaIconButton>
                  <MediumIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            {/* <Divider orientation="vertical" flexItem /> */}
            <li className="social-bar">
              <a href={contact.instagram} target="_blank">
                <SocialMediaIconButton>
                  <InstagramIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.instagram} target="_blank">
                <SocialMediaIconButton>
                  <FacebookIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            <li className="social-bar">
              <Tooltip title="Download My Resume" placement="top-start" arrow>
                <a href={profile.professional.resume} download>
                  <SocialMediaIconButton
                    className={downloadButtonStyles.resume}
                    onClick={() => {
                      setDownloadAnimation("none");
                    }}
                  >
                    <DownloadIcon
                      fontSize="large"
                      color={currentTheme.palette.primary.main}
                    />
                  </SocialMediaIconButton>
                </a>
              </Tooltip>
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
