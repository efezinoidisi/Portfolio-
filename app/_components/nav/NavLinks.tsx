'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';

type NavLink = {
  name: string;
  href: string;
};

export default function NavLinks() {
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
            className={`hover:text-blue-500 capitalize ${
              isActive ? 'text-white' : 'text-gray'
            }`}
          >
            <span className='text-purple'>#</span>
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
