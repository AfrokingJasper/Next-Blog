import Image from "next/image";

type PostHeaderProps = {
  image: string;
  title: string;
};

function PostHeader(props: PostHeaderProps) {
  const { title, image } = props;
  return (
    <header>
      <h1 className="text-3xl font-bold">{title}</h1>
      <Image src={image} alt={title} height={200} width={150} />
    </header>
  );
}
export default PostHeader;
