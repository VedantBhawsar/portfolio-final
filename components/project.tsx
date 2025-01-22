"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Meteors } from "./ui/meteors";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 overflow-hidden transition-all hover:border-gray-300/50 dark:hover:border-gray-700/50">
        <Meteors number={20} className="opacity-30" />

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <div className="flex gap-2">
                <Link
                  href={githubUrl}
                  target="_blank"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FiGithub className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </Link>
                <Link
                  href={demoUrl}
                  target="_blank"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Live Demo"
                >
                  <FiExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </Link>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative md:w-1/2">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="rounded-xl shadow-lg transform transition-all group-hover:scale-[1.02] group-hover:-rotate-1"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CreateProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-2  border-gray-300/50 dark:border-gray-700/50 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 min-h-[300px]"
    >
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 opacity-10" />
      <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
        More Projects Coming Soon
      </h3>
      <Link
        href="https://github.com/vedantBhawsar"
        target="_blank"
        className="flex items-center gap-2 px-6 py-2 rounded-full
         bg-gradient-to-r from-blue-500 to-purple-500 text-white  hover:opacity-90 transition-opacity"
      >
        <FiGithub className="w-5 h-5" />
        Explore GitHub
      </Link>
    </motion.div>
  );
}
