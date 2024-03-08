import Projects from '@/components/projects/Projects';
import {
  projects,
  sideProjects,
  teamProjects,
} from '@/components/projects/data';
import { Works } from '@/types/project';

export default function ProjectsPage() {
  return (
    <main className='md:ml-16 p-5'>
      <h1 className='uppercase text-xl font-mono pb-2 text-white'>projects</h1>
      <p className='mb-5 text-base leading-10'>
        Here are some of the projects I built during the course of my learning
        and development.
      </p>
      <div className='flex flex-col gap-y-10'>
        {allProjects.map((project) => (
          <Projects
            key={project.heading}
            heading={project.heading}
            projects={project.list}
          />
        ))}
      </div>
    </main>
  );
}

const allProjects: { heading: string; list: Works[] }[] = [
  {
    heading: 'main-projects',
    list: projects,
  },
  {
    heading: 'team-projects',
    list: teamProjects,
  },
  {
    heading: 'side-projects',
    list: sideProjects,
  },
];
