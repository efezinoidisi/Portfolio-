'use client';
import { useState } from 'react';
import NavLinks from './NavLinks';
import Image from 'next/image';
import Button from '../Button';
import Socials from './Social';

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className='flex items-center sticky top-0 bg-header md:ml-16 justify-between p-5 z-50'>
      <h1 className='text-2xl'>zee</h1>
      <Button
        handleClick={() => setShowMobileMenu((prev) => !prev)}
        styles='md:hidden'
      >
        <Image
          src={showMobileMenu ? 'xmark-solid.svg' : '/bars-solid.svg'}
          alt=''
          width={30}
          height={30}
        />
      </Button>
      <div className='hidden md:block'>
        <NavLinks />
      </div>

      {showMobileMenu && (
        <div className='fixed top-20 bottom-0 bg-gray-500 z-50 w-full bg-body left-0 right-0 p-5 flex flex-col justify-between items-start pb-16 transform transition-transform'>
          <NavLinks />
          <Socials size={50} />
        </div>
      )}
    </header>
  );
}
