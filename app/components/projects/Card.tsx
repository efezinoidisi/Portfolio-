"use client";
import { Works } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

export default function Card(props: Works) {
  const { src, name, brief, stack, github, preview } = props;

  const linkStyle =
    "border border-purple/60 w-full px-4 py-2 rounded flex justify-center items-center gap-2 hover:border-none hover:bg-purple/50 transition-colors duration-200 ease-in-out overflow-hidden hover:scale-105 hover:text-white capitalize max-w-[50%]";

  return (
    <motion.li
      initial={{ opacity: 0, x: "-10%", scale: 0.8 }}
      transition={{ bounce: 1, duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      className={`border-2 flex flex-col rounded-lg border-gray/40 overflow-hidden hover:border-purple/90 transition-colors ease-linear duration-200 group pb-4  w-full relative  font-inter`}
    >
      <div className=" border-b overflow-hidden border-gray/70 min-h-[15rem] max-h-[15rem]">
        <Image
          src={src}
          alt={`screenshot of ${name} project`}
          width={500}
          height={500}
          className="h-full w-full  group-hover:scale-110  duration-300 object-cover ease-in-out"
          unoptimized
        />
      </div>
      <h3 className="text-xl capitalize font-medium text-white text-pretty leading-9 tracking-wide font-fira-code px-3 border-b border-gray/70 py-3">
        {name}
      </h3>

      <p className="leading-9 tracking-wides text-lg px-3 py-3">{brief}</p>

      <ul className="flex flex-wrap gap-2 mx-3 my-4">
        {stack.map((text) => (
          <li key={text} className="bg-purple/10 py-1 px-2 rounded">
            {text}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4 w-3/4 mt-auto mx-3">
        <Link href={github} className={linkStyle}>
          github <FaGithub />
        </Link>
        {preview ? (
          <Link href={preview} className={linkStyle}>
            view <FiExternalLink />
          </Link>
        ) : null}
      </div>
    </motion.li>
  );
}
