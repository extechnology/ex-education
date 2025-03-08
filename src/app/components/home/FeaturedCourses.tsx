"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const courseDetails = [
  {
    id: 1,
    title: "Data Science",
    description: "Extract insights from data using AI and analytics.",
    image:
      "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169834.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-fuchsia-600",
  },
  {
    id: 2,
    title: "Robotics",
    description: "Design and build intelligent automated systems.",
    image:
      "https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329542.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-sky-600",
  },
  {
    id: 3,
    title: "Java",
    description:
      "Powerful language for web, mobile, and enterprise applications.",
    image:
      "https://img.freepik.com/premium-photo/css-javascript-html-usage-monitor-closeup-function-source-code-abstract-it-technology-background-software-source-code_372999-2337.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-orange-600",
  },
  {
    id: 4,
    title: "Python",
    description: "Versatile programming language for web, data, and automation",
    image:
      "https://img.freepik.com/premium-vector/vector-illustration-cute-green-python-coding-laptop_831490-4588.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    color: "bg-green-600",
  },
];

const FeaturedCourses: React.FC = () => {
  const [selectedStar, setSelectedStar] = useState<{ [key: number]: number }>(
    {}
  );

  const handleStarClick = (courseId: number, index: number) => {
    setSelectedStar((prev) => ({
      ...prev,
      [courseId]: index + 1, // Store the clicked star index
    }));
  };
  return (
    <div className=" text-gray-800 max-w-7xl mx-auto space-y-5 py-10">
      <h1 className="font-bold text-3xl text-center md:text-start">
        Our <span className="text-fuchsia-700">Featured</span> Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-4 md:px-0">
        {courseDetails.map((course) => {
          return (
            <div key={course.id} className="shadow-md rounded-lg bg-white ">
              <div>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={500}
                  className="rounded-t-lg"
                />
                <div className={`relative w-32 bottom-8 left-0 rounded-tr-2xl opacity-90 text-white px-2 py-1 ${course.color} `}>
                  Recommended
                </div>
              </div>
              <div className="space-y-3 px-6 pb-6">
                <h2 className="font-semibold text-xl">{course.title}</h2>
                <p>{course.description}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={22}
                      className={`cursor-pointer ${
                        index < (selectedStar[course.id] || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-400"
                      }`}
                      onClick={() => handleStarClick(course.id, index)}
                    />
                  ))}
                </div>
                <Link
                  href="/"
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
