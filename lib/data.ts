import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import twitterImage from "@/public/twitter.png";
import rmtdevImg from "@/public/rmtdev.png";
import ninjanexImage from "@/public/ninjanex.png";
import petShopImage from "@/public/petshop.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Engineering",
    location: "Maharashtra, India.",
    description:
      "Computer Engineering student in Maharashtra, India, currently in 4th year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Full-Stack Intern (Remote)",
    location: "Maharashatra, India.",
    description:
      "I worked as a full-stack intern for 10 months in Weareengineer.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Oct 2023",
  },
  {
    title: "Front-end Intern (Remote)",
    location: "Chandigard, India.",
    description:
      "I worked as a front-end intern for 3 months in Bizzyka.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Mar 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "India.",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Apr 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ninjanex",
    description:
      "Ninjanex is an anime streaming app for Windows and Ubuntu, featuring a user-friendly interface, extensive anime library, and high-quality streaming.",
    tags: ["Electron.js", "PostgresQL", "Chakra UI", "Prisma", "Express.js"],
    imageUrl: ninjanexImage,
    githubUrl: "https://github.com/VedantBhawsar/ninjanex",
  },
  {
    title: "TwitClone",
    description:
      "TwitClone is a Twitter clone featuring real-time updates and user authentication for an engaging social media experience.",
    tags: ["Next.js", "GraphQL", "Tailwind", "React Query"],
    imageUrl: twitterImage,
    githubUrl: "https://github.com/VedantBhawsar/twitter-clone",
  },
  {
    title: "PetShop",
    description:
      "A vibrant landing page for PetShop, offering a range of pet products and services for an engaging user experience.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: petShopImage,
    githubUrl: "https://github.com/VedantBhawsar/petshop",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "Apollo Server",
  "Prisma",
  "GraphQL",
  "MongoDB",
  "PostgresQL",
  "Git",
  "Docker",
  "Kubernetes",
] as const;
