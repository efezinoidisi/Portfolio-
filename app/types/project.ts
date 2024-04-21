import { StaticImageData } from "next/image";

export type Works = {
  id: number;
  name: string;
  stack: string[];
  github: string;
  preview: string;
  src: string | StaticImageData;
  brief: string;
};
