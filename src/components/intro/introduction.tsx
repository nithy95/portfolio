import "./introduction.css";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import MyPic from "../../assets/images/my-picture-transparent-bg.png";
import DownArrow from "../../assets/images/down.png";
import DownArrowWhite from "../../assets/images/down-white.png";
import { useTheme, Theme } from "@mui/material/styles";
import { Button, useMediaQuery } from "@mui/material";

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

export default function Intro(props: any) {
  const mobileDeviceQuery = useMediaQuery("(max-width:768px)");
  const textRef = useRef<HTMLSpanElement>(null);
  const currentTheme = useTheme();

  const [isMobileDevice, setIsMobileDevice] = useState({
    value: !mobileDeviceQuery,
  });

  useEffect(() => {
    setIsMobileDevice({ value: mobileDeviceQuery });
  }, [mobileDeviceQuery]);

  useEffect(() => {
    console.log("is moboile device = ", isMobileDevice);
  }, [isMobileDevice]);
  useEffect(() => {
    // @ts-ignore
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Systems Designer", "Content Creator"],
    });
  }, []);

  const handleScroll = (page: string) => {
    if (page === "contact") {
      window.scrollTo({
        top: props.contactRef.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: props.skillsRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={MyPic} alt="" />
        </div>
      </div>
      <div
        className="right"
        style={{
          color: currentTheme.palette.mode === "dark" ? "#fff" : "#565758",
        }}
      >
        <div className="wrapper">
          <h2>
            <span>Hi there</span>, I'm
          </h2>
          <h1>Nithyanantham G</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
          <p>
            An experienced Software Engineer with expertise in versatile
            technologies involving in Full- stack development, automation,
            DevOps and Cloud. I can build Sites, Apps, and Teach aspiring
            developers.
          </p>
          {!isMobileDevice.value && (
            <div>
              <Button
                className="hire-me"
                onClick={() => handleScroll("contact")}
                // style={{ fontFamily: '"Nunito", sans-serif' }}
              >
                Hire Me
              </Button>
              <Button
                className="know-more"
                onClick={() => handleScroll("skills")}
              >
                See My Profile
              </Button>
            </div>
          )}
        </div>
        <a>
          <img
            style={{ cursor: "pointer" }}
            src={
              currentTheme.palette.mode === "light" ? DownArrow : DownArrowWhite
            }
            alt=""
            onClick={() => handleScroll("skills")}
          />
        </a>
      </div>
    </div>
  );
}
