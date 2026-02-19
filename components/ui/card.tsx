"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        bg-white rounded-xl p-6 shadow-lg border border-gray-100
        ${hover ? "cursor-pointer" : ""}
        ${glow ? "hover:shadow-glow" : "hover:shadow-xl"}
        transition-shadow duration-300
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
