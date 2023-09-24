import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';

export default function About({ page = '' }: { page?: string }) {
  return (
    <ScrollAnimate
      id='about'
      className={`${page && 'my-10 h-screen'} flex flex-col justify-evenly`}
    >
      {page && (
        <h2 className='heading'>
          <span className='text-purple'>#</span>about-me
        </h2>
      )}
      <div className='flex items-center justify-start small-dots-left flex-col-reverse md:flex-row '>
        <div className='basis-3/5 flex flex-col gap-5  md:max-w-xl'>
          <p
            className={`leading-8 mt-5 md:m-0 tracking-widest md:tracking-normal text-sm md: ${
              page && 'mb-9'
            }`}
          >
            {' '}
            I&#39;m Efezino Idisi, a dedicated frontend developer with a passion
            for creating exceptional, responsive, and user-friendly web
            applications. I am actively seeking opportunities to contribute my
            skills and expertise to exciting projects. Let&#39;s create
            something amazing together!
          </p>
          {page && (
            <Link
              href={'/about'}
              className='border border-purple px-3 py-2 rounded btn w-fit'
            >
              view more &rarr;
            </Link>
          )}
        </div>

        <div className='basis-2/5 flex md:justify-end justify-center items-center py-4'>
          <Image
            src={'/avatar.jpg'}
            alt=''
            width={0}
            height={0}
            sizes='60vw'
            className='w-full md:w-2/3 rounded-full border-2 border-purple animate-move'
          />
        </div>
      </div>
    </ScrollAnimate>
  );
}
