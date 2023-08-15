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
    { name: 'view-resume', href: '/resume' },
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
            className={`after:content-[""] after:absolute relative after:bg-white after:bottom-0 after:hover:border after:hover:animate-nav group hover:text-blue capitalize transform ${
              isActive ? 'text-white' : 'text-gray'
            }`}
          >
            <span className='text-purple group-hover:text-yellow'>#</span>
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
