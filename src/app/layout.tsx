import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Touseef Ali | AI Automation & GHL Systems Specialist",
  description:
    "I build revenue machines that generate leads, close deals & scale agencies, coaches & businesses on autopilot. GoHighLevel Expert, AI Automation Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
