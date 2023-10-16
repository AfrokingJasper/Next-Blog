import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="flex justify-between items-center py-4 px-10 md:px-16 bg-gray-800 text-white">
      <Link className="text-2xl font-bold" href="/">
        FORTUNE.
      </Link>

      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
