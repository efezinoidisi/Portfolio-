import Works from '@/app/_components/projects/Projects';
import { projects } from '@/app/_components/projects/data';

export default function Projects() {
  return (
    <main className='md:ml-16 p-5'>
      <h2 className='uppercase text-xl font-mono pb-2'>my projects</h2>
      <p className='mb-5'>all my projects</p>
      <Works projects={projects} heading='main-projects' />
      <br />
      <br />
      <Works projects={projects} heading='side-projects' />
    </main>
  );
}
