import PostItem from "./post-items";

export type PostItemProps = {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
};

export type PostGridProps = {
  posts: PostItemProps[];
};

function PostGrid(props: PostGridProps) {
  return (
    <ul className="grid md:grid-cols-3 gap-5  justify-items-center">
      {props.posts.map((post) => (
        <PostItem
          key={post.slug}
          image={post.image}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
          content={post.content}
        />
      ))}
    </ul>
  );
}

export default PostGrid;
