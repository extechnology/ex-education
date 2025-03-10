import AboutUs from "./components/home/AboutUs";
import FeaturedCourses from "./components/home/FeaturedCourses";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <div className="bg-[#F4F7FB]">
      <Hero/>
      <FeaturedCourses/>
      <AboutUs/>
    </div>
  );
}
