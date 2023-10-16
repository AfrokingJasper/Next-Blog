import Image from "next/image";
import Link from "next/link";
import { PostItemProps } from "./posts-grid";

function PostItem(props: PostItemProps) {
  const { image, title, excerpt, date, slug } = props;
  const formattedDate: string = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className="text-center w-[90%] md:w-full lg:w-[80%] bg-gray-800">
      <Link className="flex flex-col gap-5" href={linkPath}>
        <div className="flex  justify-center">
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="flex flex-col gap-3 p-2">
          <h3 className="text-xl">{title}</h3>
          <time className="font-italics">{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
