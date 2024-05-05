"use client";
import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

export default function NavLinks({
  handleClick = () => {},
}: {
  handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <nav className="flex flex-col md:flex-row gap-10">
      {links.map(({ name, href }: NavLink, index) => {
        return (
          <Link
            href={`${href}`}
            key={name}
            className={`relative hover:border-b-2 
        hover:border-purple/70 group active:text-yellow w-fit  transition-all py-1 flex gap-2 md:text-lg ease-linear `}
            onClick={handleClick}
          >
            <span className="md:hidden text-yellow">0{index + 1}</span>
            <span className="group-hover:text-purple/50 capitalize group-hover:scale-105">
              {name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

const links: NavLink[] = [
  { name: "projects", href: "#projects" },
  { name: "about-me", href: "#about" },
  { name: "contact-me", href: "#contact" },
];
