import React from "react";
import { FaUser, FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="flex  bg-gray-100 pt-23">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
          <h1 className="text-xl font-semibold">exedu</h1>
        </div>
        <ul className="mt-8 space-y-6 p-5">
          <li className="flex items-center space-x-2 text-fuchsia-500 font-semibold">
            <FaUser />{" "}
            <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              My dashboard
            </span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500">
            <IoMdSettings /> <span>Accounts</span>
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
      <main className="flex-1 p-8 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Welcome to exedu student portal
          </h2>
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600" />
            <div className="flex items-center space-x-2">
              <Image
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
              <span>Hello vipin</span>
            </div>
          </div>
        </div>

        <div className="md:flex gap-6 mt-8 bg-[url('https://img.freepik.com/free-vector/abstract-elegant-geometric-shape-background-design_1017-50120.jpg?ga=GA1.1.130507296.1738077489&semt=ais_hybrid')] bg-no-repeat bg-cover p-10 rounded-2xl">
          {/* Profile Card */}
          <div className="bg-white p-6 w-1/3 rounded-2xl shadow-md">
            <Image
              src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?ga=GA1.1.130507296.1738077489&semt=ais_hybrid"
              alt="Profile"
              className="rounded-lg mx-auto"
              width={200}
              height={200}
            />
            <h3 className="text-center mt-4 font-semibold">Vipin Raj</h3>
            <p className="text-center text-gray-600">+1-856-569-995-1236</p>
            <p className="text-center text-gray-600">vipin2@gmail.com</p>
            <div className="text-center mt-4">
              <button className="bg-red-500 text-white">Save</button>
            </div>
          </div>

          <div className="space-y-6 w-2/3">
            {/* xPay Accounts */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold ">
                <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  Education
                </span>
              </h3>
              <p className="text-gray-600">Secondary School : NHSS Nanminda</p>
              <p className="text-gray-600">Year of Passing: 2020</p>
              <p className="text-gray-600 mt-4">Graduation</p>
              <p className="text-gray-900 ">University of Calicut</p>
              <p className="text-gray-600">Degree: Bsc Physics</p>
              <p className="text-gray-600">Graduation Year: 2023</p>
            </div>

            {/* Bills */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold">
                <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  exedu Profile
                </span>
              </h3>
              <p className="text-gray-600">Joined Course</p>
              <p className="text-gray-900 font-bold">[Course Name]</p>
              <p className="text-gray-600">Course Duration: [Duration]</p>
              <p className="text-gray-600">Class Start Date: [Start Date]</p>
              <p className="text-gray-600">Attendance: [Attendance Details]</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
