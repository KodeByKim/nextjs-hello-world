import { unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Text } from "@radix-ui/themes";

export const MoxieLawsText = () => {
  return (
    <Text
      as="p"
      className={cn(
        "text-stroke uppercase text-[120px]",
        "font-extrabold leading-[103.5px] mb-[-2.3px]",
        "select-none max-h-[103.5px]",
        unbounded.className,
      )}
    >
      Moxie&apos;s Laws
    </Text>
  );
};
