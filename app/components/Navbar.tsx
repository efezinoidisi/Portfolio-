import Link from 'next/link';

type NavLink = {
  name: string;
  href: string;
};

export default function Navbar() {
  const links: NavLink[] = [
    { name: 'about', href: 'about' },
    { name: 'projects', href: 'project' },
    { name: 'contact', href: 'contact' },
  ];

  return (
    <nav className='flex justify-end items-center gap-5 w-1/2 menu text-[] mt-5 self-center'>
      {links.map(({ name, href }: NavLink) => {
        return (
          <Link
            href={`#${href}`}
            key={name}
            className='hover:text-blue-500 capitalize'
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
