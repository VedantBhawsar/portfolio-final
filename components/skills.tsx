"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaDocker, 
  FaAws,
  FaGitAlt,
  FaCode,
  FaFigma
} from "react-icons/fa";
import { 
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNestjs,
  SiKubernetes,
  SiJest,
  SiCypress,
  SiWebpack,
  SiVite,
  SiPostman,
  SiLinux,
  SiNginx,
  SiJenkins
} from "react-icons/si";

// Icon mapping for each skill
const skillIcons: { [key: string]: JSX.Element } = {
  // Frontend
  "React": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript />,
  "JavaScript": <SiJavascript />,
  "Redux": <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <FaCode />,
  "Material UI": <FaCode />,
  "Chakra UI": <FaCode />,

  // Backend
  "Node.js": <FaNodeJs />,
  "Express.js": <FaCode />,
  "NestJS": <SiNestjs />,
  "GraphQL": <SiGraphql />,
  "Prisma": <FaDatabase />,
  "Socket.io": <FaCode />,

  // Databases
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Redis": <SiRedis />,

  // DevOps
  "Docker": <FaDocker />,
  "Kubernetes": <SiKubernetes />,
  "AWS (EC2, S3)": <FaAws />,
  "Linux": <SiLinux />,
  "Nginx": <SiNginx />,
  "Jenkins": <SiJenkins />,

  // Testing
  "Jest": <SiJest />,
  "Cypress": <SiCypress />,

  // Tools
  "Git": <FaGitAlt />,
  "Webpack": <SiWebpack />,
  "Vite": <SiVite />,
  "Postman": <SiPostman />,
  "Figma": <FaFigma />
};

const categorizedSkills = {
  "Frontend Technologies": [
    "HTML", "CSS", "Sass", "JavaScript", "TypeScript", "React", 
    "Next.js", "Redux", "Strapi", "Zustand", "Tailwind CSS", 
    "Framer Motion", "Material UI", "Chakra UI",
  ],
  "Backend Technologies": [
    "Node.js", "Express.js", "Socket.io", "NestJS", "Apollo Server", 
    "Prisma", "GraphQL", "REST API", "Kafka",
  ],
  "Databases & ORM": ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
  "DevOps & Tools": [
    "Git", "Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions", 
    "Jenkins", "Bash Scripting", "Linux", "Nginx", "AWS (EC2, S3)", 
    "Vercel", "Netlify", "Grafana",
  ],
  "Monitoring & Logging": ["Prometheus", "Grafana", "ELK Stack"],
  "Testing & Linting": ["Jest", "Cypress", "ESLint", "Prettier"],
  "Other Tools & Skills": [
    "Figma", "Postman", "Webpack", "Vite", "npm", "pnpm", "yarn",
  ],
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.05, type: "spring", stiffness: 100 },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 scroll-mt-28 px-4 sm:mb-40"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 dark:from-indigo-900/10 dark:to-violet-900/10 blur-3xl" />
      
      <SectionHeading>Technical Expertise</SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-8">
        {Object.entries(categorizedSkills).map(([category, skills], categoryIndex) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/50">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100/50 to-purple-100/50 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:shadow-md dark:from-gray-800/50 dark:to-gray-700/50 dark:text-gray-300">
                      <span className="text-purple-500 dark:text-purple-400">
                        {skillIcons[skill] || <FaCode />}
                      </span>
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}