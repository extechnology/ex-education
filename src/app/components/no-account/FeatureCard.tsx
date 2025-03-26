import React from "react";
import { ArrowRight, CheckCircle, Info } from "lucide-react";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  features,
  gradient,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="animate-on-scroll"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="bg-white p-6 rounded-xl border border-gray-50 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center cursor-pointer group relative overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-edu-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            ></div>

            <div
              className={`p-3 rounded-full bg-gradient-to-r ${gradient} mb-4 group-hover:scale-110 transition-all duration-300 relative z-10`}
            >
              {icon}
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-edu-600 transition-colors text-lg relative z-10">
              {title}
            </h3>
            <p className="text-gray-600 text-sm relative z-10">{description}</p>

            <div className="w-full mt-4 pt-4 border-t border-gray-100 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
              <div className="flex items-center text-edu-500 gap-1 text-sm font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-white p-4 shadow-xl rounded-xl border border-edu-100">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-full bg-gradient-to-r ${gradient}`}>
                {icon}
              </div>
              <h4 className="font-semibold text-gray-800">{title}</h4>
            </div>
            <Info className="h-4 w-4 text-edu-400" />
          </div>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-edu-500" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
};

export default FeatureCard;
