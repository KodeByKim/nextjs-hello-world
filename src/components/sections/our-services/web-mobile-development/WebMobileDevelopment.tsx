import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ServiceIndex } from "../ServiceIndex";
import { ServiceTitle } from "../ServiceTitle";
import { GradientCurvedLine } from "@/utils/graphics";
import { cn } from "@/utils/functions";

export const WebMobileDevelopment = () => {
  return (
    <Flex
      direction={"column"}
      justify={"between"}
      className={cn(
        "gap-[53px] h-[682px] w-full max-w-[1260px] mx-auto",
        "relative border border-antiflashWhite bg-night z-[103]",
      )}
    >
      <ServiceTitle title="Web + Mobile Development" />
      <Box className="absolute left-[361px] top-[102px] z-20">
        <Image src="/images/computer.png" width={709} height={491} alt="" />
      </Box>
      <GradientCurvedLine className="z-10 absolute top-0 bottom-0 left-[580px]" />
      <Box className="relative">
        <Box className="w-full">
          <Box className="p-[60px] pt-0 -mt-[52px] relative z-10">
            <Box className="w-[327px]">
              <Text
                className={
                  "text-antiflashWhite text-lg tracking-[1.71px] leading-normal"
                }
                as="p"
              >
                Mi tempus blandit nulla amet velit leo pellentesque. Amet amet
                velit morbi interdum nullam facilisi. Id non ullamcorper
                tincidunt massa augue in tellus pharetra. Fringilla
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <ServiceIndex index="03" />
    </Flex>
  );
};
