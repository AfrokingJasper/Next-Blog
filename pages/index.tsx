import Hero from "@/components/home-page/hero";
import FeaturedPost from "@/components/home-page/featured-post";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost />
    </Fragment>
  );
}

export default HomePage;
