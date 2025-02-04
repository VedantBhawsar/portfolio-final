"use server";

import { validateEmail, validateEmailData } from "@/lib/utils";
import { emailTransporter } from "@/lib/emailTransport";

const MIN_LENGTH = 100;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  const subject = formData.get("subject") as string;

  // const userData = await fetchUser();
  if (!validateEmailData(message.trim(), MIN_LENGTH)) {
    throw new Error("Message is short long");
  }

  if (!validateEmail(senderEmail.trim())) {
    throw new Error("Invalid email");
  }
  try {
    await emailTransporter.sendMail({
      to: process.env.RECEIVER_EMAIL,
      subject: `PORTFOLIO WEBSITE - from ${senderEmail.trim()} - ${subject.trim()}`, // subject line for identifying the email
      html: `<div> <p>${message.trim()}</p>
      <p>Sent from Vedant's Portfolio Website by ${senderEmail}</p>
      </div>`,
    });
  } catch (error: any) {
    console.log(error);
    throw new Error("Email could not be sent");
  }
  return {
    error: false,
    message: "Email sent successfully",
  };
};

// // <p>${JSON.stringify(userData)}</p>
