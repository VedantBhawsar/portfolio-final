"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const categorizedSkills = {
  "Frontend Technologies": [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Strapi",
    "Zustand",
    "Tailwind CSS",
    "Framer Motion",
    "Material UI",
    "Chakra UI",
  ],
  "Backend Technologies": [
    "Node.js",
    "Express.js",
    "Socket.io",
    "NestJS",
    "Apollo Server",
    "Prisma",
    "GraphQL",
    "REST API",
    "Kafka",
  ],
  "Databases & ORM": ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
  "DevOps & Tools": [
    "Git",
    "Docker",
    "Kubernetes",
    "CI/CD Pipelines",
    "GitHub Actions",
    "Jenkins",
    "Bash Scripting",
    "Linux",
    "Nginx",
    "AWS (EC2, S3)",
    "Vercel",
    "Netlify",
    "Grafana",
  ],
  "Monitoring & Logging": ["Prometheus", "Grafana", "ELK Stack"],
  "Testing & Linting": ["Jest", "Cypress", "ESLint", "Prettier"],
  "Other Tools & Skills": [
    "Figma",
    "Postman",
    "Webpack",
    "Vite",
    "npm",
    "pnpm",
    "yarn",
  ],
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      {Object.entries(categorizedSkills).map(
        ([category, skills], categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 dark:text-white/80">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="bg-white hover:bg-gray-100 border hover:scale-105  transition-all cursor-pointer   border-gray-300 dark:border-gray-700 rounded-xl px-5 py-2 dark:bg-white/5 dark:hover:bg-white/10"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        )
      )}
    </section>
  );
}

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// export default function Skills() {
//   const { ref } = useSectionInView("Skills");

//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//     >
//       <SectionHeading>My skills</SectionHeading>
//       <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
//         {skillsData.map((skill, index) => (
//           <motion.li
//             className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//               once: true,
//             }}
//             custom={index}
//           >
//             {skill}
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// }
