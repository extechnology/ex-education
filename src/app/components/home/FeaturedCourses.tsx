"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

const courseDetails = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "With AI and Graphics Design combines creativity and technology to drive impactful campaigns. Leverage AI tools for data-driven strategies and stunning visuals to engage audiences, boost brand presence, and achieve measurable results in the digital world.",
    image:
      "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169834.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-fuchsia-600",
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Through our Graphics Design courses blend creativity with advanced tools, empowering you to master visual storytelling, branding, and design. Transform your passion into a profession with hands-on training and industry-relevant skills.",
    image:
      "https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329542.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-sky-400",
  },
  {
    id: 3,
    title: "Robotics",
    description:
      "Our Robotics learning offers hands-on in automation, AI, and advanced technology. Build, program, and innovate with industry-aligned training, preparing you to lead in the fast-evolving world of robotics and smart systems",
    image:
      "https://img.freepik.com/premium-photo/css-javascript-html-usage-monitor-closeup-function-source-code-abstract-it-technology-background-software-source-code_372999-2337.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-orange-600",
  },
];

const FeaturedCourses: React.FC = () => {
  

  
  return (
    <div className=" text-gray-800 max-w-7xl mx-auto space-y-5 pb-20 md:px-10 lg:px-0">
      <h1 className="font-bold text-3xl text-center md:text-start  pb-3">
        Our <span className="text-fuchsia-700">Featured</span> Courses
      </h1>
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
                <p className=" ">{course.description}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={22}
                      className="cursor-pointer  fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <Link
                  href="/course"
                  className="text-gray-800 hover:underline font-medium  rounded-full"
                >
                  See More
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
