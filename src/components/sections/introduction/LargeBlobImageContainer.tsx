import { preventContextMenu } from "@/utils/functions";
import { Box } from "@radix-ui/themes";
import Image from "next/image";

export const LargeBlobImageContainer = () => {
  return (
    <Box className="absolute w-full h-full top-0 -translate-y-[38.5%] z-10">
      <Image
        src="/custom-graphics/blob-large.svg"
        fill
        alt="Blob Large"
        draggable={false}
        onContextMenu={preventContextMenu}
      />
    </Box>
  );
};
