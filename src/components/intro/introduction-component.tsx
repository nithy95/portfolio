import "./introduction.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import MyPic from "../../assets/images/my-picture-transparent-bg.png";
import DownArrow from "../../assets/images/down.png";
import DownArrowWhite from "../../assets/images/down-white.png";
import Avatar from "./avatar/avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme, Theme } from "@mui/material/styles";

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

export default function Intro() {
  const textRef = useRef<HTMLSpanElement>(null);
  const currentTheme = useTheme();

  useEffect(() => {
    // @ts-ignore
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={MyPic} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            <span>Hi There</span>, I'm
          </h2>
          <h1>Nithyanantham</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a>
          <img
            src={
              currentTheme.palette.mode === "light" ? DownArrow : DownArrowWhite
            }
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
