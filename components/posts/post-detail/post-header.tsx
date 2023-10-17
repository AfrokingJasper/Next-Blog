import Image from "next/image";

type PostHeaderProps = {
  image: string;
  title: string;
};

function PostHeader(props: PostHeaderProps) {
  const { title, image } = props;
  return (
    <header className="flex justify-between items-center py-3 px-4 border-b-4 border-gray-800">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{title}</h1>
      <Image src={image} alt={title} height={200} width={150} />
    </header>
  );
}
export default PostHeader;
