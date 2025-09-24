import Link from "next/link";
import { ReactNode } from "react";

type StyledLinkType = {
  children: ReactNode;
  href: string;
};

export default function StyledLink({ children, href }: StyledLinkType) {
  return (
    <Link className="text-highlight-blue" href={href}>
      {children}
    </Link>
  );
}
