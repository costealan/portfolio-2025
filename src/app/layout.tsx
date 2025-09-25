import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

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
        <div className="flex flex-1 lg:justify-center md:justify-start lg:max-w-7lg">
          <div className="lg:flex lg:flex-row lg:max-w-7lg lg:pt-40 lg:pr-25 lg:pb-23 lg:pl-45 max-lg:flex-col md:pl-27 md:pt-20 max-md:pl-3 max-md:pt-3.5">
            <Header />
            <div>
              <Nav />
              <main className="lg:max-w-125 lg:ml-30 md:max-w-2xl max-lg:pt-16">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
