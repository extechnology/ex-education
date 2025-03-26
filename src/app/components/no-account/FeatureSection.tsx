import React from "react";
import { BookOpen, FileText, Award } from "lucide-react";
import FeatureCard from "./FeatureCard";

export const featuresData = [
  {
    icon: <BookOpen className="h-8 w-8 text-white" />,
    title: "Track Courses",
    description:
      "Monitor your progress, deadlines, and achievements across all your courses.",
    features: [
      "Course Management",
      "Progress Tracking",
      "Assignment Deadlines",
      "Certificate Tracking",
    ],
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Manage Projects",
    description:
      "Organize and showcase your academic and personal projects all in one place.",
    features: [
      "Project Timeline",
      "Task Management",
      "Team Collaboration",
      "Portfolio Builder",
    ],
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: "Store Certificates",
    description:
      "Keep track of your certifications, skills, and educational achievements.",
    features: [
      "Skills Assessment",
      "Certificate Verification",
      "Achievement Gallery",
      "Skill Endorsements",
    ],
    gradient: "from-amber-400 to-amber-600",
  },
];

const FeatureSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-10">
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          features={feature.features}
          gradient={feature.gradient}
        />
      ))}
    </div>
  );
};

export default FeatureSection;
