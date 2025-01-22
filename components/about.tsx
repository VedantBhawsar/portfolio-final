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
        I'm a third-year <span className="font-medium">Computer Engineering</span> student passionate about solving complex problems through code. My journey began with competitive programming, where I developed a strong foundation in algorithms and data structures, eventually leading me to explore full-stack development.
      </motion.p>

      <motion.p 
        className="mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        My core expertise lies in modern web development with <span className="font-medium">Next.js 14</span> and <span className="font-medium">TypeScript</span>. I've built scalable applications like <span className="font-medium">Ninjanex</span> - an anime streaming platform handling thousands of users, using <span className="font-medium">Electron.js</span> for the frontend and <span className="font-medium">Express.js</span> with <span className="font-medium">PostgreSQL</span> for the backend. This experience taught me valuable lessons in performance optimization and system design.
      </motion.p>

      <motion.p 
        className="mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Currently expanding my skills in <span className="font-medium">cloud infrastructure</span> and <span className="font-medium">microservices architecture</span>, I'm focusing on building maintainable systems that balance technical rigor with user experience. My toolkit includes <span className="font-medium">Node.js</span>, <span className="font-medium">Tailwind CSS</span>, and <span className="font-medium">Docker</span>, with continuous learning through tech communities and open-source contributions.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        When not coding, I analyze animation storytelling techniques and explore outdoor photography. These creative pursuits inform my approach to building intuitive interfaces that resonate emotionally while maintaining technical excellence. I'm eager to contribute to impactful projects and grow alongside innovative teams in the tech industry.
      </motion.p>
    </motion.section>
  );
}