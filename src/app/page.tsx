'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./components/home/OurPassion";
import FeaturedCourse2 from "./components/home/FeaturedCourse2";
import Hero from "./components/home/Hero";
// import VideoGrid from "./components/home/videoplayer/VideoGrid";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      mirror: true, 
    });
  }, []);
  return (
    <div className="bg-[#F4F7FB]">
      <Hero />
      <FeaturedCourse2 />
      <AboutUs />
      {/* <VideoGrid /> */}
    </div>
  );
}
