import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";

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
      <body className={`${railway} antialiased`}>
        <div className="flex justify-center">
          <div className="flex max-w-7xl pt-40 pr-25 pb-23 pl-45 ">
            <Header />
            <div>
              <nav className="ml-30 flex gap-5 pb-5">
                <Link className="text-base-blue" href={"/about"}>
                  About
                </Link>
                <Link className="text-base-blue" href={"/projects"}>
                  Projects
                </Link>
              </nav>
              <main className="max-w-125 ml-30">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
