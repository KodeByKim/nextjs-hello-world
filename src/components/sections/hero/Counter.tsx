"use client";

import { unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const Counter = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [isColored, setIsColored] = useState<boolean>(false);
  useEffect(() => {
    const animation = animate(count, 100, {
      duration: 5,
      type: "tween",
      onUpdate: (latest) => {
        if (latest > 99) {
          setIsColored(true);
        }
      },
    });
    return animation.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.h1
      className={cn(
        "text-[120px] mb-4 font-extrabold",
        isColored ? "gradient-text" : "",
        unbounded.className,
      )}
    >
      {rounded}
    </motion.h1>
  );
};
