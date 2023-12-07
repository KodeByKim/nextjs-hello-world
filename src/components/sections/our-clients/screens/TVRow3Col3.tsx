import { ScreenRow3Col3 as img } from "@/utils/graphics";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { OurClientsTextBanner } from "./OurClientsTextBanner";
import { TVProps } from "./types";
import { useRandomInterval } from "./useInterval";

export const TVRow3Col3 = ({ index, value, setValue }: TVProps) => {
  useRandomInterval(
    () => {
      if (value === null) {
        setValue(Math.floor(Math.random() * 6) + 1, index);
      } else {
        setValue(null, index);
      }
    },
    value !== null ? 2000 : 500,
    value !== null ? 5000 : 500,
  );
  return (
    <Box position={"relative"}>
      <Image
        className="relative z-0"
        src={img}
        alt=""
        width={628}
        height={548}
        draggable={false}
      />
      <Box className="absolute z-[-1] top-[63px] left-[80px] w-[470px] h-[344px] bg-night overflow-hidden">
        <Flex height={"100%"} justify={"center"} align={"center"}>
          <OurClientsTextBanner />
          {/* <Image src={TVStaticAnimated} height={130} width={205} alt="" /> */}
        </Flex>
      </Box>
    </Box>
  );
};
