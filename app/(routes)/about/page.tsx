import Me from '@/components/About';
import { AboutMe } from '@/types/about';

export default function About() {
  return (
    <main className='md:ml-16 p-5'>
      <Me hideLink />
      <br />
      <br />
      <div className=''>
        <h3 className='heading mb-9 capitalize font-bold text-lg after:content-[""] after:absolute after:-bottom-1 after:border-purple h-fit after:border-b-4 after:w-32 after:left-10 w-full relative text-white'>
          <span className='text-purple'>#</span>random-facts
        </h3>
        <ul className='list-disc list-inside flex flex-col gap-2 px-7'>
          {randomFacts.map(({ id, fact }: AboutMe) => (
            <li key={id}>{fact}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

const randomFacts: AboutMe[] = [
  {
    id: 0,
    fact: 'I spend my free time watching kdramas/animes or reading romance novels.',
  },
  {
    id: 1,
    fact: 'I love music',
  },
];
