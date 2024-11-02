"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Meteors } from "./ui/meteors";
import Link from "next/link";
import { Button } from "./ui/button";

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
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group"
    >
      <section className="bg-gray-100 group max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-gray-500/10 dark:hover:bg-white/5">
        <Meteors number={40} className=" group-hover:hidden block" />{" "}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <Link
            target="_blank"
            href={demoUrl}
            className="text-2xl font-semibold group-hover:underline underline-offset-4"
          >
            {title}
          </Link>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          {/* <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul> */}
          <div className="flex gap-2 mt-auto">
            <Link href={demoUrl} target="_blank">
              <button className="px-3 py-1 bg-black text-gray-100 dark:bg-white/5 dark:hover:border-gray-500 border border-gray-900    rounded-2xl">
                Demo
              </button>
            </Link>

            <Link href={githubUrl} target="_blank">
              <button className="px-3 py-1 text-black dark:text-gray-200 dark:hover:border-gray-500 border border-gray-300 hover:border-gray-400 dark:border-gray-600  rounded-2xl">
                Github
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          group-even:right-[initial] group-even:-left-40 "
        />
      </section>
    </motion.div>
  );
}

export function CreateProject({}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section className="bg-gray-100 group flex flex-col gap-2 items-center justify-center max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-gray-500/10 dark:hover:bg-white/5">
        <Meteors />
        <h1 className="text-black dark:text-white text-lg">Adding soon...</h1>
        <Link
          href={"https://github.com/vedantBhawsar"}
          target="_blank"
          className=" text-black"
        >
          <Button
            variant={"outline"}
            className="dark:text-white dark:border-white/50 bg-white/5 hover:bg-white/10"
          >
            Check Github
          </Button>
        </Link>
      </section>
    </motion.div>
  );
}
