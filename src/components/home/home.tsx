import "./home.css";
import Contact from "../contact/contact";
import Education from "../education/education";
import Experience from "../experience/experience";
import Introduction from "../intro/introduction-component";
import Skills from "../skills/skills";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="app">
      <Introduction />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}
