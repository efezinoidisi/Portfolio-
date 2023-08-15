import Image from 'next/image';
import About from '../_components/About';
import Contact from '../_components/Contact';
import Hero from '../_components/Hero';
import Projects from '../_components/projects/Projects';
import ImageLink from '../_components/nav/ImageLink';

export default function Home() {
  return (
    <main className='md:ml-16 p-5'>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <ImageLink
        src={'/angles-up-solid.svg'}
        href='#hero'
        styles=''
        alt=''
        imageStyles='animate-bounce'
      />
    </main>
  );
}
