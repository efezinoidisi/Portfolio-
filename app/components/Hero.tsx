"use client";
import avatar from "@/assets/me.jpg";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import BlurImage from "./BlurImage";
import Heading from "./Heading";
import { TextTyping, WordTyping } from "./animations/text-animate";

export default function Hero() {
  const delay = 1;
  return (
    <div
      id="hero"
      className="bg-dots bg-no-repeat bg-right-bottom bg-smallest flex flex-col justify-evenly mb-10 md:m-0 "
    >
      <div className="grid md:grid-cols-3 justify-center  md:justify-between items-center bg-dots bg-no-repeat bg-left-top bg-small pb-10 md:pb-0 lg:min-h-screen gap-4">
        <div className=" bg-dots bg-smallest bg-no-repeat bg-right-bottom flex justify-center">
          <motion.div
            className='after:content-[""] relative after:-left-2 after:bg-gradient-to-tr after:from-purple after:to-gray after:absolute after:-right-2
            md:after:-inset-3 after:opacity-[0.4]  after:-bottom-2 w-fit after:-z-10 z-10 after:border-2 after:rounded-e-3xl my-10 after:top-5 after:border-gray'
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, type: "spring" }}
          >
            <BlurImage
              src={avatar}
              className="border-2 rounded-e-3xl border-gray"
              size={300}
            />
          </motion.div>
        </div>
        <div className="md:col-span-2 flex flex-col gap-y-8 md:col-start-1 md:row-start-1">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-8xl tracking-wide font-ubuntu-mono font-bold bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 bg-clip-text text-balance text-transparent"
          >
            <TextTyping text="Web Developer" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className=" tracking-wide leading-9 md:text-left max-w-xl text-xl sm:text-2xl md:leading-[1.5]"
          >
            <WordTyping text=" who is passionate about coding and loves building responsive and dynamic web applications / websites." />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: "100px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href={"#contact"}
              className="border-2 text-purple font-bold font-mono uppercase hover:border-gray border-purple/60 py-4 px-5 rounded-md transform btn w-fit self-center delay-700 md:self-start text-xl md:2xl"
            >
              contact me!
            </Link>
          </motion.div>
        </div>
      </div>

      <Skills />
    </div>
  );
}

type Skill = {
  id: number;
  title: string;
  content: string;
};

const Skills = () => {
  const skills: Skill[] = [
    {
      id: 0,
      title: "languages",
      content: "typescript javascript mysql nodeJs",
    },
    {
      id: 1,
      title: "frameworks/libraries",
      content:
        "react next-js tailwind-css styled-components tanstack-query react-hook-form ",
    },
    {
      id: 2,
      title: "tools",
      content: "git github figma-dev",
    },
  ];

  return (
    <article className="flex flex-col w-full relative my-20">
      <Heading value="skills" />

      <div
        className="min-h-40 w-1/3 md:w-1/2  absolute top-1/2 -translate-y-1/2 -z-[1]"
        aria-hidden="true"
      >
        <span className="left-20 size-14 rounded-full bg-yellow/50 absolute top-0"></span>
        <span className="left-10 size-8 rounded-full bg-purple/40 absolute top-12"></span>
        <span className="left-16 size-40 rounded-full bg-purple/40 absolute top-16"></span>
      </div>
      <ul className="self-end grid grid-cols-2 items-center flex-wrap justify-center md:justify-end gap-3 ">
        {skills.map((skill: Skill, index) => (
          <SkillItem key={skill.id} index={index} {...skill} />
        ))}
      </ul>
    </article>
  );
};

type SkillItemProps = Skill & {
  index: number;
};

const SkillItem = ({ index, id, content, title }: SkillItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  const isInView = useInView(ref, {
    amount: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: (2 - index) * 0.4,
      },
      scale: 1,
    }),
  };
  return (
    <motion.li
      ref={ref}
      className="border border-gray/90 last:col-start-2 first:row-start-2 [&:nth-child(2)]:row-start-3 last:row-start-2 first:row-span-2 max-w-[14rem]"
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      exit={"hidden"}
      transition={{ staggerChildren: 1 }}
    >
      <h3 className="border-b border-gray/80 py-2 px-3 capitalize text-lg text-balance md:text-xl truncate">
        {title}
      </h3>
      <p className="py-4 text-base capitalize font-ubuntu-mono tracking-wide px-3 leading-7 text-white/90 md:text-lg md:leading-loose">
        {content}
      </p>
    </motion.li>
  );
};
