import "./home.css";
import Contact from "../contact/contact";
import Experience from "../experience/experience";
import Introduction from "../intro/introduction";
import Skills from "../skills/skills";
import { useRef } from "react";

export default function Home() {
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="app">
      <div className="paper-bg">
        <Introduction skillsRef={skillsRef} contactRef={contactRef} />
      </div>
      {/* <div className="section">
        <MyStory />
      </div> */}
      <div className="section" ref={skillsRef}>
        <Skills />
      </div>
      <div className="section">
        <Experience />
      </div>
      {/* <div className="section">
        <Blogs />
      </div> */}
      <div className="section" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
