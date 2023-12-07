import { Flex, Section } from "@radix-ui/themes";

import { AtomicLoader } from "@/utils/graphics";
import { Counter } from "./Counter";

export const LoadingScreen = () => {
  return (
    <Section className="h-[100dvh] w-full bg-antiflashWhite">
      <Flex height={"100%"} justify={"center"} align={"center"}>
        <Flex justify={"center"} align={"center"} className="gap-[21px]">
          <AtomicLoader />
          <Counter />
        </Flex>
      </Flex>
    </Section>
  );
};
