import { cn } from "@/utils/functions";
import GlobeSvg from "@public/custom-graphics/globe.svg";
import { Box, Flex, Text } from "@radix-ui/themes";
import { ServiceTitle } from "../ServiceTitle";
import { MoxieLabsTextBanner } from "./MoxieLabsTextBanner";

export const OurUniverse = () => {
  return (
    <Flex
      direction={"column"}
      className={cn(
        "h-full gap-[53px] mx-auto w-full overflow-x-visible z-[100] relative",
        "max-w-[1260px] border border-antiflashWhite bg-night",
      )}
    >
      <ServiceTitle title="Our Universe" />
      <Box className="relative">
        <Box className="w-full">
          <Flex align="center" className="relative h-[412px] w-full">
            <Box className="h-[412px] absolute z-[1] left-1/2 -translate-x-1/2">
              <GlobeSvg />
            </Box>
            <Flex className="overflow-hidden relative z-[3]">
              <MoxieLabsTextBanner />
            </Flex>
          </Flex>
          <Box className="p-[60px] pt-0 -mt-[52px] relative z-[2]">
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
    </Flex>
  );
};
