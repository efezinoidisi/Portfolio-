'use client';
import { useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import NavLinks from './NavLinks';
import Button from '../Button';
import Socials from './Social';
import Link from 'next/link';
import { CgMenuRight, CgClose } from 'react-icons/cg';

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

  const [open, cycleOpen] = useCycle(false, true);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className='flex items-center sticky top-0 bg-header md:ml-16 justify-between p-5 z-50'>
      <Link href={'/'} className='text-3xl font-bold'>
        <span className='text-purple'>z</span>
        <span>ee</span>
      </Link>
      <Button
        handleClick={() => setShowMobileMenu((prev) => !prev)}
        styles='md:hidden'
      >
        {showMobileMenu ? (
          <CgClose className={iconStyle} />
        ) : (
          <CgMenuRight className={iconStyle} />
        )}
      </Button>
      <div className='hidden md:block'>
        <NavLinks />
      </div>

      {/* mobile navigation  */}
      {showMobileMenu && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          className='fixed top-20 bottom-0 bg-gray-500 z-50 bg-body left-0 right-0 p-5 flex flex-col justify-between items-start pb-16 transform transition-transform'
        >
          <motion.div initial='initial' animate='final' variants={variants}>
            <NavLinks />
            <Socials size={'text-7xl'} />
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
