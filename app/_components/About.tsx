import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id='about' className='my-10 h-screen flex flex-col justify-evenly'>
      <h2 className='heading'>
        <span className='text-purple'>#</span>about-me
      </h2>
      <div className='flex items-center justify-start small-dots-left'>
        <div className='basis-3/5'>
          <p className='mb-5'>
            {' '}
            I&#39;m Efezino Idisi, a dedicated frontend developer with a passion
            for creating exceptional, responsive, and user-friendly web
            applications. I am actively seeking opportunities to contribute my
            skills and expertise to exciting projects. Let&#39;s create
            something amazing together!
          </p>
          <Link
            href={'/about'}
            className='border border-purple px-3 py-2 rounded'
          >
            view more &rarr;
          </Link>
        </div>

        <div className='basis-2/5'>
          <Image
            src={'/avatar.jpg'}
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            className='w-full rounded-full'
          />
        </div>
      </div>
    </section>
  );
}
