// import { Icon } from "@iconify/react";
// import plusFill from "@iconify/icons-eva/plus-fill";
// import { Link as RouterLink } from "react-router-dom";
// material
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MediumArticle from "../../models/blog/medium.blog";
import { ElevatedCard } from "../common/elevated-card/elevated-card";
import { Body1Typography } from "../common/typographies/typographies";
import BlogPostCard from "./blog-card/blog-post";
// components
// import Page from "../components/Page";
// import {
//   BlogPostCard,
//   BlogPostsSort,
//   BlogPostsSearch,
// } from "../components/_dashboard/blog";
//
// import POSTS from "../_mocks_/blog";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------

export default function Blog() {
  const [blogs, setBlogs] = useState<MediumArticle[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nithy.official95"
      )
      .then((response) => {
        let posts: MediumArticle[] = response.data.items;
        setBlogs([
          ...posts,
          ...posts,
          ...posts,
          ...posts,
          ...posts,
          ...posts,
          ...posts,
          ...posts,
        ]);
      });
  });
  return (
    <ElevatedCard title={"Check out my my blog"} icon="blog">
      <Container style={{ marginTop: 50 }}>
        <Grid container spacing={3}>
          {blogs.map((post, index) => (
            <BlogPostCard key={post.guid} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </ElevatedCard>
  );
}
