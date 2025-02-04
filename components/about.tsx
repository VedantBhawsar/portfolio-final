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
      className="relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 dark:from-indigo-900/10 dark:to-violet-900/10 blur-3xl" />

      <SectionHeading>About me</SectionHeading>

      <motion.p
        className="mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        I'm a Full-stack developer who loves turning complex ideas into
        functional web applications. With roots in competitive programming and
        problem-solving, I bring algorithmic efficiency to building real-world
        software solutions.
      </motion.p>

      <motion.p
        className="mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        My core stack revolves around modern web development with{" "}
        <span className="font-medium">Next.js</span> and{" "}
        <span className="font-medium">TypeScript</span>. Experienced in building
        full-stack systems combining interactive frontends (
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">Electron.js</span>) with robust backends (
        <span className="font-medium">Node.js</span>,{" "}
        <span className="font-medium">PostgreSQL</span>), focusing on clean
        architecture and maintainable code.
      </motion.p>

      <motion.p
        className="mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        What I offer for freelance projects: End-to-end development from concept
        to deployment, performance optimization, and seamless integration of
        modern tools like <span className="font-medium">Tailwind CSS</span> and{" "}
        <span className="font-medium">Docker</span>. Whether it's building new
        features or troubleshooting existing systems, I prioritize solutions
        that grow with your needs.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Beyond coding, I believe in transparent communication and iterative
        development. Let's work together to create something functional and
        impactful - I'll handle the technical heavy lifting while keeping you
        informed at every stage. Ready to discuss how we can bring your project
        to life!
      </motion.p>
    </motion.section>
  );
}
