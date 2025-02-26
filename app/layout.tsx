import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GoogleAnalytics from "@/utils/GoogleAnalytics";

import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manifest test task",
  description: "Manifest test task and nothing else...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
