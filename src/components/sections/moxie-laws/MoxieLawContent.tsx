import { reenieBeanie } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Box, Text } from "@radix-ui/themes";

export const MoxieLawContent = ({
  ruleNumber = 1,
}: {
  ruleNumber?: number;
}) => {
  return (
    <Box
      className={cn(
        "text-persianBlue font-bold text-6xl h-[128px]",
        reenieBeanie.className,
      )}
    >
      <Text as="p" className="-mb-[48px]">
        {ruleNumber}. An idea will remain at
      </Text>
      <Text as="p" className="-mb-[47px]">
        rest unless acted upon by
      </Text>
      <Text as="p">an external force</Text>
    </Box>
  );
};
