import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Intro, { GridBackground } from "@/components/intro";
import { BackgroundLines } from "@/components/ui/background-lines";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vedant | Personal Portfolio",
  description: "Vedant is a full-stack developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[30rem] dark:bg-[#946263] animate-float"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[40rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[30rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] animate-pulseSlow"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <GridBackground>
              <Intro />
            </GridBackground>

            {children}
            <Header />
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
