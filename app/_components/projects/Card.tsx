import Image from 'next/image';
import ImageLink from '../nav/ImageLink';
import { Works } from '@/app/_types/project';
import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

type CardProps = Works & {
  index: number;
  page: string;
};

export default function Card(props: CardProps) {
  const { src, name, brief, stack, index, github, preview, page } = props;
  return (
    <article
      className={`border-2 border-gray transform ${
        page && index === 1 ? 'md:scale-[1.15]' : ''
      }`}
    >
      <Image
        src={`/${src}`}
        alt=''
        width={0}
        height={0}
        sizes='30%'
        className='h-1/3 w-full border-b border-gray'
      />
      <p className='border-b border-gray py-2 uppercase text-base px-1'>
        {stack}
      </p>
      <div className='px-2 py-3'>
        <h3 className='text-2xl capitalize font-medium text-white pb-3 pt-2'>
          {name}
        </h3>
        <p>{brief}</p>
        <div className='flex items-center gap-2 py-3'>
          <Link
            href={github}
            className='border border-gray w-2/3 py-1 rounded flex justify-center items-center gap-2'
          >
            github <FaGithub />
          </Link>
          <Link
            href={preview}
            className='border border-gray w-2/3 py-1 rounded flex justify-center items-center'
          >
            view <FiExternalLink />
          </Link>
        </div>
      </div>
    </article>
  );
}
