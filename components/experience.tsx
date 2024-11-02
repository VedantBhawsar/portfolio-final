"use client";

import React from "react";
import SectionHeading from "./section-heading";
// @ts-ignore
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <hr className="my-2 border-gray-800 " />
              <p className="!mt-1 !font-normal  text-gray-700 dark:text-white/80 bg-black/5 p-2  dark:bg-white/10  rounded-md">
                {item.description}
              </p>
              <p>Key points:-</p>
              <ul className="list-disc">
                {item?.describe?.map((item: string, index: number) => (
                  <motion.li
                    initial={{
                      opacity: 0,
                      y: 100,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileInView={{
                      opacity: 100,
                      y: 0,
                    }}
                    transition={{
                      type: "tween",
                      delay: (2.5 * index) / 10,
                    }}
                    className="ml-5"
                    key={index}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
