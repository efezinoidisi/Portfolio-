"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export default function AnimationExitWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
