import React, { Fragment } from "react";
import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData } from "@/lib/post-util";
import type { GetStaticProps, GetStaticPaths } from "next";
import { getPostFiles } from "@/lib/post-util";
import { PostItemProps } from "@/components/posts/posts-grid";
import Head from "next/head";

export type PostDetailProps = {
  post: {
    title: string;
    date: string;
    image: string;
    excerpt: string;
    isFeatured: boolean;
    slug: string;
    content: string;
  };
};

function PostDetailPage(props: PostDetailProps) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const { slug } = params as { slug: string };

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },

    revalidate: 600,
  };
};
export const getStaticPaths: GetStaticPaths = () => {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
};

export default PostDetailPage;
