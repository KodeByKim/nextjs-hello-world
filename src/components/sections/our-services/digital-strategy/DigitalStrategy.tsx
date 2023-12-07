import { GradientTriangle } from "@/utils/graphics";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ServiceIndex } from "../ServiceIndex";
import { ServiceTitle } from "../ServiceTitle";
import { cn } from "@/utils/functions";

export const DigitalStrategy = () => {
  return (
    <Flex
      direction={"column"}
      justify={"between"}
      className={cn(
        "gap-[53px] h-[682px] w-full max-w-[1260px] mx-auto",
        "relative border border-antiflashWhite bg-night z-[105]",
      )}
    >
      <ServiceTitle title="Digital Strategy" />
      <Box className="absolute left-[350px] top-[104px] z-20">
        <Image src="/images/brain.png" width={613} height={474} alt="" />
      </Box>
      <GradientTriangle className="absolute z-10 top-[245px] left-1/2 -translate-x-1/2" />
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
      <ServiceIndex index="05" />
    </Flex>
  );
};
