import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="flex justify-between py-4 px-16 ">
      <Link href="/">LOGO</Link>

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
