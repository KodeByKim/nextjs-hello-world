import { clientLogos, unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { TVStaticAnimated, ScreenRow2Col2 as img } from "@/utils/graphics";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { TVProps } from "./types";
import { useRandomInterval } from "./useInterval";

export const TVRow2Col2 = ({ index, value, setValue }: TVProps) => {
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
        width={492.52}
        height={372.19}
        draggable={false}
      />
      <Box className="absolute z-[1] top-[36px] left-[82px] w-[329px] h-[247px] rounded-[20px] bg-night overflow-hidden">
        <Flex height={"100%"} justify={"center"} align={"center"}>
          {value === null || !clientLogos[value as number] ? (
            <Image src={TVStaticAnimated} fill alt="" />
          ) : (
            <Text
              className={cn(
                "text-antiflashWhite uppercase",
                unbounded.className,
              )}
            >
              <Image
                alt=""
                src={clientLogos[value as number]?.image}
                width={
                  clientLogos[value as number]?.width
                    ? clientLogos[value as number]?.width
                    : undefined
                }
                height={
                  clientLogos[value as number]?.height
                    ? clientLogos[value as number]?.height
                    : undefined
                }
              />
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
};
