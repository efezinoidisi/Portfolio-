'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import NavLinks from './NavLinks';
import Button from '../Button';
import Socials from './Social';
import Link from 'next/link';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import Image from 'next/image';

export default function NavBar() {
  const variants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    final: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const iconStyle = 'text-3xl';

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <header className='flex items-center sticky top-0 bg-body md:ml-16 justify-between p-5 z-50 md:pr-14 bg-opacity-95 '>
      <Button
        handleClick={handleMenu}
        styles='md:hidden'
        aria-labelledby='open navigation menu'
      >
        <CgMenuRight className={`${iconStyle} rotate-180`} />
      </Button>
      <Link
        href={'/'}
        aria-label='home'
        className='text-3xl font-bold flex items-center relative after:content-[""] after:absolute after:top-0  after:size-12 after:bg-shine after:blur-2xl after:rounded-full after:left-0 after:-z-10 hover:scale-95 transition-transform duration-200 ease-out'
      >
        <Logo />
        <span className='text-purple'>ee</span>
      </Link>

      <div className='hidden md:block'>
        <NavLinks />
      </div>

      <>
        <a
          href='/resume/Endurance_idisi_resume.pdf'
          className='border px-3 py-2 rounded-lg hover:border-yellow hover:text-yellow transition-colors duration-75 hover:scale-95 text-sm md:text-base relative after:content-[""] after:absolute after:top-0  after:size-20 after:bg-shine after:blur-3xl after:rounded-3xl after:left-0 after:-z-10 border-r-4 border-b-4 border-r-purple border-b-purple'
          aria-labelledby='download my resumé'
          download
        >
          resumé
        </a>
      </>

      {/* mobile navigation  */}
      {showMobileMenu && (
        <>
          {/* overlay */}
          <div
            className='inset-0 fixed z-40 bg-black/50'
            onClick={handleMenu}
          ></div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '70%' }}
            className='fixed top-0 bottom-0 bg-gray-500 z-50 bg-body border-r rounded-r-3xl border-purple left-0  p-5  transform transition-transform'
          >
            <motion.div
              initial='initial'
              animate='final'
              variants={variants}
              className='flex flex-col items-center pb-16 justify-between h-full w-full'
            >
              <div className='flex items-center justify-between w-full'>
                <Logo />

                <Button
                  handleClick={handleMenu}
                  styles='md:hidden'
                  aria-labelledby='close navigation menu'
                >
                  <CgClose className={iconStyle} />
                </Button>
              </div>
              <NavLinks handleClick={handleMenu} />
              <Socials size={'text-2xl'} />
            </motion.div>
          </motion.div>
        </>
      )}
    </header>
  );
}

const Logo = () => {
  return (
    <Image
      src={'z-logo.jpeg'}
      alt=''
      width={500}
      height={500}
      unoptimized
      className='size-8'
    />
  );
};
