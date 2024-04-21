import { Works } from "@/types/project";
import Link from "next/link";
import Heading from "../Heading";
import Card from "./Card";

export default function Projects(props: {
  projects: Works[];
  page?: string;
  heading: string;
  showLine?: boolean;
}) {
  const { projects, page = "", heading, showLine } = props;
  return (
    <section
      id="projects"
      className="flex flex-col justify-between"
      aria-label="projects section"
    >
      <Heading
        value={heading}
        showLine={showLine}
        position="right"
        size={
          page !== "home"
            ? "text-2xl md:text-3xl"
            : "text-4xl sm:text-4xl md:text-6xl"
        }
      />

      <ul className="grid sm:grid-cols-2 xl:grid-cols-3 py-14 gap-x-7 gap-y-24">
        {projects?.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </ul>

      {page === "home" && (
        <Link
          href={"/works"}
          className="flex items-center hover:text-white hover:border-purple transition-colors duration-200 ease-linear self-end my-7 w-fit border rounded-md px-5 py-2 capitalize hover:bg-purple/70"
        >
          more projects&rarr;
        </Link>
      )}
    </section>
  );
}
