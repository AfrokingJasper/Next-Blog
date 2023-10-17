import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import { PostDetailProps } from "@/pages/posts/[slug]";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "nextjs.jpg",
  excerpt:
    "# Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt veritatis vero eaque numquam atque?",
  date: "2022-02-10",
};

function PostContent(props: PostDetailProps) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className="w-[90%] md:w-[70%] lg:w-[60%]  mx-auto bg-gray-100 mt-10">
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown className="p-5">{post.excerpt}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
