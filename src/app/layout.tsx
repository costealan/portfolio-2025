import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const railway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Coste 2025",
  description: "This is Alan Coste's porfolio for fullstack development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${railway} antialiased`}>{children}</body>
    </html>
  );
}
