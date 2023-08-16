import About from '../_components/About';
import Contact from '../_components/Contact';
import Hero from '../_components/Hero';
import Projects from '../_components/projects/Projects';
import { projects } from '../_components/projects/data';

export default function Home() {
  const threeProjects = projects.slice(0, 3);
  return (
    <main className='md:ml-16 p-5'>
      <Hero />
      <Projects projects={threeProjects} page='home' heading='projects' />
      <About page='home' />
      <Contact page='home' />
    </main>
  );
}
