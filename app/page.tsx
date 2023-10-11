import About from '@/components/About';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/projects/Projects';
import { projects } from '@/components/projects/data';

export default function Home() {
  const threeProjects = projects.slice(0, 3);
  return (
    <main className='md:ml-16 p-5'>
      <Hero />
      {/* add work experience */}
      <Projects projects={threeProjects} page='home' heading='projects' />
      <About page='home' />
      <Contact page='home' />
    </main>
  );
}
