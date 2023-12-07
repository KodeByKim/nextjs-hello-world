import { preventContextMenu } from "@/utils/functions";
import Image from "next/image";

export const BlobImageContainer = () => {
  return (
    <Image
      src="/custom-graphics/blob.png"
      className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-6"
      width={490}
      height={211}
      alt=""
      priority
      onContextMenu={preventContextMenu}
      draggable="false"
    />
  );
};
