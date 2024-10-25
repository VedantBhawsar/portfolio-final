"use server";

import { validateString } from "@/lib/utils";
import { emailTransporter } from "@/lib/emailTransport";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  const subject = formData.get("subject") as string;

  try {
    await emailTransporter.sendMail({
      to: senderEmail,
      subject: subject,
      html: `<p>${message}</p>`,
    });
  } catch (error: any) {
    console.log(error);
    return {
      error: true,
      message: "Something went wrong",
    };
  }
  return {
    error: false,
    message: "Email sent successfully",
  };
};
