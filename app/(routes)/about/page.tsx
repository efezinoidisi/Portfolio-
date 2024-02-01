import Me from '@/components/About';
import { AboutMe } from '@/types/about';

export default function About() {
  return (
    <main className='md:ml-16 p-5'>
      <h2 className='uppercase font-mono text-xl mb-7'>about</h2>
      {/* integrate spotify? */}
      <Me />
      <br />
      <br />
      <div className=''>
        <h3 className='heading my-6'>
          <span className='text-purple'>#</span>random-facts
        </h3>
        <ul className='list-disc list-inside flex flex-col gap-2'>
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
    fact: 'I spend my free time watching kdramas or reading romance novels.',
  },
  {
    id: 1,
    fact: 'I sometimes have my music on while coding. It helps me focus better. oh and I love music!',
  },
];
