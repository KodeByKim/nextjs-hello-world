import { cn } from "@/utils/functions";
import { Box, Flex, Section } from "@radix-ui/themes";
import { BlueStickyPad } from "./BlueStickyPad";
import { GridPaper } from "./GridPaper";
import { MoxieFirstLaw, MoxieSecondLaw, MoxieThirdLaw } from "./MoxieLaws";
import { MoxieLawsBackground } from "./MoxieLawsBackground";
import { YellowStickyPad } from "./YellowStickyPad";

export const MoxieLawsSection = () => {
  return (
    <Section
      className={cn(
        "min-h-[100dvh] bg-night overflow-hidden",
        "flex justify-center items-center relative",
        "p-[90px] pt-[205px] pb-[395px]",
      )}
    >
      <Box className="relative">
        <MoxieLawsBackground />
        <GridPaper>
          <Box className="relative w-full h-full">
            <YellowStickyPad />
            <BlueStickyPad />
            <Box className="w-max pl-[189px] pt-[57px]">
              <MoxieFirstLaw />
            </Box>
            <Flex className="pt-[73px] justify-end">
              <MoxieSecondLaw />
            </Flex>
            <Box className="pl-[103px] pt-[81px]">
              <MoxieThirdLaw />
            </Box>
          </Box>
        </GridPaper>
      </Box>
    </Section>
  );
};
