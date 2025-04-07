import React from "react";
import { UserRound } from "lucide-react";
import { motion } from "framer-motion";

const ProfileSection = () => {
  return (
    <>
      {/* Animated profile section with particles */}
      <div className="flex items-center justify-center mt-8 mb-2 relative animate-on-scroll">
        <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-edu-100 to-edu-200 opacity-50 blur-xl animate-pulse-soft"></div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          className="relative w-36 h-36 rounded-full flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-edu-100 to-edu-200 animate-spin-slow">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-white"
                style={{
                  top: `${10 + Math.random() * 80}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.6 + Math.random() * 0.4,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-white to-edu-50 rounded-full flex items-center justify-center shadow-inner overflow-hidden">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
            <UserRound className="w-16 h-16 text-edu-500 relative z-10" />
          </div>

          {/* <div className="absolute -bottom-3 left-0 right-0 text-center text-sm font-medium text-gray-600 bg-white/70 backdrop-blur-sm py-1 rounded-full shadow-md">
            No Account
          </div> */}
        </motion.div>
      </div>

      <div className="text-center mb-8 max-w-xl mx-auto animate-on-scroll">
        <h3 className="text-xl font-medium text-gray-800 mb-3">
          Your Profile Is Empty
        </h3>
        <p className="text-gray-600">
          Create an account to access your personalized dashboard with all your
          educational information in one place.
        </p>
      </div>
    </>
  );
};

export default ProfileSection;
