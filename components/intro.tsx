"use client";

import Image from "next/image";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profileImg from "@/public/photo.jpg";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 text-center sm:mb-0 max-w-[60rem] scroll-mt-[100rem]"
    >
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <TypewriterEffect
          words={[
            {
              text: "Hello, I'm Vedant.",
              className: "font-bold",
            },
            {
              text: "I'm a",
              className: "",
            },
            {
              text: "full-stack developer",
              className: "font-bold",
            },
            {
              text: "with",
              className: "",
            },
            {
              text: "2 years",
              className: "font-bold",
            },
            {
              text: "of experience. I enjoy",
              className: "",
            },

            {
              text: "sites & apps.",
              className: "italic",
            },

            {
              text: "My focus is",
              className: "",
            },
            {
              text: "React (Next.js)",
              className: "underline",
            },
          ]}
        />
      </motion.h1>

      <motion.div
        className="flex flex-col gap-3 justify-center items-center px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="flex gap-2 items-center py-3 px-7 bg-gray-50 rounded-full transition cursor-pointer outline-none active:scale-95 group borderBlack dark:bg-white/10"
          href="/resume.pdf"
          target="_blank"
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 transition group-hover:opacity-95 group-hover:scale-105 group-hover:translate-y-1" />
        </a>

        <Link
          href="#contact"
          className="flex gap-2 items-center py-3 px-7 dark:text-white    bg-transparent border border-gray-300  hover:opacity-80 rounded-full transition outline-none active:scale-95 group  dark:hover:bg-gray-950"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:opacity-95 group-hover:scale-105 group-hover:translate-x-1" />
        </Link>
        <div className="flex gap-3 w-full md:w-fit justify-center">
          <a
            className="flex gap-2 items-center p-4 text-gray-700 bg-white rounded-full transition cursor-pointer active:scale-105 group borderBlack dark:bg-white/10 dark:text-white/60 hover:text-gray-950"
            href="https://www.linkedin.com/in/vedantbhawsar/"
            target="_blank"
          >
            <BsLinkedin className="transition group-hover:scale-110 " />
          </a>

          <a
            className="flex gap-2 items-center p-4 text-gray-700 bg-white rounded-full transition cursor-pointer active:scale-105 group text-[1.35rem] borderBlack dark:bg-white/10 dark:text-white/60 hover:text-gray-950"
            href="https://github.com/Vedantbhawsar"
            target="_blank"
          >
            <FaGithubSquare className="transition group-hover:scale-110 " />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function GridBackground({ children }: { children: ReactNode }) {
  return (
    <div className="h-[50rem] w-full   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
