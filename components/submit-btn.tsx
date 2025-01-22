import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white shadow-lg transition-all hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
      disabled={pending}
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <TailSpin
            visible={true}
            height="24"
            width="24"
            color="#ffffff"
            ariaLabel="tail-spin-loading"
            radius="1"
          />
        </div>
      ) : (
        <motion.span
          className="flex items-center gap-2"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          Send Message
          <FaPaperPlane className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </motion.span>
      )}
    </motion.button>
  );
}
