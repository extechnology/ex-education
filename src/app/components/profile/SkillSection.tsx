"use client";

import { FaTools, FaUserGraduate, FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type SkillsProps = {
  skills: string | null;
  experience: string | null;
  interests: string | null;
};

const Skills = ({ skills, experience, interests }: SkillsProps) => {
  const renderList = (data?: string | null) => {
    if (!data) return <li className="text-gray-400">No data available</li>;
    return data
      .split(",")
      .map((item, index) => <li key={index}>{item.trim()}</li>);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Mobile View */}
      <div className="grid md:hidden grid-cols-1 gap-6">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          className="w-full"
          pagination={false}
        >
          {/* Skills Section */}
          <SwiperSlide>
            <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
              <FaTools className="text-4xl text-blue-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-3">Skills</h2>
              <ul className="text-gray-600">{renderList(skills)}</ul>
            </div>
          </SwiperSlide>

          {/* Experience Section */}
          <SwiperSlide>
            <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
              <FaUserGraduate className="text-4xl text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-3">Experience</h2>
              <ul className="text-gray-600">{renderList(experience)}</ul>
            </div>
          </SwiperSlide>

          {/* Interests Section */}
          <SwiperSlide>
            <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
              <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-3">Interests</h2>
              <ul className="text-gray-600">{renderList(interests)}</ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skills Section */}
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
          <FaTools className="text-4xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <ul className="text-gray-600">{renderList(skills)}</ul>
        </div>

        {/* Experience Section */}
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
          <FaUserGraduate className="text-4xl text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3">Experience</h2>
          <ul className="text-gray-600">{renderList(experience)}</ul>
        </div>

        {/* Interests Section */}
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
          <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3">Interests</h2>
          <ul className="text-gray-600">{renderList(interests)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
