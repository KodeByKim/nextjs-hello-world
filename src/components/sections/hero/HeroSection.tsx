import { redhatDisplay, unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { MoxieLabsLogoSmall } from "@/utils/graphics";
import { Box, Flex, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import { BlobImageContainer } from "./BlobImageContainer";
import { PetriDishImageContainer } from "./PetriDishImageContainer";

export const HeroSection = () => {
  return (
    <Section className="h-[100dvh] p-[90px] grid grid-rows-[auto_1fr_auto] bg-antiflashWhite">
      <Flex justify={"end"}>
        <Link href="/">
          <MoxieLabsLogoSmall />
        </Link>
      </Flex>
      <Flex align={"center"} justify={"center"}>
        <Box className={cn("relative", unbounded.className)}>
          <Text
            className={cn(
              "absolute text-[120px] font-extrabold text-night uppercase",
              "-left-[187px] -top-[28px] z-10",
            )}
          >
            <h1>MOXIE</h1>
          </Text>
          <Text
            className={cn(
              "absolute text-[120px] font-extrabold text-night uppercase",
              "top-[138px] -right-[223px] z-10",
            )}
          >
            <h1>LABS</h1>
          </Text>
          <BlobImageContainer />
          <PetriDishImageContainer />
        </Box>
      </Flex>
      <div>
        <button
          className={cn(
            "uppercase font-bold tracking-[0.4rem]",
            redhatDisplay.className,
          )}
        >
          Work with us &gt;
        </button>
      </div>
    </Section>
  );
};
