import "./home.css";
import Contact from "../contact/contact";
import Experience from "../experience/experience";
import Introduction from "../intro/introduction-component";
import Skills from "../skills/skills";
import { useRef } from "react";
import Blogs from "../blog/blog";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="app">
      <div className="paper-bg">
        <Introduction />
      </div>
      <div className="section">
        <Skills />
      </div>
      <div className="section">
        <Experience />
      </div>
      {/* <div className="section">
        <Blogs />
      </div> */}
      <div className="section">
        <Contact />
      </div>
    </div>
  );
}
