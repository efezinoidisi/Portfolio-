import Image from "next/image";
import Heading from "./Heading";
import { Paragraph } from "./animations/text-animate";

export default function About({
  hideLink = false,
  showLine = true,
}: {
  hideLink?: boolean;
  showLine?: boolean;
}) {
  return (
    <div id="about" className={`my-10 flex flex-col justify-evenly`}>
      <Heading value="about-me" showLine={showLine} />
      <div className="flex items-center justify-start small-dots-left flex-col-reverse md:flex-row ">
        <div className="basis-3/5 flex flex-col gap-5  md:max-w-xl">
          <div className={`mt-5 md:m-0 my-9 `}>
            <Paragraph
              className="tracking-wide  text-lg md:text-xl"
              value="Hello I'm Efezino Idisi, a frontend web developer who loves
            computers and coding. After graduating from college where I studied Computer Science, I
            have participated in bootcamps/internships to gain hands on
            experience building projects and also team building. I am actively seeking opportunities to contribute my skills
            and expertise to exciting projects. Let's create something
            amazing together!"
            />
          </div>
        </div>

        <div className="basis-2/5 flex md:justify-end justify-center items-center py-4 self-start">
          <Image
            src={"/avatar.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="60vw"
            className="w-2/3 md:w-2/3 rounded-full border-2 border-purple animate-move"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
