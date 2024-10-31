"use client";

import React, { use, useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="Contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:vednatbhavsar.a10@gmail.com">
          vednatbhavsar.a10@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
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
        <motion.input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white/5 dark:caret-slate-100 dark:bg-opacity-100 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <motion.input
          className="h-14 px-4 mt-3 rounded-lg borderBlack dark:caret-slate-100 dark:bg-white/5 dark:bg-opacity-100 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-100"
          name="subject"
          type="text"
          required
          maxLength={500}
          placeholder="Subject"
        />
        <motion.textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/5 dark:text-gray-100 dark:caret-slate-100 dark:bg-opacity-100 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
