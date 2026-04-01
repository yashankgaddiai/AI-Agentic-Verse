import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "../../lib/utils";
import { ReactNode } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "elevated" | "flat" | "outline" | "none";
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  variant = "elevated",
  padding = "md",
  ...props
}: CardProps) {
  const variants = {
    elevated: "bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-zinc-200",
    flat: "bg-zinc-50 border-transparent",
    outline: "bg-transparent border-2 border-zinc-100 hover:border-zinc-900",
    none: "",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-8",
    lg: "p-12",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "rounded-[2.5rem] transition-all duration-300 overflow-hidden",
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
