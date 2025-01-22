"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section 
      id="experience" 
      ref={ref} 
      className="relative scroll-mt-28 mb-28 sm:mb-40 px-4"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 dark:from-indigo-900/10 dark:to-violet-900/10 blur-3xl" />
      
      <SectionHeading>Professional Journey</SectionHeading>

      <VerticalTimeline 
        lineColor={theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.1)"}
        className="!max-w-[80rem]"
      >
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            visible
            contentStyle={{
              background: theme === "light" 
                ? 'rgba(255, 255, 255, 0.8)' 
                : 'rgba(255, 255, 255, 0.05)',
              border: theme === "light" 
                ? '1px solid rgba(0, 0, 0, 0.05)' 
                : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(12px)',
            }}
            contentArrowStyle={{
              borderRight: theme === "light" 
                ? '0.4rem solid #6366f1' 
                : '0.4rem solid rgba(99, 102, 241, 0.5)',
            }}
            date={item.date}
            dateClassName="!text-gray-600 dark:!text-gray-300 !font-medium"
            iconStyle={{
              background: theme === "light" 
                ? 'linear-gradient(45deg, #6366f1, #8b5cf6)' 
                : 'rgba(99, 102, 241, 0.2)',
              boxShadow: 'none',
              border: theme === "light" 
                ? '2px solid #e0e7ff' 
                : '2px solid rgba(99, 102, 241, 0.5)',
            }}
            icon={item.icon}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="!mt-1 !font-medium text-gray-600 dark:text-gray-400">
                    {item.location}
                  </p>
                </div>
                <FiArrowUpRight className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
              </div>

              <div className="my-4 p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/30 dark:to-gray-700/30 rounded-lg">
                <p className="!text-sm !font-normal text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>

              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                Key Achievements
              </h4>
              
              <ul className="space-y-2">
                {item.describe?.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: pointIndex * 0.1 }}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-purple-500 dark:text-purple-400 mt-1">▹</span>
                    <span className="text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}