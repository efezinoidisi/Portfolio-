'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';

export default function Hero() {
  return (
    <ScrollAnimate
      id='hero'
      className='md:h-screen bg-dots bg-no-repeat bg-right-bottom bg-smallest flex flex-col justify-evenly mb-10 md:m-0'
    >
      <div className='flex flex-col-reverse md:flex-row justify-center  md:justify-between items-center bg-dots bg-no-repeat bg-left-top bg-small pb-10 md:pb-0'>
        <div className='md:basis-3/5 flex flex-col'>
          <p className='mb-6  tracking-wider leading-8 md:text-left md:tracking-wider max-w-xl '>
            {/* <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='font-medium text-lg'
              transition={{ duration: 1.1, type: 'spring', delay: 0.6 }}
            >
            </motion.span>{' '}
            is a{' '} */}
            <motion.span
              className='inline-block text-purple text-2xl capitalize font-bold'
              initial={{ x: '-80', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: 'spring', delay: 1 }}
            >
              frontend software engineer{' '}
            </motion.span>
            {` skilled in building interactive web interfaces, With a flair for
            user-centric design. Transforming designs into captivating websites and web applications.`}
          </p>
          <Link
            href={'/contact'}
            className='border-2 text-purple font-bold text-lg font-mono uppercase hover:border-gray border-purple py-2 px-5 rounded-md transform btn w-fit self-center md:self-start'
          >
            hire me!
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
              unoptimized
            />
          </motion.div>
        </div>
      </div>

      <Skills />
    </ScrollAnimate>
  );
}

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
      content: 'typescript javascript html css',
    },
    {
      id: 1,
      title: 'frameworks',
      content: 'react next-js tailwind styled-components',
    },
    {
      id: 2,
      title: 'tools',
      content: 'git github figma-dev',
    },
  ];

  return (
    <ul className='self-end grid grid-cols-2 items-center flex-wrap justify-center md:justify-end gap-3'>
      {skills.map(({ title, id, content }: Skill) => (
        <li
          className='border border-gray/90 last:col-start-2 first:row-start-2 [&:nth-child(2)]:row-start-3 last:row-start-2 first:row-span-2 max-w-[14rem]'
          key={id}
        >
          <h3 className='border-b border-gray/80 py-2 px-3 capitalize text-base text-white'>
            {title}
          </h3>
          <p className='py-4 text-sm px-3 leading-7'>{content}</p>
        </li>
      ))}
    </ul>
  );
};
