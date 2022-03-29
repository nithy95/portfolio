import PropTypes from "prop-types";
// import { Icon } from "@iconify/react";
// import eyeFill from "@iconify/icons-eva/eye-fill";
// import shareFill from "@iconify/icons-eva/share-fill";
// import messageCircleFill from "@iconify/icons-eva/message-circle-fill";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
} from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
//
// import { format } from "date-fns";
// import { replace } from "lodash";
// import numeral from "numeral";
import MediumArticle from "../../../models/blog/medium.blog";

// ----------------------------------------------------------------------

export function SvgIconStyle({ src, color = "inherit", sx }: any) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        bgcolor: `${color}.main`,
        ...(color === "inherit" && { bgcolor: "currentColor" }),
        ...(color === "action" && { bgcolor: "action.active" }),
        ...(color === "disabled" && { bgcolor: "action.disabled" }),
        ...(color === "paper" && { bgcolor: "background.paper" }),
        ...sx,
      }}
    />
  );
}

export function fDate(date: any) {
  // return format(new Date(date), "dd MMMM yyyy");
}

export function fShortenNumber(number: any) {
  // return replace(numeral(number).format("0.00a"), ".00", "");
}

const CardMediaStyle = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 4)",
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: "absolute",
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const InfoStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

export function ToText(node: any) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

// ----------------------------------------------------------------------

export default function BlogPostCard({
  post,
  index,
}: {
  post: MediumArticle;
  index: number;
}) {
  const { thumbnail, title, author, pubDate, link, description, content } =
    post;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  // const POST_INFO = [
  //   { number: comment, icon: messageCircleFill },
  //   { number: view, icon: eyeFill },
  //   { number: share, icon: shareFill },
  // ];

  return (
    <Grid
      item
      xs={12}
      sm={latestPostLarge ? 12 : 6}
      md={latestPostLarge ? 6 : 3}
    >
      <Card
        sx={{
          position: "relative",
          borderRadius: 6,
          borderRadiusSm: 12,
          borderRadiusMd: 16,
        }}
      >
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: "calc(100% * 4 / 3)",
              "&:after": {
                top: 0,
                content: "''",
                width: "100%",
                height: "100%",
                position: "absolute",
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: "calc(100% * 4 / 3)",
                sm: "calc(100% * 3 / 4.66)",
              },
            }),
          }}
        >
          <SvgIconStyle
            color="paper"
            src="../../../assets/images/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: "absolute",
              //   ...((latestPostLarge || latestPost) && { display: "none" }),
            }}
          />
          <AvatarStyle
            alt={"Nithy"}
            src={
              "https://cdn-images-1.medium.com/fit/c/150/150/0*AwmIPVW72fh2QaZS"
            }
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />

          <CoverImgStyle alt={title} src={thumbnail} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: "100%",
              position: "absolute",
            }),
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{
              color:
                latestPostLarge || latestPost
                  ? "common.white"
                  : "text.disabled",
              display: "block",
            }}
          >
            {/* {fDate(pubDate)} */}
          </Typography>

          <TitleStyle
            // to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            // component={RouterLink}
            sx={{
              ...(latestPostLarge && { typography: "h5", height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: "common.white",
              }),
            }}
          >
            {title}
          </TitleStyle>

          {/* <InfoStyle>{ToText(description.substring(0, 200))}</InfoStyle> */}
        </CardContent>
      </Card>
    </Grid>
  );
}
