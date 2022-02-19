import Contact from "../contact/contact";
import Experience from "../experience/experience";
import Introduction from "../intro/introduction-component";
import Skills from "../skills/skills";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Introduction />
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}
