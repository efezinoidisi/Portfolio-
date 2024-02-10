'use client';
import Image from 'next/image';
import { Works } from '@/types/project';
import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Card(props: Works) {
  const { src, name, brief, stack, github, preview } = props;

  const linkStyle =
    'border border-gray w-full sl:max-w-[50%] px-4 py-1 rounded flex justify-center items-center gap-2 hover:border-none hover:bg-purple/50 transition-colors duration-200 ease-in-out overflow-hidden hover:scale-105 hover:text-white capitalize';
  const cardRef = useRef<HTMLLIElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  return (
    <motion.li
      className={`border-2 rounded-lg border-gray/40 overflow-hidden hover:shadow-ml transition-colors ease-linear duration-200 group pb-4 max-w-[20rem] relative block font-ubuntu-mono`}
      ref={cardRef}
      style={{ scale, opacity }}
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
      <p
        className='border-b border-gray py-5 capitalize text-base text-center px-2 text-white font-inter tracking-wide'
        aria-labelledby='tech stack used for this project'
      >
        {stack}
      </p>
      <div className='px-3 pt-4 flex flex-col gap-y-3'>
        <h3 className='text-xl capitalize font-medium text-white text-pretty leading-9 tracking-wider font-fira-code'>
          {name}
        </h3>
        <p className='leading-8 md:leading-9 text-[1.1rem]'>{brief}</p>
        <div className='flex items-center gap-2 pt-3'>
          <Link
            href={github}
            className={linkStyle}
            aria-labelledby={`go to ${name} github page`}
          >
            github <FaGithub />
          </Link>
          {preview ? (
            <Link
              href={preview}
              className={linkStyle}
              aria-labelledby={`visit ${name} project live site`}
            >
              view <FiExternalLink />
            </Link>
          ) : null}
        </div>
      </div>
    </motion.li>
  );
}
