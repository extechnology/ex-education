import React from "react";
import { FaUser, FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import AttendanceTracker from "../components/profile/Attendance";
import ProgressSection from "../components/profile/ProgressSection";
import Skills from "../components/profile/SkillSection";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 pt-20 overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block bg-gray-200 shadow-md p-5 pt-10">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
          <h1 className="text-xl font-semibold">exedu</h1>
        </div>
        <ul className="mt-8 space-y-4">
          <li className="flex items-center space-x-2 text-fuchsia-500 font-semibold">
            <FaUser />
            <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              My dashboard
            </span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500">
            <IoMdSettings />
            <span>Accounts</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500">
            <span>Mobile</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500">
            <span>Payments</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500">
            <span>Complaints</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500">
            <span>Supports</span>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="md:flex-1 p-4 md:p-8 bg-white max-w-full overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-gray-700 font-semibold">
            Welcome to exedu student portal
          </h2>
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600" />
            <div className="flex items-center space-x-2">
              <Image
                src="/man.png"
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover"
                width={40}
                height={40}
              />
              <span>Hello Vipin</span>
            </div>
          </div>
        </div>

        {/* Background Section */}
        <div>
          <div className="bg-[url('https://img.freepik.com/free-vector/abstract-elegant-geometric-shape-background-design_1017-50120.jpg')] bg-no-repeat bg-cover rounded-2xl p-6 mt-6 w-full overflow-hidden">
            <div className="md:flex gap-6">
              {/* Profile Card */}
              <div className="bg-white p-6 w-full md:w-1/3 rounded-2xl shadow-md">
                <Image
                  src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt_273609-16320.jpg"
                  alt="Profile"
                  className="rounded-lg mx-auto object-cover"
                  width={500}
                  height={500}
                />
                <h3 className="text-center mt-4 font-semibold">Vipin Raj</h3>
                <p className="text-center text-gray-600">+91 9495810118</p>
                <p className="text-center text-gray-600">vipin2@gmail.com</p>
                <div className="text-center mt-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600">
                    Save
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="space-y-6 w-full md:w-2/3">
                {/* Education Section */}
                <div className="md:flex gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="font-semibold">
                      <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                        Education
                      </span>
                    </h3>
                    <p className="text-gray-600">
                      Secondary School: NHSS Nanminda
                    </p>
                    <p className="text-gray-600">Year of Passing: 2020</p>
                    <p className="text-gray-600 mt-4">Graduation</p>
                    <p className="text-gray-900">University of Calicut</p>
                    <p className="text-gray-600">Degree: BSc Physics</p>
                    <p className="text-gray-600">Graduation Year: 2023</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h1>
                      <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                        Career Objective
                      </span>
                    </h1>
                    <ul className="text-gray-600 pt-2 space-y-2">
                      <li>
                        To secure a challenging role in a tech-driven
                        environment for continuous growth.
                      </li>
                      <li>
                        To enhance my technical and problem-solving skills in a
                        dynamic workplace.
                      </li>
                      <li>
                        To contribute effectively to a team while expanding my
                        development expertise.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="bg-white p-6  md:flex justify-between rounded-2xl shadow-md">
                  <div>
                    <h3 className="font-semibold">
                      <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                        exedu Profile
                      </span>
                    </h3>
                    <p className="text-gray-600">
                      Joined Course: AI Hybrid Digital Marketing
                    </p>
                    <p className="text-gray-900 font-bold">
                      {/* Course Name */}
                    </p>
                    <p className="text-gray-600">
                      Course Duration: 3 Months{/* Duration */}
                    </p>
                    <p className="text-gray-600">
                      Class Start Date: 20/04/2025{/* Start Date */}
                    </p>
                  </div>
                  <div>
                    <Image
                      src={"/online-test.png"}
                      alt="no image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance Tracker */}
            <div className="mt-6 md:flex gap-6 ">
              <div>
                <AttendanceTracker />
              </div>
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-full">
                {/* Heading */}
                <h1 className=" mb-6">
                  <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                    Certificates
                  </span>
                </h1>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
                  {/* Certificate 1 */}
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/quality.png"}
                      alt="no image"
                      width={70}
                      height={70}
                    />
                    <h1 className="mt-2">
                      Certificate of Python-Django Internship
                    </h1>
                  </div>

                  {/* Certificate 2 */}
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/quality.png"}
                      alt="no image"
                      width={70}
                      height={70}
                    />
                    <h1 className="mt-2">
                      Certificate of Python-Django Internship
                    </h1>
                  </div>

                  {/* Certificate 3 */}
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/quality.png"}
                      alt="no image"
                      width={70}
                      height={70}
                    />
                    <h1 className="mt-2">
                      Certificate of Python-Django Internship
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ProgressSection />
          </div>
          <div>
            <Skills/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
