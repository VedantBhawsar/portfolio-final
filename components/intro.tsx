"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center dark:bg-black/80">
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Crafting digital experiences...
        </p>
      </div>
    );
  }

  return (
    <>
      <section
        ref={ref}
        id="home"
        className="relative z-10 flex h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-gradient bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Vedant Bhawsar
            </h1>
          </motion.div>

          <motion.h2
            className="mt-6 text-xl font-medium text-gray-600 dark:text-gray-300 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Developer & UI Enthusiast
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming ideas into seamless digital experiences through modern
            web development and intuitive design.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-white shadow-lg transition-all hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Get in Touch
              <FiArrowUpRight className="transition-transform group-hover:-rotate-45" />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-8 py-4 text-gray-700 transition-all hover:bg-white hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              View Resume
              <FaFileDownload className="shrink-0" />
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://github.com/Vedantbhawsar"
              target="_blank"
              className="text-gray-400 transition-all hover:text-gray-600 dark:hover:text-gray-200"
            >
              <FaGithub className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/vedantbhawsar/"
              target="_blank"
              className="text-gray-400 transition-all hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="h-8 w-5 rounded-full border-2 border-gray-400 dark:border-gray-600">
            <motion.div
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-gray-400 dark:bg-gray-600"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
