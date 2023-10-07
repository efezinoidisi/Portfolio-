import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';

type MySocials = {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
  size?: string;
};

const Socials = ({ size = 'text-3xl' }: { size?: string }) => {
  const mySocials: MySocials[] = [
    {
      id: 0,
      name: 'github',
      link: 'https://github.com/efezinoidisi/',
      icon: <FaGithub className='' />,
    },
    {
      id: 1,
      name: 'twitter',
      link: 'https://twitter.com/_zeeknow/',
      icon: <FaTwitter className='text-blue-500' />,
    },
    {
      id: 2,
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/endurance-idisi/',
      icon: <BsLinkedin className='text-blue-600' />,
    },
  ];

  const iconLinks = mySocials.map(({ id, icon, name, link }: MySocials) => (
    // <ImageLink src={img} alt={name} href={link} size={size} key={id} />
    <Link
      href={link}
      key={id}
      target='_blank'
      aria-label={`my ${name} profile`}
      title={name}
      className={`${size} hover:scale-[1.3] transform transition-all duration-75 `}
    >
      {icon}
    </Link>
  ));
  return (
    <div className='flex md:flex-col gap-5 items-center self-center'>
      {iconLinks}
    </div>
  );
};

export default Socials;
