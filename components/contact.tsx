"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 w-[min(100%,48rem)] px-4 text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 dark:from-indigo-900/10 dark:to-violet-900/10 blur-3xl" />

      <SectionHeading>Get in Touch</SectionHeading>

      <motion.p
        className="text-gray-600 dark:text-gray-300 mt-6 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Have a project in mind or just want to connect? Feel free to reach out via{" "}
        <a
          className="font-medium text-gray-900 dark:text-gray-100 hover:underline inline-flex items-center gap-1"
          href="mailto:vednatbhavsar.a10@gmail.com"
        >
          <FiMail className="w-4 h-4" />
          vednatbhavsar.a10@gmail.com
        </a>{" "}
        or use the contact form below. I typically respond within 24 hours.
      </motion.p>

      <form
        ref={formRef}
        className="space-y-6"
        action={async (formData) => {
          await sendEmail(formData)
            .then(({ message, error }) => {
              toast.success(message);
              formRef.current?.reset();
            })
            .catch((error) => {
              toast.error(error.message);
            });
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <input
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email address"
            className="w-full px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:placeholder-gray-400 dark:text-gray-100 outline-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <input
            name="subject"
            type="text"
            required
            maxLength={500}
            placeholder="Subject"
            className="w-full px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:placeholder-gray-400 dark:text-gray-100 outline-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <textarea
            name="message"
            placeholder="Your message..."
            required
            maxLength={5000}
            className="w-full px-6 py-4 h-40 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:placeholder-gray-400 dark:text-gray-100 outline-none resize-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SubmitBtn/>
        </motion.div>
      </form>
    </motion.section>
  );
}