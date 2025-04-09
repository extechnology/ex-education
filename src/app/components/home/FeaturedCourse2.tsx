"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const API_URL = "https://server.exedu.in";

// Define TypeScript interface
interface Course {
  id: number;
  title: string;
  sub_title: string;
  description: string;
  image: string;
}

function FeaturedCourse2() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_URL}/api/courses/`);
        if (!response.ok) throw new Error("Failed to fetch courses");
        const data: Course[] = await response.json();
        console.log(data, "courses");

        // Move log before updating state
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <h1 className="md:text-4xl text-3xl font-light text-center py-8">
          OUR <span className="text-fuchsia-700">ADVANCED</span> COURSES
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 px-5 md:px-0">
        {courses.map((course) => (
          <div
            key={course.id}
            className=" shadow-lg overflow-hidden flex flex-col h-full"
          >
            {/* Image */}
            <Image
              src={course.image}
              alt="Course"
              width={500}
              height={300}
              className="w-full aspect-[5/3] object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-6 h-full flex-1">
              {/* Text Content */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h2>
                <p className="text-md text-blue-600 font-medium mb-1">
                  {course.sub_title}
                </p>
                <p className="text-gray-600 text-sm text-justify">
                  {course.description}
                </p>
              </div>

              {/* Button Fixed to Bottom Right */}
              <div className="flex justify-end mt-2 md:mt-0">
                <Link href="/course">
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div className="max-w-6xl mx-auto space-y-5 pb-10 pt-14 md:px-10 lg:px-0">
    //   <span className="bg-gray-100 md:hidden">
    //     <h1 className="font-bold relative md:text-4xl text-3xl pb-7 px-5  md:px-0 text-center md:text-start shining-text">
    //       Our <span className="text-fuchsia-700 ">Advanced</span> Courses
    //     </h1>
    //   </span>
    //   <span
    //     className="bg-gradient-to-r from-gray-200 to-slate-300 rounded-2xl hidden md:inline
    //     font-bold relative md:text-4xl text-3xl px-5 py-2  text-center md:text-start shining-text"
    //   >
    //     Our <span className="text-fuchsia-700 ">Advanced</span> Courses
    //   </span>

    //   {courses.map((course) => (
    //     <div
    //       key={course.id}
    //       className="md:flex gap-5 space-y-6 px-5 md:pt-10 md:px-0"
    //       data-aos="fade-up"
    //     >
    //       <div className="md:w-1/3">
    //         {course.image ? (
    //           <Image
    //             src={course.image} // Directly using full image URL
    //             alt={course.title}
    //             height={400}
    //             width={400}
    //             className="rounded-lg"
    //             unoptimized // Since images are external
    //           />
    //         ) : (
    //           <div className="bg-gray-200 h-[400px] w-[400px] rounded-lg flex items-center justify-center">
    //             <p className="text-gray-500">No Image Available</p>
    //           </div>
    //         )}
    //       </div>

    //       <div className="md:w-2/3 content-center">
    //         <h1 className="font-bold text-2xl md:text-4xl text-fuchsia-700">
    //           <span className="inline-flex bg-gray-200 px-3 py-2 rounded-lg md:bg-transparent md:p-0">
    //             {course.title}
    //           </span>
    //         </h1>

    //         <h2 className="md:font-medium text-2xl text-slate-700 py-4">
    //           {course.sub_title}
    //         </h2>
    //         <p className="text-slate-600 md:text-xl text-pretty text-md text-justify">
    //           {course.description}
    //         </p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default FeaturedCourse2;
