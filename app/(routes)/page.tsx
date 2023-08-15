import Hero from '../_components/Hero';
import Projects from '../_components/projects/Projects';

export default function Home() {
  return (
    <main className='md:ml-16 p-5'>
      <Hero />
      <Projects />
    </main>
  );
}
