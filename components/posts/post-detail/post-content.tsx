import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import { PostDetailProps } from "@/pages/posts/[slug]";

function PostContent(props: PostDetailProps) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className="w-[90%] md:w-[70%] lg:w-[60%]  mx-auto bg-gray-100 mt-10">
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown className="p-5">{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
