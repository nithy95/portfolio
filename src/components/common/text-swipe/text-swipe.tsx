import "./text-swipe.css";
import { useTheme } from "@mui/material/styles";

const TextSwipe = () => {
  const currentTheme = useTheme();
  return (
    <h4 className="wordCarousel">
      I'm nithy. I'm a fullstack web developer. I can&nbsp;
      <div style={{ color: currentTheme.palette.primary.main }}>
        <ul className="flip3">
          <li>design</li>
          <li>create </li>
          <li>deploy</li>
        </ul>
      </div>
      &nbsp;applications for you.
    </h4>
  );
};

export default TextSwipe;
