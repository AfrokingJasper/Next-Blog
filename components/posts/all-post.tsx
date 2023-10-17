import PostGrid from "./posts-grid";
import { PostGridProps } from "./posts-grid";

function AllPosts(props: PostGridProps) {
  return (
    <section className="text-gray-800">
      <h1 className="text-2xl font-bold text-center p-5">ALL POSTS</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
