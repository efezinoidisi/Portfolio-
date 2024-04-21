import { Works } from "@/types/project";

export const projects: Works[] = [
  {
    id: 1,
    name: "Ecommerce web app",
    stack: ["nextjs", "tailwind", "typescript", "supabase"],
    github: "https://github.com/efezinoidisi/furniture-app",
    preview: "https://z-furniture.netlify.app/",
    src: "/furniture.png",
    brief:
      "An e-commerce web app that mirrors the core features of an online furniture shop. I built this E-commerce web application to explore Supabase.",
  },

  {
    id: 2,
    name: "moviesfun",
    stack: ["nextjs", "tailwind", "typescript", "tmdb-api", "tanstack-query"],
    github: "https://github.com/efezinoidisi/movies-fun-app",
    preview: "https://zee-movies-fun.netlify.app",
    src: "/movies-app.webp",
    brief:
      "A movie web application that provides the latest information about movies, tv shows and celebrities. I built to understand more about Nextjs and learn NextAuth.",
  },
  {
    id: 0,
    name: "my portfolio",
    stack: ["nextjs", "tailwind", "typescript", "framer-motion "],
    github: "https://github.com/efezinoidisi/Portfolio-",
    preview: "https://efezino-portfolio.netlify.app/",
    src: "/portfolio.webp",
    brief: "A web application that showcases my skills and qualifications.",
  },
  {
    id: 4,
    name: "AirBnB clone",
    stack: ["Python", "Flask", "MySQL"],
    github: "https://github.com/efezinoidisi/AirBnB_clone_v4",
    preview: "",
    src: "/airbnb_clone.jpg",
    brief:
      "A clone of the AirBnB that focuses on gradually implementing the core features and functionality of the original.",
  },
];
export const teamProjects: Works[] = [
  {
    id: 5,
    name: "apply for me",
    stack: ["react"],
    github: "https://github.com/workshopapps/applyforme.web",
    preview: "",
    src: "/applyforme.png",
    brief:
      "An application designed to assist job seekers in streamlining their job application process.",
  },
  {
    id: 6,
    name: "ProAlx",
    stack: ["react", "flask", "tanstack-query", "tailwind", "recharts"],
    github: "https://github.com/codelawani/ProAlx",
    preview: "https://proalx.live",
    src: "/proalx.png",
    brief:
      "A web application that helps ALX students find active partners for team projects.",
  },
  {
    id: 7,
    name: "duty circle",
    stack: ["nextjs", "tailwind", "typescript"],
    github: "https://github.com/codelawani/duty_circle",
    preview: "https://dutycircle.vercel.app/",
    src: "/dutycircle.png",
    brief:
      "An application where users can create and manage personal tasks while also choosing to share them publicly.",
  },
];

export const sideProjects: Works[] = [
  {
    id: 8,
    name: "todo",
    stack: ["react", "typescript", "styled-components"],
    github: "https://github.com/efezinoidisi/todo-app",
    preview: "https://fun-todo.netlify.app/",
    src: "/todo.png",
    brief:
      "I built this simple CRUD application that helps users keep track of their todo list to learn typescript and styled components.",
  },
  {
    id: 9,
    name: "metabnb",
    stack: ["react", "styled-components"],
    github: "https://github.com/efezinoidisi/Metabnb",
    preview: "https://zee-metabnb.netlify.app/",
    src: "/metabnb.png",
    brief: "A web application where users can build a multiverse home",
  },
  {
    id: 10,
    name: "links app",
    stack: ["react"],
    github: "https://github.com/efezinoidisi/link-task1",
    preview: "https://linktree-task.netlify.app/",
    src: "/linktree-task.png",
    brief: "I built this SPA react web application to learn react",
  },
];
