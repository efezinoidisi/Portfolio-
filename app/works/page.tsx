import Projects from "@/components/projects/Projects";
import {
  landingPages,
  projects,
  sideProjects,
  teamProjects,
} from "@/constants/projects";
import { Works } from "@/types/project";

export default function ProjectsPage() {
  return (
    <main className="md:ml-16 p-5">
      <h1 className="uppercase text-2xl font-mono pb-2 text-white ">
        projects
      </h1>
      <p className="mb-5 text-lg leading-10">
        Here are some of the projects built during the course of my learning and
        development.
      </p>
      <div className="flex flex-col gap-y-10">
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
    heading: "main-projects",
    list: projects,
  },

  {
    heading: "landing-pages",
    list: landingPages,
  },
  {
    heading: "team-projects",
    list: teamProjects,
  },
  {
    heading: "side-projects",
    list: sideProjects,
  },
];
