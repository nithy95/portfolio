import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { alpha } from "@material-ui/core/styles";

const SocialMediaIconButton = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.primary.main, 0.1)};
  }
`;

export default SocialMediaIconButton;
