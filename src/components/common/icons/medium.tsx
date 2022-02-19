import { useTheme, Theme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";

const MediumIcon = (props: any) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={props.color}
        viewBox="0 0 48 48"
      >
        <path d="M 5.8710938 8.0058594 C 4.8860937 8.0058594 4 8.7979062 4 9.8789062 L 4 33.242188 C 4 34.016188 4.4254219 34.729656 5.1074219 35.097656 L 15.689453 40.816406 C 15.930453 40.946406 16.183687 41.005859 16.429688 41.005859 C 17.249688 41.005859 17.998047 40.3485 17.998047 39.4375 L 17.998047 29.771484 L 41.427734 40.822266 C 42.553023 41.383067 43.992188 40.48668 43.992188 39.234375 L 43.992188 15.484375 L 43.949219 15.484375 C 43.937177 14.170452 43.164307 12.885128 41.830078 12.400391 L 41.984375 12.466797 L 33.482422 8.2539062 L 33.472656 8.2480469 C 32.898104 7.9739748 32.25735 7.9379778 31.675781 8.1035156 C 31.094213 8.2690534 30.570887 8.6367938 30.226562 9.171875 L 22.525391 20.957031 L 17.666016 13.707031 L 17.666016 13.705078 C 17.665521 13.704305 17.664558 13.703898 17.664062 13.703125 L 17.589844 13.591797 L 17.576172 13.601562 C 17.369497 13.320621 17.105172 13.079805 16.775391 12.927734 L 6.6542969 8.1796875 C 6.3952969 8.0606875 6.1300937 8.0058594 5.8710938 8.0058594 z M 32.53125 11.128906 L 40.726562 15.191406 L 40.806641 15.220703 C 40.952778 15.273798 41.014005 15.37086 40.996094 15.484375 L 40.992188 15.484375 L 40.992188 15.515625 C 40.980848 15.554775 40.962486 15.594888 40.931641 15.636719 L 40.923828 15.648438 L 29.644531 31.582031 L 24.337891 23.662109 L 32.53125 11.128906 z M 7 11.654297 L 14.998047 15.40625 L 14.998047 37.033203 L 7 32.708984 L 7 11.654297 z M 17.998047 19.589844 L 24.724609 29.628906 L 17.998047 26.455078 L 17.998047 19.589844 z M 40.992188 20.742188 L 40.992188 37.300781 L 32.205078 33.15625 L 40.992188 20.742188 z" />
      </svg>
    </SvgIcon>
  );
};
export default MediumIcon;