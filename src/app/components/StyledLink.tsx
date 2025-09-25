import { ReactNode } from "react";

type StyledLinkType = {
  children: ReactNode;
  href: string;
};

export default function StyledLink({ children, href }: StyledLinkType) {
  return (
    <a
      target="_blank"
      className="text-highlight-blue hover:text-dark-blue "
      href={href}>
      {children}
    </a>
  );
}
