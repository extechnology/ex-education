import FeaturedCourses from "./components/home/FeaturedCourses";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero/>
      <FeaturedCourses/>
    </div>
  );
}
