import Hero from "@/components/home-page/hero";
import FeaturedPost from "@/components/home-page/featured-post";
import { Fragment } from "react";
import { PostGridProps } from "@/components/posts/posts-grid";
import type { GetStaticProps } from "next";
import { getFeaturedPost } from "@/lib/post-util";
import Head from "next/head";

const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "nextjs.jpg",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt veritatis vero eaque numquam atque?",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "nextjs.jpg",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt veritatis vero eaque numquam atque?",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "nextjs.jpg",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt veritatis vero eaque numquam atque?",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "nextjs.jpg",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt veritatis vero eaque numquam atque?",
    date: "2022-02-10",
  },
];
export type AllPostsProps = {
  posts: [];
};

function HomePage(props: AllPostsProps) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to Fortune's Blog</title>
        <meta
          name="description"
          content="i post about programing(javaScript)"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const featuredPost = getFeaturedPost();
  return {
    props: {
      posts: featuredPost,
    },

    revalidate: 60,
  };
};

export default HomePage;
