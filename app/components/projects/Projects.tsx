import { Works } from '@/types/project';
import Card from './Card';
import Link from 'next/link';

export default function Projects(props: {
  projects: Works[];
  page?: string;
  heading: string;
}) {
  const { projects, page = '', heading } = props;
  return (
    <section id='projects' className='flex flex-col justify-between'>
      <header className='flex justify-between items-center pb-10'>
        <h2 className='heading'>
          <span className='text-purple'>{`#`}</span>
          {heading}
        </h2>
        {page === 'home' && (
          <Link href={'/works'} className='link'>
            view all <span>&rarr;</span>
          </Link>
        )}
      </header>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-9'>
        {projects?.map((project, index) => (
          <Card key={project.id} {...project} index={index} page={page} />
        ))}
      </div>
    </section>
  );
}
