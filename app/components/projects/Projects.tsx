import { Works } from '@/types/project';
import Card from './Card';
import Link from 'next/link';
import Heading from '../Heading';

export default function Projects(props: {
  projects: Works[];
  page?: string;
  heading: string;
}) {
  const { projects, page = '', heading } = props;
  return (
    <section id='projects' className='flex flex-col justify-between'>
      <Heading value={heading} />

      <div className='grid sl:grid-cols-2 md:grid-cols-3 gap-y-8 gap-3 md:gap-4 lg:gap-5'>
        {projects?.map((project, index) => (
          <Card key={project.id} {...project} index={index} page={page} />
        ))}
      </div>

      {page === 'home' && (
        <Link
          href={'/works'}
          className='flex items-center hover:text-white hover:border-purple transition-colors duration-200 ease-linear self-end my-7 w-fit border rounded-md px-5 py-2 capitalize hover:bg-purple/70'
        >
          all projects&rarr;
        </Link>
      )}
    </section>
  );
}
