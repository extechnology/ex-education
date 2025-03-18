"use client";
import Image from "next/image";
import Link from "next/link";

const courseDetails = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "AI and graphic design blend creativity and technology to craft data-driven campaigns with stunning visuals that enhance engagement and brand impact..",
    image:
      "https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-fuchsia-600",
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Our graphic design courses merge creativity with advanced tools, equipping you with visual storytelling, branding, and industry-ready skills..",
    image:
      "https://img.freepik.com/free-psd/graphic-designer-top-view-mockup-with-laptop_23-2147675736.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-sky-400",
  },
  {
    id: 3,
    title: "Robotics",
    description:
      "Our robotics learning provides hands-on training in automation, AI, and advanced technology, preparing you to innovate and lead in smart systems.",
    image:
      "https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329542.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",

    color: "bg-orange-600",
  },
];

const FeaturedCourses: React.FC = () => {
  

  
  return (
    <div className=" text-gray-800 max-w-7xl mx-auto space-y-5 py-20 md:px-10 lg:px-0">
      {/* <h1 className="font-bold text-3xl text-center md:text-start  pb-3">
        Our <span className="text-fuchsia-700">Featured</span> Courses
      </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10 px-4 md:px-0 perspective-1000 preserve-3d">
        {courseDetails.map((course) => {
          return (
            <div
              key={course.id}
              className="shadow-md rounded-lg hover:perspective-1000 bg-white hover:scale-105 hover:shadow-xl transform rotate-y-12 transition-transform duration-500 hover:rotate-y-20  "
            >
              <div className="rounded-t-lg ">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={500}
                  className="rounded-t-lg"
                />
                <div
                  className={`relative w-36 bottom-8 left-0 rounded-tr-2xl opacity-90 text-white px-2 py-1 shining-text ${course.color} `}
                >
                  Recommended
                </div>
              </div>
              <div className="space-y-3 px-6 pb-6 ">
                <h2 className="font-semibold text-xl text-violet-600">{course.title}</h2>
                <p className="pb-5">{course.description}</p>
                
                <Link
                  href="/course"
                  className="text-gray-800 hover:underline font-medium  rounded-full"
                >
                  <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-2">Learn More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedCourses;
