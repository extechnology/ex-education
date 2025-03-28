"use client";

import Image from "next/image";
import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const courseDetails = [
  {
    id: 1,
    title: "AI Advanced Digital Marketing",
    description: "3 Months Course + Internship",
    image: "/AIDigitalMarketing.jpg",
    color: "bg-fuchsia-600",
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "3 Months Course + Internship",
    image: "/Graphic-Design 2-01.jpg",
    color: "bg-sky-400",
  },
  {
    id: 3,
    title: "Robotics",
    description: "1 Month Course , Robotics Level 1",
    image: "/robotics 2-01.jpg",
    color: "bg-orange-600",
  },
  {
    id: 4,
    title: "Web & App Development",
    description: "3 Months Course + Internship",
    image: "/web and mobile 2-01.jpg",
    color: "bg-teal-600",
  },
  {
    id: 5,
    title: "UI/UX Designing",
    description: "3 Months Course + Internship",
    image: "/ui ux ai 2-01.jpg",
    color: "bg-violet-600",
  },
  {
    id: 6,
    title: "Video Editing",
    description: "3 Months Course + Internship",
    image: "/video-editing 2-01.jpg",
    color: "bg-green-600",
  },
];

const FeaturedCourses: React.FC = () => {
  return (
    <div className="text-gray-800 max-w-7xl mx-auto space-y-5 pt-10 md:py-20 md:px-10 lg:px-0">
      {/* Mobile Slider */}
      {/* <div className="md:hidden px-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          className="w-full"
          pagination={false} // Removes pagination dots
        >
          {courseDetails.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="shadow-md rounded-lg bg-white transform transition-transform duration-500  overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={500}
                  className="rounded-t-lg w-full h-auto"
                />
                <div
                  className={`relative w-36 bottom-8 left-0 rounded-tr-2xl opacity-90 text-white px-2 py-1 ${course.color}`}
                >
                  Recommended
                </div>
                <div className="space-y-2 px-5 pb-6">
                  <h2 className="font-semibold text-xl text-violet-600">
                    {course.title}
                  </h2>
                  <p className="pb-3 text-md">{course.description}</p>
                  <Link href={`/course/${course.id}`} className="block">
                    <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-2 hover:scale-105 transition-all duration-300">
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      {/* Grid Layout for Larger Screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10 px-4 md:px-0">
        {courseDetails.map((course) => (
          <div
            key={course.id}
            className="shadow-md rounded-lg bg-white hover:scale-105 hover:shadow-xl transform transition-transform duration-500"
            data-aos="zoom-in"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={500}
              className="rounded-t-lg"
            />
            <div
              className={`relative w-36 bottom-8 left-0 rounded-tr-2xl opacity-90 text-white px-2 py-1 ${course.color}`}
            >
              Recommended
            </div>
            <div className="space-y-3 px-6 pb-6">
              <h2 className="font-semibold text-xl text-violet-600">
                {course.title}
              </h2>
              <p className="pb-5">{course.description}</p>
              <Link href={`/course/${course.id}`} className="block">
                <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-2 hover:scale-105 transition-all duration-300">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
