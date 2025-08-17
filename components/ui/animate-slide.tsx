"use client";
import React from "react";
import { motion } from "motion/react";

interface RevealTextProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  triggerOnView?: boolean;
  className?: string;
}

const directionVariants = {
  up: { y: 24, opacity: 0 },
  down: { y: -24, opacity: 0 },
  left: { x: 24, opacity: 0 },
  right: { x: -24, opacity: 0 },
};

const RevealText: React.FC<RevealTextProps> = ({
  children,
  direction = "up",
  delay = 0,
  triggerOnView = true,
  className = "",
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={directionVariants[direction]}
      whileInView={triggerOnView ? { x: 0, y: 0, opacity: 1 } : undefined}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export default RevealText;
