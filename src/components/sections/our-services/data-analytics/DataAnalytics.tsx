import {
  GradientAsteriskSymbol,
  GradientDivisionSymbol,
  GradientEqualSymbol,
  GradientMultiplySymbol,
  GradientPercentSymbol,
} from "@/utils/graphics";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ServiceIndex } from "../ServiceIndex";
import { ServiceTitle } from "../ServiceTitle";
import { cn } from "@/utils/functions";

export const DataAnalytics = () => {
  return (
    <Flex
      direction={"column"}
      justify={"between"}
      className={cn(
        "gap-[53px] h-[682px] w-full max-w-[1260px] mx-auto",
        "relative border border-antiflashWhite bg-night z-[104]",
      )}
    >
      <ServiceTitle title="Data Analytics" />
      <GradientMultiplySymbol className="absolute top-[180px] right-[412px]" />
      <GradientDivisionSymbol className="absolute top-[116px] right-[225px]" />
      <GradientPercentSymbol className="absolute top-[316px] right-[200px]" />
      <GradientEqualSymbol className="absolute top-[234px] right-[52px]" />
      <GradientAsteriskSymbol className="absolute top-[15px] right-[60px]" />
      <Box className="absolute left-[296px] top-[40px]">
        <Image src="/images/calculator.png" width={703} height={638} alt="" />
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
      <ServiceIndex index="04" />
    </Flex>
  );
};
