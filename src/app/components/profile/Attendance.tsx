"use client";

import { useState } from "react";

type AttendanceData = boolean[][];

const generateRandomAttendance = (): AttendanceData => {
  return Array.from({ length: 7 }, () =>
    Array.from({ length: 12 }, () => Math.random() > 0.5)
  );
};

const AttendanceTracker = () => {
  const [attendance] = useState<AttendanceData>(generateRandomAttendance());


  return (
    <div className="bg-white text-black p-6 rounded-2xl  shadow-lg max-w-lg  ">
      <div className="flex justify-between items-center mb-6">
        <select
          title="Select Month"
          className="bg-gray-200 text-black p-2 rounded-lg shadow-md focus:outline-none"
        >
          <option>Last 3 months</option>
        </select>
        <span className="text-gray-700 font-semibold text-lg">
          {attendance.flat().filter(Boolean).length} Days Present
        </span>
      </div>
      <div className="grid grid-rows-5 gap-2">
        {attendance.slice(0, 5).map(
          (
            week,
            idx // Only take the first 5 days (Mon-Fri)
          ) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="text-gray-700 w-12 font-semibold">
                {["Mon", "Tue", "Wed", "Thu", "Fri"][idx]}
              </span>
              {week.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  className={`w-6 h-6 rounded-md shadow-md transition-all duration-300 ${
                    day
                      ? "bg-green-500 hover:bg-green-400"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )
        )}
      </div>

      <div className="flex justify-end gap-4 mt-6 text-gray-700 font-medium items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md shadow-md bg-gray-300"></div>
          <span>Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md shadow-md bg-green-500"></div>
          <span>Present</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;