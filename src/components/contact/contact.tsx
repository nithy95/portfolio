import "./contact.css";
import { Alert, Snackbar, Typography, Tooltip } from "@mui/material";
import { profile } from "../../constants/profile";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import { useState } from "react";
import MediumIcon from "../common/icons/medium";
import GitHubIcon from "../common/icons/github";
import LinkedInIcon from "../common/icons/linkedin";
import InstagramIcon from "../common/icons/instagram";
import DownloadIcon from "../common/icons/download";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import SocialMediaIconButton from "../common/buttons/social-media-icon-button";
import FacebookIcon from "../common/icons/facebook";
import { Icon } from "@iconify/react";
import CopyContentInput from "../common/copy-content-box/copy-content-input-box";
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

  const contact = profile.personal.contact;

  const currentTheme = useTheme();

  const downloadButtonStyles = makeStyles(animationStyles(downloadAnimation))();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ElevatedCard title={"Let's get in touch..."} icon="iconoir:message-text">
      <div className="contact">
        <div className="contact-pitch-container">
          <Typography className="contact-pitch">
            {/* Found my profile to be interesting? and you have an interesting role
            for me? I'd be glad to discuss further details with you. */}
            Wanna build a Websites or an App? Aspiring to be a developer, but no
            idea how to start? Wanna Collaborate or pitch in for some Fun/Real
            projects? I'd be glad to discuss further details with you.
          </Typography>
          <Typography className="contact-pitch">
            <table>
              <tr>
                <th colSpan={2}>I'll be available in,</th>
              </tr>
              <tr>
                <th>
                  <Icon
                    icon="simple-icons:maildotru"
                    className="icon"
                    color={currentTheme.palette.primary.main}
                    inline={true}
                  />
                </th>
                <th>
                  <CopyContentInput value={contact.email} setOpen={setOpen} />
                </th>
              </tr>
              <tr>
                <th>
                  <Icon
                    icon="fluent:phone-24-regular"
                    width="35"
                    height="35"
                    className="icon"
                    color={currentTheme.palette.primary.main}
                    inline={true}
                  />
                </th>
                <th>
                  <CopyContentInput value={contact.mobile} setOpen={setOpen} />
                </th>
              </tr>
            </table>
          </Typography>
        </div>
        {/* TODO: Need to work on mobile view bugs for the below bar */}
        <div className="contact-container">
          <ul>
            <li className="social-bar">
              <a href={contact.linkedIn} target="_blank" rel="noreferrer">
                <SocialMediaIconButton>
                  {/* <Icon
                    icon="jam:linkedin-square"
                    width="35"
                    height="35"
                    className="icon"
                    color={currentTheme.palette.primary.main}
                    inline={true}
                  /> */}
                  <LinkedInIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.gitHub} target="_blank" rel="noreferrer">
                <SocialMediaIconButton>
                  {/* <Icon
                    icon="jam:github-square"
                    width="35"
                    height="35"
                    className="icon"
                    color={currentTheme.palette.primary.main}
                    inline={true}
                  /> */}
                  <GitHubIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.medium} target="_blank" rel="noreferrer">
                <SocialMediaIconButton>
                  {/* <Icon
                    icon="jam:medium-square"
                    width="35"
                    height="35"
                    className="icon"
                    color={currentTheme.palette.primary.main}
                    inline={true}
                  /> */}
                  <MediumIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                <SocialMediaIconButton>
                  {/* <Icon
                    icon="jam:instagram"
                    width="35"
                    height="35"
                    className="icon"
                    color={currentTheme.palette.primary.main}
                    inline={true}
                  /> */}
                  <InstagramIcon
                    fontSize="large"
                    color={currentTheme.palette.primary.main}
                  />
                </SocialMediaIconButton>
              </a>
            </li>
            <li className="social-bar">
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                <SocialMediaIconButton>
                  {/* <Icon
                    icon="jam:facebook-square"
                    width="35"
                    height="35"
                    className="icon"
                    color={currentTheme.palette.primary.main}
                    inline={true}
                  /> */}
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
                    {/* <Icon
                      icon="lucide:download"
                      width="35"
                      height="35"
                      className="icon"
                      color={currentTheme.palette.primary.main}
                      inline={true}
                    /> */}
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
        <div className="contact-container copy-write">
          © Copyright 2022&nbsp;
          <span
            style={{
              color: currentTheme.palette.primary.main,
            }}
          >
            Nithy
          </span>
          . All rights reserved.
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Copied!
        </Alert>
      </Snackbar>
    </ElevatedCard>
  );
}
