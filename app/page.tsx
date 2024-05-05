import About from "@/components/About";
import Hero from "@/components/Hero";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <main className="md:ml-16 p-5 flex flex-col gap-y-20">
      <Hero />
      {/* add work experience */}
      <Projects projects={projects} page="home" heading="projects" />
      <About />
      <Contact page="home" />
    </main>
  );
}
