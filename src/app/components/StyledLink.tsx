import Link from "next/link";

type StyledLinkType = {
  name: string;
  href: string;
};

export default function StyledLink({ name, href }: StyledLinkType) {
  return (
    <Link className="text-highlight-blue" href={href}>
      {name}
    </Link>
  );
}
