import React from "react";
import uuid from "react-uuid";
import Post from "./Post";
import Sidebar from "./Sidebar";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import PostCreate from "./PostCreate";

const featuredPosts = [
  {
    id: uuid(),
    title: "Featured post",
    createdDate: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    source: {
      url: "/static/post1.jpeg",
      title: "Image Text",
    },
    favorites: [],
    shared: 0,
    comments: [],
  },
  {
    id: uuid(),
    title: "Post title",
    createdDate: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    source: {
      url: "/static/post1.jpeg",
      title: "Image Text",
    },
    favorites: [
      {
        id: "1",
        fullName: "Jorge Chable",
        profile: "https://source.unsplash.com/random",
      },
    ],
    shared: 0,
    comments: [
      {
        id: uuid(),
        fullName: "Jorge Chable",
        createdDate: "Nov 12",
        profile: "https://source.unsplash.com/random",
        comment: "Hello world",
      },
    ],
  },
];

export default function Blog() {
  return (
    <GridContainer>
      {/* <GridItem xs={12}>
        <MainFeaturedPost post={mainFeaturedPost} />
      </GridItem> */}

      <GridItem br />

      <GridItem xs={12} md={8}>
        <GridContainer>
          <PostCreate />

          <GridItem br />
        </GridContainer>

        {featuredPosts.map((post, index) => (
          <Post key={post.id} {...post} index={index} />
        ))}
      </GridItem>

      <Sidebar />
    </GridContainer>
  );
}
