'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='h-screen  bg-dots bg-no-repeat bg-right-bottom bg-smallest'>
      <div className='flex flex-col md:flex-row justify-center  md:justify-between items-center bg-dots bg-no-repeat bg-left-top bg-small'>
        <div className='md:basis-3/5'>
          <h2>
            Efezino is a{' '}
            <span className='text-purple text-2xl'>frontend developer </span>
            skilled in building interactive web interfaces with proficiency in
            HTML, CSS, and JavaScript, using modern frameworks like React.
          </h2>
        </div>

        <div className='md:basis-2/5 bg-dots bg-smallest bg-no-repeat bg-right-bottom'>
          <motion.div
            className='after:content-[""] relative after:-left-2 md:after:left-10 after:bg-gradient-to-tr after:from-[#55B6C2] after:to-white after:absolute after:-right-2 md:after:-right-5 md:after:top-10 after:-bottom-2 md:after:-bottom-5 w-fit after:-z-10 z-10 after:border-2 after:rounded-e-3xl my-10 after:top-5 after:border-gray'
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
    </section>
  );
}
