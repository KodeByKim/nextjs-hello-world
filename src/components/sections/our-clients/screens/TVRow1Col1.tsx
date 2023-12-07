import { clientLogos, unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { TVStaticAnimated, ScreenRow1Col1 as img } from "@/utils/graphics";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { TVProps } from "./types";
import { useRandomInterval } from "./useInterval";

export const TVRow1Col1 = ({ index, value, setValue }: TVProps) => {
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
        className="relative z-[1]"
        src={img}
        alt=""
        width={535.96}
        height={213}
        draggable={false}
      />
      <Box className="absolute z-0 top-[41px] left-[146px] w-[205px] h-[130px] bg-night overflow-hidden">
        <Flex
          height={"100%"}
          justify={"center"}
          align={"center"}
          position={"relative"}
        >
          {value === null ||
          !clientLogos[value as number] ||
          !clientLogos[value as number] ? (
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
