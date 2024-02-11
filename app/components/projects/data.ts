import { Works } from '@/types/project';

export const projects: Works[] = [
  {
    id: 1,
    name: 'Ecommerce web app',
    stack: 'nextjs tailwind typescript supabase',
    github: 'https://github.com/efezinoidisi/furniture-app',
    preview: 'https://furniture-app-henna.vercel.app/',
    src: 'furniture.png',
    brief:
      'I built this E-commerce web application to explore Supabase. (still in development)',
  },

  {
    id: 2,
    name: 'moviesfun',
    stack: 'nextjs tailwind typescript next-auth tmdb-api',
    github: 'https://github.com/efezinoidisi/movies-fun-app',
    preview: 'https://zee-movies.vercel.app',
    src: 'hero-desktop.png',
    brief:
      'I built this movie web application that provides the latest information about movies, tv shows and celebrities to master Nextjs and  learn NextAuth.',
  },
  {
    id: 0,
    name: 'web developer portfolio',
    stack: 'nextjs tailwind typescript framer-motion ',
    github: 'https://github.com/efezinoidisi/Portfolio-',
    preview: 'https://efezino-portfolio.vercel.app/',
    src: 'portfolio.png',
    brief:
      'A web application that showcases my portfolio and relevant information about me.',
  },
];
export const teamProjects: Works[] = [
  {
    id: 0,
    name: 'apply for me',
    stack: 'react java',
    github: 'https://github.com/workshopapps/applyforme.web',
    preview: '',
    src: 'applyforme.png',
    brief:
      'An application designed to assist job seekers in streamlining their job application process.',
  },
  {
    id: 1,
    name: 'ProAlx',
    stack: 'react flask tanstack-query tailwind',
    github: 'https://github.com/codelawani/ProAlx',
    preview: 'https://proalx.live',
    src: 'proalx.png',
    brief:
      'A web application that helps ALX students find active partners for team projects.',
  },
  {
    id: 2,
    name: 'duty circle',
    stack: 'nextjs tailwind typescript',
    github: 'https://github.com/codelawani/duty_circle',
    preview: 'https://dutycircle.vercel.app/',
    src: 'dutycircle.png',
    brief:
      'An application where users can create and manage personal tasks while also choosing to share them publicly.',
  },
];

export const sideProjects: Works[] = [
  {
    id: 0,
    name: 'todo',
    stack: 'react typescript styled-components',
    github: 'https://github.com/efezinoidisi/todo-app',
    preview: 'https://fun-todo.netlify.app/',
    src: 'todo.png',
    brief:
      'I built this simple CRUD application that helps users keep track of their todo list to learn typescript and styled components.',
  },
  {
    id: 1,
    name: 'metabnb',
    stack: 'react styled-components',
    github: 'https://github.com/efezinoidisi/Metabnb',
    preview: 'https://zee-metabnb.netlify.app/',
    src: 'metabnb.png',
    brief: 'A web application where users can build a multiverse home',
  },
  {
    id: 2,
    name: 'links app',
    stack: 'react',
    github: 'https://github.com/efezinoidisi/link-task1',
    preview: 'https://linktree-task.netlify.app/',
    src: 'linktree-task.png',
    brief: 'I built this SPA react web application to learn react',
  },
];
