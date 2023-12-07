import { unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Flex, Section, Text } from "@radix-ui/themes";
import { ContactUsForm } from "./ContactUsForm";
import { HandDropperImageContainer } from "./HandDropperImageContainer";

export const ContactUsSection = () => {
  return (
    <Section className="min-h-[100dvh] w-full bg-antiflashWhite py-[140px] px-[120px] relative flex items-end">
      <HandDropperImageContainer />
      <Flex align="end" justify={"between"} className="h-full w-full">
        <Text
          className={cn(
            "text-[120px] leading-[108px] font-bold -mb-2",
            "uppercase text-night",
            unbounded.className,
          )}
        >
          Let&apos;s <br />
          get to <br />
          Work
        </Text>
        <ContactUsForm />
      </Flex>
    </Section>
  );
};
