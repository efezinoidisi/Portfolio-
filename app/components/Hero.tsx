'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

export default function Hero() {
  return (
    <ScrollAnimate
      id='hero'
      className='bg-dots bg-no-repeat bg-right-bottom bg-smallest flex flex-col justify-evenly mb-10 md:m-0'
    >
      <div className='flex flex-col-reverse md:flex-row justify-center  md:justify-between items-center bg-dots bg-no-repeat bg-left-top bg-small pb-10 md:pb-0 min-h-screen'>
        <div className='md:basis-3/5 flex flex-col gap-y-2'>
          <h1 className='  tracking-wide leading-10 md:text-left max-w-xl text-lg'>
            <motion.span
              className='inline-block text-purple text-xl capitalize font-bold'
              initial={{ x: '-80', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: 'spring', delay: 1 }}
            >
              frontend web developer{' '}
            </motion.span>
            {` who is passionate about coding and loves building responsive and dynamic web applications / websites.`}
          </h1>
          <ul className='flex items-center gap-x-2 my-3'>
            {icons.map((Icon) => (
              <>{Icon}</>
            ))}
          </ul>
          <Link
            href={'/contact'}
            className='border-2 text-purple font-bold text-lg font-mono uppercase hover:border-gray border-purple py-2 px-5 rounded-md transform btn w-fit self-center md:self-start '
          >
            contact me!
          </Link>
        </div>

        <div className='md:basis-2/5 bg-dots bg-smallest bg-no-repeat bg-right-bottom flex justify-center'>
          <motion.div
            className='after:content-[""] relative after:-left-2 after:bg-gradient-to-tr after:from-purple after:to-gray after:absolute after:-right-2
            md:after:-inset-3 after:opacity-[0.4]  after:-bottom-2 w-fit after:-z-10 z-10 after:border-2 after:rounded-e-3xl my-10 after:top-5 after:border-gray'
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
        <motion.li
          className='border border-gray/90 last:col-start-2 first:row-start-2 [&:nth-child(2)]:row-start-3 last:row-start-2 first:row-span-2 max-w-[14rem]'
          key={id}
        >
          <h3 className='border-b border-gray/80 py-2 px-3 capitalize text-base'>
            {title}
          </h3>
          <p className='py-4 text-base capitalize font-ubuntu-mono tracking-wide px-3 leading-7 text-white/90'>
            {content}
          </p>
        </motion.li>
      ))}
    </ul>
  );
};

const iconsStyle =
  'text-2xl text-white hover:text-purple transition-all duration-200 ease-linear hover:-rotate-6 hover:scale-105';

const icons = [
  <SiCss3 key={0} className={iconsStyle} />,
  <SiHtml5 key={1} className={iconsStyle} />,
  <SiJavascript key={2} className={iconsStyle} />,
  <SiTypescript key={3} className={iconsStyle} />,
  <SiReact key={5} className={iconsStyle} />,
  <SiNextdotjs key={4} className={iconsStyle} />,
  <SiTailwindcss key={6} className={iconsStyle} />,
];
