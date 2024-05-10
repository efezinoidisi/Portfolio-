import Footer from "@/components/Footer";
import MiniSidebar from "@/components/nav/MiniSidebar";
import NavBar from "@/components/nav/NavBar";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { firaCode, inter, ubuntu } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Efezino Idisi | Frontend Web Developer",
  description:
    "A dedicated Frontend Web Developer with a passion for creating exceptional, responsive, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${ubuntu.variable} ${inter.variable} bg-body text-gray font-fira-code`}
      >
        <span className="scroll-watcher"></span>
        <NavBar />
        <MiniSidebar />
        <div className="md:w-11/12 md:mx-auto overflow-clip">
          <Toaster />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
