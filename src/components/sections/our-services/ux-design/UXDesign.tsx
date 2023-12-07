import { cn } from "@/utils/functions";
import { UXDesignImage } from "@/utils/graphics";
import { Box, Flex, Text } from "@radix-ui/themes";
import { ServiceIndex } from "../ServiceIndex";
import { ServiceTitle } from "../ServiceTitle";

export const UXDesign = () => {
  return (
    <Flex
      direction={"column"}
      justify={"between"}
      className={cn(
        "gap-[53px] h-[682px] w-full max-w-[1260px] mx-auto",
        "relative border border-antiflashWhite bg-night z-[102]",
      )}
    >
      <ServiceTitle title="UX Design" />
      <Box className="absolute left-1/2 -translate-x-1/2 top-[144px]">
        <UXDesignImage />
      </Box>
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
      <ServiceIndex index="02" />
    </Flex>
  );
};
