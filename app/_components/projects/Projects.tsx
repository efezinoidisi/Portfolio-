'use client';
import { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Works } from '@/app/_types/project';
import { projects } from './data';
import Image from 'next/image';
import ImageLink from '../nav/ImageLink';
import Card from './Card';
import Link from 'next/link';

// const Project = ({
//   name,
//   index,
//   img,
//   tools,
//   preview,
//   github,
// }: {
//   name: string;
//   index: number;
//   img: string;
//   tools: string;
//   preview: string;
//   github: string;
// }) => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
//   const animation = useAnimation();
//   useEffect(() => {
//     if (inView) {
//       animation.start({
//         y: 0,
//         transition: {
//           type: 'spring',
//           duration: 1,
//         },
//         opacity: 1,
//       });
//     }
//     if (!inView) {
//       const initial = index / 2 === 0 ? '-100vw' : '-100px';

//       animation.start({ y: `100%`, opacity: 0 });
//     }
//   }, [inView]);

//   return (
//     <article className='' ref={ref}>
//       <AnimatePresence>
//         <motion.div
//           className='flex flex-col md:flex-row justify-center items-center py-16 shadow-2xl'
//           animate={animation}
//           exit={{ opacity: 1 }}
//         >
//           <div className='basis-2/5 flex flex-col items-center justify-center md:justify-start md:items-start'>
//             <h3>
//               <span className='text-purple '>#</span>
//               {name}
//             </h3>
//             <p>{tools}</p>
//             <div className='flex items-center gap-2'>
//               <ImageLink
//                 src='/github.svg'
//                 alt=''
//                 href={github}
//                 width={30}
//                 height={30}
//               />
//               <ImageLink
//                 src='/arrow-up.svg'
//                 alt=''
//                 href={preview}
//                 width={30}
//                 height={30}
//               />
//             </div>
//           </div>
//           <div className='active flex items-center p-3'>
//             <Image
//               src={`/${img}`}
//               alt=''
//               width={0}
//               height={0}
//               sizes='60vw'
//               className='w-full h-auto'
//             />
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </article>
//   );
// };

export default function Projects() {
  const threeProjects = projects.slice(0, 3);
  return (
    <section id='projects' className='flex flex-col justify-between'>
      <header className='flex justify-between items-center pb-10'>
        <h2 className='heading'>
          <span className='text-purple'>#</span>Projects
        </h2>
        <Link href={'/works'}>
          view all <span>&rarr;</span>
        </Link>
      </header>

      <div className='flex gap-2 items-center flex-col md:flex-row'>
        {threeProjects.map((project, index) => (
          <Card key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
