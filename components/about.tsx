"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.p className="mb-3">
        I am currently pursuing a degree in{" "}
        <span className="font-medium">Computer Engineering</span> and am in my
        third year of studies. My journey into the world of programming was
        driven by my passion for{" "}
        <span className="font-medium">problem-solving</span> and the thrill of
        tackling challenging tasks. One of my favorite aspects of programming is
        the satisfaction that comes from finding solutions to complex problems.
      </motion.p>
      <motion.p className="mb-3">
        During my studies, I have worked on several projects, with the most
        notable being <span className="font-medium">Ninjanex</span>, an anime
        streaming application. This project was built using{" "}
        <span className="font-medium">Electron.js</span> for the front end, and
        the backend was powered by{" "}
        <span className="font-medium">Express.js</span>,{" "}
        <span className="font-medium">Prisma ORM</span>, and a{" "}
        <span className="font-medium">PostgreSQL database</span>. This
        experience solidified my skills and confirmed my love for full-stack
        development.
      </motion.p>
      <motion.p className="mb-3">
        I am particularly comfortable with{" "}
        <span className="font-medium">Next.js 14</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">Tailwind CSS</span>. Currently, I am
        expanding my knowledge in{" "}
        <span className="font-medium">system design</span> and have also gained
        proficiency in <span className="font-medium">Docker</span>. These skills
        and my continuous learning mindset are preparing me for my goal of
        becoming a{" "}
        <span className="font-medium">full-time full-stack developer</span>.
      </motion.p>

      <motion.p>
        Beyond programming, I enjoy{" "}
        <span className="font-medium">traveling</span>,{" "}
        <span className="font-medium">gaming</span>, and{" "}
        <span className="font-medium">watching anime</span>. These interests not
        only help me unwind but also inspire creativity in my projects. I am
        excited to continue learning and growing in the tech field and look
        forward to contributing to innovative projects as a full-stack
        developer.
      </motion.p>
    </motion.section>
  );
}
