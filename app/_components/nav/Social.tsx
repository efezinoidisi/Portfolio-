import Link from 'next/link';
import ImageLink from './ImageLink';
import { FaGithub, FaTwitter } from 'react-icons/fa6';
import { IconType } from 'react-icons';

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
      link: '',
      icon: <FaGithub className='' />,
    },
    {
      id: 1,
      name: 'twitter',
      link: '',
      icon: <FaTwitter className='text-blue' />,
    },
  ];

  const iconLinks = mySocials.map(({ id, icon, name, link }: MySocials) => (
    // <ImageLink src={img} alt={name} href={link} size={size} key={id} />
    <Link
      href={link}
      key={id}
      target='_blank'
      aria-label={`view my ${name} profile`}
      title={name}
      className={`${size}`}
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
