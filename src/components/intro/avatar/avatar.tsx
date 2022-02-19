import MyPic from "../../../assets/images/my-picture.jpeg";
import { useTheme, Theme } from "@mui/material/styles";
import { makeStyles, alpha } from "@material-ui/core/styles";

const rippleImageClasses = (theme: Theme) => {
  return {
    rippleImage: {
      background: "transparent",
      cursor: "pointer",
      border: `8px solid ${theme.palette.primary.main}`,
      borderRadius: "50%",
      animation: "$ripple 1.2s linear infinite",
      transition: "all 0.7s ease",
      "&:hover": {
        transform: "scale(1.1)",
      },
      "&:focus": {
        outline: "none",
      },
    },
    "@keyframes ripple": {
      "0%": {
        boxShadow: `0 0 0 0 ${alpha(
          theme.palette.primary.main,
          0.1
        )}, 0 0 0 20px ${alpha(
          theme.palette.primary.main,
          0.1
        )}, 0 0 0 40px ${alpha(
          theme.palette.primary.main,
          0.1
        )}, 0 0 0 60px ${alpha(theme.palette.primary.main, 0.1)}`,
      },
      "100%": {
        boxShadow: `0 0 0 20px ${alpha(
          theme.palette.primary.main,
          0.1
        )}, 0 0 0 40px ${alpha(
          theme.palette.primary.main,
          0.1
        )}, 0 0 0 60px ${alpha(
          theme.palette.primary.main,
          0.1
        )}, 0 0 0 80px ${alpha(theme.palette.primary.main, 0)}`,
      },
    },
  };
};

const Avatar = (props: { style?: any }) => {
  const currentTheme = useTheme();

  const rippleImageStyles = makeStyles(rippleImageClasses(currentTheme))();
  return (
    <img
      src={MyPic}
      alt="nithy"
      className={rippleImageStyles.rippleImage}
      width="50%"
      height="auto"
      style={{
        willChange: "animation, transform",
        textAlign: "left",
        ...props.style,
      }}
    />
  );
};

export default Avatar;
