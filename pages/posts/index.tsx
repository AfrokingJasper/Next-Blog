import AllPosts from "@/components/posts/all-post";
import type { GetStaticProps } from "next";
import { getAllPost } from "@/lib/post-util";
import { AllPostsProps } from "..";

function AllPostPage(props: AllPostsProps) {
  return <AllPosts posts={props.posts} />;
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
