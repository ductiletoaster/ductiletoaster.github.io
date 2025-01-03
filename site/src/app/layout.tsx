import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Gebel | Resume",
  description: "Brian Gebel - Senior Engineering Manager",
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

      <body className={sans.className}>{children}</body>
      <GoogleAnalytics gaId="UA-24988188-9" />
    </html>
  );
}
