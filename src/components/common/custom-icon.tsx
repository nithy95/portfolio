import * as React from "react";
import { SvgIcon, SvgIconProps, styled } from "@mui/material";

const CustomIcon = styled(SvgIcon, {
  name: "MopeimIcon",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2.25px",
}));

// CustomIcon.defaultProps = {
//   viewBox: "0 0 24 24",
//   focusable: "false",
//   "aria-hidden": "false",
// };

const Mopeim = (props: any) => (
  <CustomIcon {...props}>
    
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 70 25.993 l -3.992 3.827 c -0.344 0.262 -0.515 0.693 -0.444 1.12 v 28.12 c -0.071 0.427 0.099 0.858 0.444 1.12 l 3.898 3.827 v 0.84 H 50.299 v -0.84 l 4.038 -3.92 c 0.397 -0.397 0.397 -0.513 0.397 -1.12 V 36.237 L 43.506 64.754 h -1.517 L 28.917 36.237 V 55.35 c -0.109 0.804 0.158 1.612 0.724 2.194 l 5.252 6.371 v 0.84 H 20 v -0.84 l 5.252 -6.371 c 0.562 -0.582 0.813 -1.396 0.677 -2.194 V 33.25 c 0.062 -0.614 -0.172 -1.22 -0.63 -1.633 l -4.669 -5.624 v -0.84 h 14.496 l 11.204 24.573 l 9.851 -24.573 H 70 V 25.993 z"
      transform=" matrix(1 0 0 1 0 0) "
      stroke-linecap="round"
    />
  </CustomIcon>
);

export default Mopeim;
