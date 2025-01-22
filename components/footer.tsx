"use client";
import Link from "next/link";
import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-b from-white/30 to-white/70 dark:from-black/30 dark:to-black/70 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-2">
              Let&apos;s build something amazing
            </p>
            <small className="text-xs text-gray-500 dark:text-gray-400">
              &copy; 2024 Vedant Bhawsar. All rights reserved.
            </small>
          </div>

          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/VedantBhawsar"
                target="_blank"
                className="p-2 rounded-lg  transition-colors"
                aria-label="GitHub Profile"
              >
                <BsGithub className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://twitter.com/yourtwitter"
                target="_blank"
                className="p-2 rounded-lg  transition-colors"
                aria-label="Twitter Profile"
              >
                <BsTwitter className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.linkedin.com/in/vedantbhawsar"
                target="_blank"
                className="p-2 rounded-lg  transition-colors"
                aria-label="LinkedIn Profile"
              >
                <BsLinkedin className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:your@email.com"
                className="p-2 rounded-lg  transition-colors"
                aria-label="Send Email"
              >
                <FiMail className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-6 border-t border-gray-200/50 dark:border-gray-800/50 pt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Crafted with Next.js, Tailwind CSS, and ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
