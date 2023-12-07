"use client";
import { unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Variants, motion } from "framer-motion";

export const OurClientsTextBanner = () => {
  const items = [
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
    "Our Clients",
  ];

  const carouselVariants: Variants = {
    animate: {
      x: [0, -100 * items.length],
      transition: {
        x: {
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      variants={carouselVariants}
      animate="animate"
      style={{
        width: `${100 * items.length}%`, // Set the width of the container to accommodate all items
      }}
      className="flex gap-[25px]"
    >
      {items.map((item, i) => (
        <motion.p
          key={`${item}-${i}`}
          className={cn(
            "uppercase text-[120px] text-antiflashWhite",
            "font-extrabold leading-[103.5px] mb-[-2.3px]",
            "select-none whitespace-nowrap",
            unbounded.className,
          )}
        >
          {item}
        </motion.p>
      ))}
    </motion.div>
  );
};
