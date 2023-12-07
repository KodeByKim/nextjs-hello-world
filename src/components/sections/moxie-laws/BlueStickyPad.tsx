import RepeatingSquares from "@public/custom-graphics/repeating-squares.svg";
import { Box, Flex } from "@radix-ui/themes";

export const BlueStickyPad = () => {
  return (
    <Box className="absolute w-[283px] aspect-square bottom-0 right-0 translate-y-[83.51px] translate-x-[81.83px] flex items-center justify-center">
      <Flex
        className="bg-turquoise w-[247px] h-[249px] light-shadow rotate-[-8.428deg]"
        align={"center"}
        justify={"center"}
      >
        <RepeatingSquares className="rotate-[8.428deg]" />
      </Flex>
    </Box>
  );
};
