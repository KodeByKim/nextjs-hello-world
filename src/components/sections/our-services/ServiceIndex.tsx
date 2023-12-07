import { unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Text } from "@radix-ui/themes";

export const ServiceIndex = ({ index }: { index: string }) => (
  <Text
    className={cn(
      "absolute z-30 right-[22px] bottom-[13px] text-[120px] font-extrabold text-antiflashWhite",
      unbounded.className,
    )}
    as="p"
  >
    {index}
  </Text>
);
