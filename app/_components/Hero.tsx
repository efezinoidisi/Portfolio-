'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Skill = {
  id: number;
  title: string;
  content: string;
};

const Skills = () => {
  const skills: Skill[] = [
    {
      id: 0,
      title: 'languages',
      content: 'typescript javascript',
    },
    {
      id: 1,
      title: 'frameworks',
      content: 'react next-js',
    },
    {
      id: 2,
      title: 'tools',
      content: 'git github',
    },
  ];

  return (
    <>
      {skills.map(({ title, id, content }: Skill) => (
        <div className='border border-gray basis-[40%]' key={id}>
          <h3 className='border-b p-1 text-base text-white'>{title}</h3>
          <p className='py-4 text-sm px-1'>{content}</p>
        </div>
      ))}
    </>
  );
};

export default function Hero() {
  return (
    <section
      id='hero'
      className='h-screen  bg-dots bg-no-repeat bg-right-bottom bg-smallest flex flex-col justify-evenly mb-10 md:mb-0'
    >
      <div className='flex flex-col-reverse md:flex-row justify-center  md:justify-between items-center bg-dots bg-no-repeat bg-left-top bg-small pb-10 md:pb-0'>
        <div className='md:basis-3/5'>
          <h2 className='mb-3'>
            <span className='text-white'>Efezino</span> is a{' '}
            <span className='text-purple text-2xl'>frontend developer </span>
            skilled in building interactive web interfaces.
          </h2>
          <Link href={'/contact'} className='border py-2 px-5 rounded-md'>
            Contact me!
          </Link>
        </div>

        <div className='md:basis-2/5 bg-dots bg-smallest bg-no-repeat bg-right-bottom flex justify-center'>
          <motion.div
            className='after:content-[""] relative after:-left-2 md:after:left-10 after:bg-gradient-to-tr after:from-purple after:to-gray after:absolute after:-right-2 md:after:-right-5 after:opacity-[0.4] md:after:top-10 after:-bottom-2 md:after:-bottom-5 w-fit after:-z-10 z-10 after:border-2 after:rounded-e-3xl my-10 after:top-5 after:border-gray'
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, type: 'spring' }}
          >
            <Image
              src={'/me.jpg'}
              alt='avatar of me'
              width={200}
              height={200}
              className='border-2 rounded-e-3xl border-gray'
            />
          </motion.div>
        </div>
      </div>
      <div className='self-end flex items-center flex-wrap justify-center md:justify-end gap-3'>
        <Skills />
      </div>
    </section>
  );
}
