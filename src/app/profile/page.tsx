import Image from "next/image";
import { FaLinkedin, FaGlobe } from "react-icons/fa";

export default function StudentProfile() {
  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Student Dashboard</h2>
        <ul className="space-y-4 text-gray-600">
          <li className="font-medium text-red-500">Profile</li>
          <li>Courses</li>
          <li>Attendance</li>
          <li>Academic Growth</li>
          <li>Projects</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Image
              src="/profile.jpg"
              alt="Student"
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />
            <h2 className="text-center text-lg font-semibold mt-4">John Doe</h2>
            <p className="text-center text-gray-500">B.Sc Computer Science</p>
            <div className="mt-4">
              <p>Email: johndoe@email.com</p>
              <p>Phone: +1234567890</p>
              <p className="flex items-center gap-2">
                <FaLinkedin /> <a href="#">LinkedIn Profile</a>
              </p>
              <p className="flex items-center gap-2">
                <FaGlobe /> <a href="#">Personal Website</a>
              </p>
            </div>
          </div>

          {/* Course Details */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Exedu Profile</h2>
            <p>Course: Web Development</p>
            <p>Start Date: Jan 10, 2024</p>
            <p>Attendance: 90%</p>
          </div>

          {/* Academic Growth */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Academic Growth</h2>
            <p>Syllabus Completed: 80%</p>
            <p>Skills Achieved: React, Next.js, Tailwind</p>
            <p>Internship: 3 months</p>
            <p>Projects Completed: 2</p>
            <p>Certifications: Full-Stack Development</p>
          </div>
        </div>
      </div>
    </div>
  );
}
