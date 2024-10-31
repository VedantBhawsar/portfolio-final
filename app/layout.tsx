import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Intro, { GridBackground } from "@/components/intro";
import { Analytics } from "@vercel/analytics/react";

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
    //     images: [
    //       {
    //         url: "https://your-portfolio-url.com/your-image.jpg", // Replace with an actual image URL
    //         width: 800,
    //         height: 600,
    //         alt: "Vedant's Portfolio Image"
    //       }
    //     ],
    //     type: "website",
    //   },
    //   twitter: {
    //     card: "summary_large_image",
    //     title: "Vedant | Personal Portfolio",
    //     description: "Explore Vedant's work as a full-stack developer.",
    //     image: "https://your-portfolio-url.com/your-image.jpg", // Replace with an actual image URL
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
        className={`${poppins.className} bg-gray-50 text-gray-950 relative  dark:bg-black dark:text-gray-50 dark:text-opacity-90 antialiased`}
      >
        <div className="bg-[#fbe2e3] hidden md:block   absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[30rem] dark:bg-[#946263] animate-float"></div>
        <div className="bg-[#dbd7fb] hidden md:block  absolute top-[-1rem] -z-10 left-[40rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[30rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] animate-pulseSlow"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <GridBackground>
              <Intro />
            </GridBackground>
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
