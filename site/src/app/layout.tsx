import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Gebel | Resume",
  description: "Brian Gebel - Software Engineering, Manager",
  authors: {
    url: "www.briangebel.com",
    name: "Brian Gebel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="UA-24988188-9" />
    </html>
  );
}
