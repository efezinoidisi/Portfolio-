'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';

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
          <h3 className='border-b border-gray p-1 text-base text-white'>
            {title}
          </h3>
          <p className='py-4 text-sm px-1'>{content}</p>
        </div>
      ))}
    </>
  );
};

export default function Hero() {
  return (
    <ScrollAnimate
      id='hero'
      className='md:h-screen bg-dots bg-no-repeat bg-right-bottom bg-smallest flex flex-col justify-evenly mb-10 md:m-0'
    >
      <div className='flex flex-col-reverse md:flex-row justify-center  md:justify-between items-center bg-dots bg-no-repeat bg-left-top bg-small pb-10 md:pb-0'>
        <div className='md:basis-3/5 flex flex-col'>
          <p className='mb-6 leading-7  tracking-tighter md:text-left md:tracking-normal max-w-xl'>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='font-medium text-lg'
              transition={{ duration: 1.1, type: 'spring', delay: 0.6 }}
            >
              Efezino
            </motion.span>{' '}
            is a{' '}
            <motion.span
              className='inline-block text-purple text-2xl'
              initial={{ x: '-80', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: 'spring', delay: 1 }}
            >
              frontend developer{' '}
            </motion.span>
            {` skilled in building interactive web interfaces, With a flair for
            user-centric design. She transforms ideas into captivating websites.
            Her collaborative approach turns your concepts into engaging online
            realities.`}
          </p>
          <Link
            href={'/contact'}
            className='border-2 text-white font-mono uppercase border-purple py-2 px-5 rounded-md transform btn w-fit self-center md:self-start'
          >
            Contact me!
          </Link>
        </div>

        <div className='md:basis-2/5 bg-dots bg-smallest bg-no-repeat bg-right-bottom flex justify-center'>
          <motion.div
            className='after:content-[""] relative after:-left-2 md:after:left-10 after:bg-gradient-to-tr after:from-purple after:to-gray after:absolute after:-right-2 md:after:-right-5 after:opacity-[0.4] md:after:top-10 after:-bottom-2 md:after:-bottom-5 w-fit after:-z-10 z-10 after:border-2 after:rounded-e-3xl my-10 after:top-5 after:border-gray'
            initial={{ y: '100', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}
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
    </ScrollAnimate>
  );
}
