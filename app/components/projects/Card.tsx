import Image from 'next/image';
import { Works } from '@/types/project';
import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import ScrollAnimate from '../ScrollAnimate';

type CardProps = Works & {
  index: number;
  page: string;
};

export default function Card(props: CardProps) {
  const { src, name, brief, stack, index, github, preview, page } = props;

  const linkStyle =
    'border border-gray w-full sl:w-fit px-4 py-1 rounded flex justify-center items-center gap-2 hover:border-none hover:bg-purple/50 transition-colors duration-200 ease-in-out overflow-hidden hover:scale-105 hover:text-white';
  return (
    <ScrollAnimate
      className={`border-2 rounded-lg border-gray/40 overflow-hidden min-h-fit hover:shadow-ml transition-colors ease-linear duration-200 block group pb-4`}
    >
      <div className='h-40 w-full border-b overflow-hidden'>
        <Image
          src={`/${src}`}
          alt=''
          width={0}
          height={0}
          sizes='30%'
          className='h-full w-full  border-gray group-hover:scale-110 transition-transform duration-300 ease-in-out'
          unoptimized
        />
      </div>
      <p className='border-b border-gray py-2 capitalize text-base text-center px-2'>
        {stack}
      </p>
      <div className='px-3 pt-4'>
        <h3 className='text-2xl capitalize font-medium text-white pb-3 pt-2 text-pretty leading-8'>
          {name}
        </h3>
        <p className='leading-7 md:leading-8'>{brief}</p>
        <div className='flex items-center gap-2 pt-3'>
          <Link href={github} className={linkStyle}>
            github <FaGithub />
          </Link>
          {preview ? (
            <Link href={preview} className={linkStyle}>
              view <FiExternalLink />
            </Link>
          ) : null}
        </div>
      </div>
    </ScrollAnimate>
  );
}
