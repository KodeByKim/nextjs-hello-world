import RepeatingCircles from "@public/custom-graphics/repeating-circles.svg";
import { Box, Flex } from "@radix-ui/themes";

export const YellowStickyPad = () => {
  return (
    <Box className="absolute top-[159px] w-[317px] aspect-square left-0 -translate-x-[147px] flex items-center justify-center">
      <Flex
        className="bg-aureolin w-[247px] h-[249px] light-shadow rotate-[19.371deg]"
        align={"center"}
        justify={"center"}
      >
        <RepeatingCircles className="rotate-[-19.371deg] -translate-y-[20px]" />
      </Flex>
    </Box>
  );
};
