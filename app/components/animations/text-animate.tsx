"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Paragraph({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      console.log(e);
    });
  }, []);
  const words = value.split(" ");

  return (
    <motion.p
      ref={ref}
      className={`flex flex-wrap gap-1 ${className}`}
      style={{ lineHeight: 2 }}
      transition={{ staggerChildren: 0.5 }}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            value={word}
            key={index}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </motion.p>
  );
}

const Word = ({
  value,
  range,
  progress,
}: {
  value: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0.3, 1]);

  return (
    <motion.span className={""} style={{ opacity }}>
      {value}
    </motion.span>
  );
};

export function WordTyping({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => {
        return (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              staggerChildren: 0.1,
            }}
            key={index}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </>
  );
}

export function TextTyping({ text }: { text: string }) {
  const words = text.split("");

  return (
    <>
      {words.map((word, index) => {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 0.8,
              repeatType: "loop",
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
}
