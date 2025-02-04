import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Intro from "@/components/intro";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

const poppins = Poppins({
  fallback: ["sans-serif"],
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
});

export const metadata = {
  title: "Vedant | Personal Portfolio",
  description:
    "Vedant is a full-stack developer with 2 years of experience in building web applications using MERN stack, React, Node.js, and Tailwind CSS.",
  keywords:
    "Vedant Bhavsar, full-stack developer, MERN stack, React developer, portfolio, web development, software engineer",
  author: "Vedant Bhavsar",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Vedant | Personal Portfolio",
    description: "Explore Vedant's work as a full-stack developer.",
    url: "https://your-portfolio-url.com", // Replace with your actual URL
    site_name: "Vedant's Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-gradient-to-tr from-blue-50/30 to-indigo-50/30 text-gray-950 relative dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 dark:text-gray-50 dark:text-opacity-90 antialiased`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <>
              <Intro />
            </>
            <Analytics />
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
