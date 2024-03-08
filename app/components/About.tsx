import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';
import Heading from './Heading';

export default function About({
  hideLink = false,
  showLine = true,
}: {
  hideLink?: boolean;
  showLine?: boolean;
}) {
  return (
    <ScrollAnimate id='about' className={`my-10 flex flex-col justify-evenly`}>
      <Heading value='about-me' showLine={showLine} />
      <div className='flex items-center justify-start small-dots-left flex-col-reverse md:flex-row '>
        <div className='basis-3/5 flex flex-col gap-5  md:max-w-xl'>
          <p
            className={`leading-7 md:leading-8 mt-5 md:m-0 tracking-wide  text-base  mb-9 md:text-lg`}
          >
            {' '}
            Hello I&#39;m Efezino Idisi, a frontend web developer who loves
            computers and coding. <br /> <br />
            After graduating from college where I studied Computer Science, I
            have participated in bootcamps/internships to gain hands on
            experience building projects and also team work.
            <br />
            <br />I am actively seeking opportunities to contribute my skills
            and expertise to exciting projects. Let&#39;s create something
            amazing together!
          </p>
          {hideLink ? null : (
            <Link
              href={'/about'}
              className='border border-purple px-3 py-2 rounded btn w-fit'
            >
              view more &rarr;
            </Link>
          )}
        </div>

        <div className='basis-2/5 flex md:justify-end justify-center items-center py-4 self-start'>
          <Image
            src={'/avatar.jpg'}
            alt=''
            width={0}
            height={0}
            sizes='60vw'
            className='w-2/3 md:w-2/3 rounded-full border-2 border-purple animate-move'
            unoptimized
          />
        </div>
      </div>
    </ScrollAnimate>
  );
}
