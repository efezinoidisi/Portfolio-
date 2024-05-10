"use client";
import { Works } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

export default function Card(props: Works) {
  const { src, name, stack, id, github, preview, brief } = props;

  const linkStyle =
    "border border-purple/60 w-full py-2 rounded flex justify-center items-center gap-2 hover:border-none hover:bg-purple/50 transition-colors duration-200 ease-in-out overflow-hidden hover:scale-105 hover:text-white capitalize max-w-[43%]";

  return (
    <motion.li
      initial={{ opacity: 0, x: "-10%", scale: 0.8 }}
      transition={{ bounce: 1, duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      className={`border-2 flex flex-col rounded-lg border-gray/40 overflow-hidden hover:border-purple/90 transition-colors ease-linear duration-200 group pb-4  w-full relative  font-inter`}
    >
      <div className="w-full border-b overflow-hidden border-gray/70">
        <Image
          src={src}
          alt={`screenshot of ${name} project`}
          width={800}
          height={500}
          className="h-full w-full  group-hover:scale-110  duration-300 object-cover ease-in-out"
          placeholder="blur"
          unoptimized
        />
      </div>
      <h3 className="text-xl capitalize font-medium text-white text-pretty leading-9 tracking-wide font-fira-code px-3 border-b border-gray/70 py-3">
        {name}
      </h3>

      <p className="leading-9 tracking-wide px-3 py-3">{brief}</p>

      <ul className="flex flex-wrap gap-2 mx-3 my-5">
        {stack.map((text) => (
          <li key={text} className="bg-purple/10 py-1 px-2 rounded text-sm">
            {text}
          </li>
        ))}
      </ul>

      <div className="flex mx-3 items-center mt-auto my-4 gap-4 w-full">
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
