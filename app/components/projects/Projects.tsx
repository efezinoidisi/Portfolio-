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
    <section
      id='projects'
      className='flex flex-col justify-between'
      aria-label='projects section'
    >
      <Heading value={heading} size='text-lg' />

      <ul className='grid sl:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-3 md:gap-4 lg:gap-5'>
        {projects?.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </ul>

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
