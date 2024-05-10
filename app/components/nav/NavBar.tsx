"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import Button from "../Button";
import NavLinks from "./NavLinks";
import Socials from "./Social";

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

  const iconStyle = "text-3xl";

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <motion.header
      initial={{ y: "-50%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5, delay: 0.1 }}
      className="flex items-center sticky top-0 bg-body md:ml-16 justify-between p-5 z-50 md:pr-14 bg-opacity-95"
    >
      <Button
        handleClick={handleMenu}
        styles="md:hidden"
        aria-label="open navigation menu"
        aria-controls="menu-container"
        aria-expanded="false"
        aria-haspopup="true"
        id="open-menu"
      >
        <CgMenuRight className={`${iconStyle} rotate-180`} />
      </Button>
      <Link
        href={"/"}
        className='text-3xl font-bold flex items-center relative after:content-[""] after:absolute after:top-0  after:size-12 after:bg-shine after:blur-2xl after:rounded-full after:left-0 after:-z-10 hover:scale-95 transition-transform duration-200 ease-out md:text-5xl'
      >
        <Logo />
        <span className="text-purple">ee</span>
      </Link>

      <div className="hidden md:block">
        <NavLinks />
      </div>

      <Link
        href="https://drive.google.com/file/d/1XSRj2EO19e1srGgZYTSCyo3j5GWkr6RV/view"
        className='border px-3 py-2 rounded-lg hover:border-yellow hover:text-yellow transition-colors duration-75 hover:scale-95 text-base relative after:content-[""] after:absolute after:top-0  after:size-20 after:bg-shine after:blur-3xl after:rounded-3xl after:left-0 after:-z-10 text-purple'
        aria-label="view my resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        resumé
      </Link>

      {/* mobile navigation  */}
      {showMobileMenu && (
        <>
          {/* overlay */}
          <div
            className="inset-0 fixed z-40 bg-black/50 h-screen md:hidden"
            onClick={handleMenu}
          ></div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 1 }}
            exit={{ width: "0" }}
            className="fixed inset-y-0 bg-gray-500 z-50 bg-body border-r rounded-r-3xl border-purple left-0  p-5 h-screen md:hidden"
            id="menu-container"
          >
            <motion.div
              initial="initial"
              animate="final"
              variants={variants}
              className="flex flex-col items-center pb-16 justify-between h-full w-full"
            >
              <div className="flex items-center justify-between w-full">
                <Logo />

                <Button
                  handleClick={handleMenu}
                  styles="md:hidden"
                  aria-label="close navigation menu"
                  aria-expanded="false"
                  role="menuitem"
                >
                  <CgClose className={iconStyle} />
                </Button>
              </div>
              <NavLinks handleClick={handleMenu} />
              <Socials size={"text-2xl"} />
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.header>
  );
}

const Logo = () => {
  return (
    <Image
      src={"/z-logo.jpeg"}
      alt=""
      width={500}
      height={500}
      unoptimized
      className="size-8 md:size-10"
    />
  );
};
