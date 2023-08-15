import ImageLink from './ImageLink';

type MySocials = {
  id: number;
  name: string;
  link: string;
  img: string;
};

const Socials = ({ size = 30 }: { size?: number }) => {
  const mySocials: MySocials[] = [
    {
      id: 0,
      name: 'github',
      link: '',
      img: '/github.svg',
    },
    {
      id: 1,
      name: 'twitter',
      link: '',
      img: '/twitter.svg',
    },
  ];

  const imageLinks = mySocials.map(({ id, img, name, link }: MySocials) => (
    <ImageLink src={img} alt={name} href={link} size={size} key={id} />
  ));
  return (
    <div className='flex md:flex-col gap-5 items-center self-center'>
      {imageLinks}
    </div>
  );
};

export default Socials;
