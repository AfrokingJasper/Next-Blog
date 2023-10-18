import React from "react";
import AllPosts from "@/components/posts/all-post";
import type { GetStaticProps } from "next";
import { getAllPost } from "@/lib/post-util";
import { AllPostsProps } from "..";
import Head from "next/head";

function AllPostPage(props: AllPostsProps) {
  return (
    <React.Fragment>
      <Head>
        <title>All post</title>
        <meta name="description"/>
      </Head>
      <AllPosts posts={props.posts} />;
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPost();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostPage;
