import AboutUs from "./components/home/OurPassion";
import FeaturedCourse2 from "./components/home/FeaturedCourse2";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <div className="bg-[#F4F7FB]">
      <Hero/>
      <FeaturedCourse2/>
      <AboutUs/>
    </div>
  );
}
