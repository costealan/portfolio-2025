import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="lg:ml-30 flex gap-5 pb-5">
      <Link
        className="text-highlight-blue hover:text-dark-blue"
        href={"/projects"}>
        Projects
      </Link>
      <Link
        className="text-highlight-blue hover:text-dark-blue"
        href={"/about"}>
        About
      </Link>
    </nav>
  );
}
