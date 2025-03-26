import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";
import ProfileSection from "./ProfileSection";
import FeatureSection from "./FeatureSection";

const MainContent = () => {
  return (
    <main className="flex-grow container mx-auto px-4 pb-12 pt-25">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0  overflow-hidden bg-white/80 backdrop-blur-sm  transition-all duration-500 relative">
            <div className="absolute inset-0"></div>
            <div className="h-1.5 bg-gradient-to-r from-violet-400 via-pink-500 to-fuchsia-600 relative z-10"></div>

            <CardHeader className="pb-2 relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Welcome to EduPortal
                </CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Your personal education dashboard awaits
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <ProfileSection />
              <FeatureSection />
            </CardContent>

            <CardFooter className="flex justify-center pb-8 relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="bg-gradient-to-r from-gray-100 to-gray-50 text-black font-medium rounded-full px-8 py-6 hover:shadow-lg h-auto group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-400 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Link
                    href="/sign-up"
                    className="flex items-center gap-2 relative z-10"
                  >
                    Create Your Account
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </main>
  );
};

export default MainContent;
