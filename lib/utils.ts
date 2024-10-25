import { clsx, type ClassValue } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function validateString(emailBody: string, length: number): boolean {
  if (typeof emailBody) {
    return true;
  }
  if (emailBody.length > length) {
    return false;
  } else {
    return true;
  }
}
