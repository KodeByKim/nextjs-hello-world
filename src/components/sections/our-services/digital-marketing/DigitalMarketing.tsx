import { unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import HeartIcon from "@public/icons/heart.svg";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ServiceTitle } from "../ServiceTitle";

export const BlueCircleGradient = () => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      className={cn("w-[150px] aspect-square rounded-full blue-gradient")}
    >
      <HeartIcon className="mt-3" />
    </Flex>
  );
};

export const DigitalMarketing = () => {
  return (
    <Flex
      direction={"column"}
      justify={"between"}
      className={cn(
        "gap-[53px] w-full h-[682px] max-w-[1260px] mx-auto",
        "relative overflow-hidden border border-antiflashWhite",
        "bg-night z-[101]",
      )}
    >
      <ServiceTitle title="Digital Marketing" />
      <Box className="relative">
        <Box className="w-full">
          <Flex
            justify={"between"}
            className="p-[60px] pt-0 -mt-[50px] z-[10] relative"
          >
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
          </Flex>
        </Box>
      </Box>
      <Text
        className={cn(
          "absolute z-[12] right-[94px] bottom-[18px] text-[120px]",
          "font-extrabold text-antiflashWhite",
          unbounded.className,
        )}
        as="p"
      >
        01
      </Text>
      <Box className="absolute z-[20] top-[155px] left-[220px] -scale-x-100 rotate-[14deg]">
        <Image src="/images/tong.png" width={635.89} height={295.6} alt="" />
      </Box>
      <Box className="absolute right-0 translate-x-[97px] bottom-[30px]">
        <BlueCircleGradient />
      </Box>
      <Box className="absolute right-[300px] bottom-[51px]">
        <BlueCircleGradient />
      </Box>
      <Box className="absolute right-[117px] bottom-[239px]">
        <BlueCircleGradient />
      </Box>
      <Box className="absolute right-[501px] bottom-[216px] z-[21]">
        <BlueCircleGradient />
      </Box>
    </Flex>
  );
};
