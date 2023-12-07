import { preventContextMenu } from "@/utils/functions";
import Image from "next/image";

export const PetriDishImageContainer = () => {
  return (
    <Image
      src="/images/petri-dish.png"
      alt=""
      width={642.46}
      height={320.15}
      className="rotate-[-13.66deg]"
      priority
      onContextMenu={preventContextMenu}
      draggable="false"
    />
  );
};
