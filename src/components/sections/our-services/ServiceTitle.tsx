import { cn } from "@/utils/functions";
import { Box, Text } from "@radix-ui/themes";

export const ServiceTitle = ({ title }: { title: string }) => {
  return (
    <Box className="p-[60px] pb-0">
      <Box className="px-[13px] py-[3px] border border-antiflashWhite w-max">
        <Text
          className={cn(
            "text-antiflashWhite text-lg leading-[22.554px]",
            "tracking-[7.29px] uppercase",
          )}
          weight="bold"
          as="p"
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
};
