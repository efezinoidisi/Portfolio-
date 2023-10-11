'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  name: string;
  href: string;
};

export default function NavLinks({
  handleClick = () => {},
}: {
  handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const links: NavLink[] = [
    { name: 'home', href: '/' },
    { name: 'works', href: '/works' },
    { name: 'about-me', href: '/about' },
    { name: 'contact-me', href: '/contact' },
  ];

  const pathname = usePathname();

  return (
    <nav className='flex flex-col md:flex-row gap-10'>
      {links.map(({ name, href }: NavLink) => {
        const isActive = pathname === href;

        return (
          <Link
            href={`${href}`}
            key={name}
            className={`after:content-[""] after:absolute relative after:bg-white after:bottom-0 after:hover:border after:hover:animate-nav group active:text-yellow transform w-fit hover:scale-[0.9] transition-transform delay-75 ${
              isActive ? 'text-white' : 'text-gray'
            }`}
            onClick={handleClick}
          >
            <span className='group-hover:text-white capitalize'>{name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
