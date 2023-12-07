import { redhatDisplay } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Box, Text } from "@radix-ui/themes";

export const MoxieLawLabel = ({ label }: { label: string }) => {
  return (
    <Box
      className={cn(
        "bg-night py-[3px] text-center",
        "border border-antiflashWhite h-[29px]",
      )}
    >
      <Text
        as="p"
        className={cn(
          "text-lg font-bold uppercase text-antiflashWhite",
          "leading-[22.554px] tracking-[7.29px] whitespace-nowrap",
          redhatDisplay.className,
        )}
      >
        {label}
      </Text>
    </Box>
  );
};
