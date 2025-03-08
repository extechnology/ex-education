import AboutUs from "./components/home/AboutUs";
import FeaturedCourses from "./components/home/FeaturedCourses";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <div className="bg-zinc-100">
      <Hero/>
      <FeaturedCourses/>
      <AboutUs/>
    </div>
  );
}
