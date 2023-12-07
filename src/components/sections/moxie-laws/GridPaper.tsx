import { Box } from "@radix-ui/themes";
import Image from "next/image";
import { HTMLAttributes } from "react";
export const GridPaper = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Box
      className="w-[994px] h-[774px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      {...props}
    >
      <Image
        className="absolute"
        width={994}
        height={774}
        src="/images/grid-paper.jfif"
        alt=""
      />
      {props.children}
    </Box>
  );
};
