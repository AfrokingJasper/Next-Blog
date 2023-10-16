import PostGrid, { PostItemProps } from "../posts/posts-grid";
import { PostGridProps } from "../posts/posts-grid";

function FeaturedPosts(props: PostGridProps) {
  return (
    <section className="flex flex-col gap-3 p-5 text-white bg-gray-600">
      <h2 className="text-2xl font-bold uppercase text-center">
        Featured Posts
      </h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
