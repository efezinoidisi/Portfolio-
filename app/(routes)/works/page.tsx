import Works from '@/components/projects/Projects';
import {
  projects,
  sideProjects,
  teamProjects,
} from '@/components/projects/data';

export default function Projects() {
  return (
    <main className='md:ml-16 p-5'>
      <h2 className='uppercase text-xl font-mono pb-2'>my projects</h2>
      <p className='mb-5 text-sm'>a list of all my projects</p>
      <Works projects={projects} heading='main-projects' />
      <br />
      <br />
      <Works projects={teamProjects} heading='team-projects' />
      <br />
      <br />
      <Works projects={sideProjects} heading='side-projects' />
    </main>
  );
}
