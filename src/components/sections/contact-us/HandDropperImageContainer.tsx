import { preventContextMenu } from "@/utils/functions";
import { Box } from "@radix-ui/themes";
import Image from "next/image";

export const HandDropperImageContainer = () => {
  return (
    <Box className="absolute top-0 left-0 -translate-y-[195px] -translate-x-[290px]">
      <Image
        src="/images/arm-dropper.png"
        width={1050}
        height={562}
        alt=""
        onContextMenu={preventContextMenu}
        draggable="false"
      />
    </Box>
  );
};
