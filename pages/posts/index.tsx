import AllPosts from "@/components/posts/all-post";

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
  {
    slug: "getting-started-with-nextjs4",
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

function AllPostPage() {
  return <AllPosts posts={DUMMY_POST} />;
}

export default AllPostPage;
