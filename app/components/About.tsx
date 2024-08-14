import avatar from '@/assets/avatar.jpg';
import Image from 'next/image';
import Heading from './Heading';

export default function About() {
  return (
    <div id='about' className={`my-10 flex flex-col justify-evenly`}>
      <Heading value='about-me' />
      <div className='flex items-center justify-start small-dots-left flex-col-reverse md:flex-row '>
        <div className='basis-3/5 space-y-14  md:max-w-xl'>
          <p>
            I&#39;m a software developer with two years of experience in
            crafting engaging and accessible web interfaces. I love turning
            ideas into beautiful, functional designs and continously learning
            new technologies and techniques to enhance my skills
          </p>

          <p>
            My journey in frontend development is marked by a commitment to best
            practices, attention to detail, and a passion for user-friendly
            design.
          </p>

          <p>
            I excel in collaborative environments and enjoy solving complex
            problems creatively .
          </p>
        </div>

        <div className='basis-2/5 flex md:justify-end justify-center items-center py-4 self-start'>
          <Image
            src={avatar}
            alt=''
            width={400}
            height={500}
            className='w-2/3 md:w-2/3 rounded-full border-2 border-b-8 border-purple animate-move'
            placeholder='blur'
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
