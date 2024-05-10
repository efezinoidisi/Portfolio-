import avatar from "@/assets/avatar.jpg";
import Image from "next/image";
import Heading from "./Heading";
import { Paragraph } from "./animations/text-animate";

export default function About() {
  return (
    <div id="about" className={`my-10 flex flex-col justify-evenly`}>
      <Heading value="about-me" />
      <div className="flex items-center justify-start small-dots-left flex-col-reverse md:flex-row ">
        <div className="basis-3/5 flex flex-col gap-5  md:max-w-xl">
          <div className={`mt-5 md:m-0 my-9  space-y-14`}>
            <Paragraph
              className="tracking-wide  leading-loose"
              value="Hello I'm Efezino Idisi, a frontend web developer who loves
            computers and coding. "
            />

            <p className="tracking-wide  leading-loose">
              After graduating from college where I studied Computer Science, I
              have participated in bootcamps/internships to gain hands on
              experience building projects and also working in a
              cross-functional team.
            </p>
            <Paragraph
              className="tracking-wide  leading-loose"
              value="I am actively seeking opportunities to contribute my skills
            and expertise to exciting projects. Let's create something
            amazing together!"
            />
          </div>
        </div>

        <div className="basis-2/5 flex md:justify-end justify-center items-center py-4 self-start">
          <Image
            src={avatar}
            alt=""
            width={400}
            height={500}
            className="w-2/3 md:w-2/3 rounded-full border-2 border-b-8 border-purple animate-move"
            placeholder="blur"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
