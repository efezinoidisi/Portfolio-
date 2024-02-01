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
            className={`after:content-[""] after:absolute relative  after:bottom-0 after:hover:border-b-4 
            after:hover:border-purple/70
            after:hover:animate-nav group active:text-yellow transform w-fit  transition-all delay-75 py-2 ${
              isActive
                ? 'text-purple border-b-4 hover:border-b-0 border-purple'
                : 'text-gray'
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
