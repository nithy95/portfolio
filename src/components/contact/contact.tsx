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
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import SocialMediaIconButton from "../common/buttons/social-media-icon-button";
import FacebookIcon from "../common/icons/facebook";
// import { Icon } from "@iconify/react";

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
    <ElevatedCard title={"Let's get in touch..."} icon="tabler:messages">
      <div className="contact">
        <div className="contact-pitch-container">
          <Typography className="contact-pitch">
            Found my profile to be interesting? and you have an interesting role
            for me? I'd be glad to discuss further details with you.
          </Typography>
          <Typography className="contact-pitch">
            Contact me @
            <OutlinedInput
              type="text"
              value={contact.email}
              size="small"
              disabled
              sx={{ width: "30ch", ml: "5px" }}
              className="copy-text"
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
                    <ContentCopy
                      style={{
                        color:
                          currentTheme.palette.mode === "dark"
                            ? "#ffffffb3"
                            : "#00000061",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Typography>
        </div>
        <div className="contact-container">
          <ul>
            <li className="social-bar">
              <a href={contact.linkedIn} target="_blank">
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
              <a href={contact.gitHub} target="_blank">
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
              <a href={contact.medium} target="_blank">
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
              <a href={contact.instagram} target="_blank">
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
              <a href={contact.instagram} target="_blank">
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
