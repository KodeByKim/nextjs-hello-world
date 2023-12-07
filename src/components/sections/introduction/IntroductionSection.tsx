import { redhatDisplay, unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Box, Flex, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import { LargeBlobImageContainer } from "./LargeBlobImageContainer";

export const IntroductionSection = () => {
  return (
    <Section className="min-h-[100dvh] overflow-hidden relative p-[90px] bg-night flex justify-center items-center">
      <LargeBlobImageContainer />
      <Box className="relative z-20">
        <Flex direction={"column"} className="gap-y-[60px]" align={"center"}>
          <Text
            className={cn(
              "text-center text-antiflashWhite text-9xl font-extrabold",
              unbounded.className,
            )}
          >
            CAREFULLY <br />
            CRAFTED
          </Text>
          <Text
            as="p"
            className={cn(
              "text-lg text-center w-[640px] text-antiflashWhite tracking-[1.71px]",
              redhatDisplay.className,
            )}
          >
            Mi tempus blandit nulla amet velit leo pellentesque. Amet amet velit
            morbi interdum nullam facilisi. Id non ullamcorper tincidunt massa
            augue in tellus pharetra. Fringilla pharetra amet ultrices
          </Text>
          <Flex className="gap-[60px]" align={"center"}>
            <Image
              src="/awards/ux-design-awards.png"
              width={209}
              height={92}
              alt="UX Design Awards"
            />
            <Image
              src="/awards/best-of-philly-2022.png"
              width={115}
              height={114}
              alt="Best of Philly 2022"
            />
            <Image
              src="/awards/philadelphia-100.png"
              width={169}
              height={66}
              alt="Philadephia 100"
            />
          </Flex>
        </Flex>
      </Box>
    </Section>
  );
};
