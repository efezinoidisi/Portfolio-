import Image from 'next/image';
import ImageLink from '../nav/ImageLink';
import { Works } from '@/app/_types/project';

type CardProps = Works & {
  index: number;
};

export default function Card(props: CardProps) {
  const { src, name, brief, stack, index, github, preview, id } = props;
  return (
    <article className='border-2 border-gray'>
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
          <ImageLink
            src='/github.svg'
            alt=''
            href={github}
            size={30}
            styles='border border-gray px-6 py-1 rounded'
          />
          <ImageLink
            src='/arrow-up.svg'
            alt=''
            href={preview}
            size={30}
            styles='border border-gray px-6 py-1 rounded'
          />
        </div>
      </div>
    </article>
  );
}
