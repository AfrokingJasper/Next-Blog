import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "nextjs.jpg",
  excerpt:
    "# Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt veritatis vero eaque numquam atque?",
  date: "2022-02-10",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className="">
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
    </article>
  );
}

export default PostContent;
