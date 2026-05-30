"use client";

import { motion, useReducedMotion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -20, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 20, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <main>{children}</main>;
  }

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "tween", duration: 0.25 }}
    >
      {children}
    </motion.main>
  );
}