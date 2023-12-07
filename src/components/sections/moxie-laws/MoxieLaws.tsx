import { Box } from "@radix-ui/themes";
import { MoxieLawContent } from "./MoxieLawContent";
import { MoxieLawLabel } from "./MoxieLawLabel";

export const MoxieFirstLaw = () => {
  return (
    <Box className="w-[590px]">
      <Box className="w-[316px]">
        <MoxieLawLabel label="MOXIE'S FIRST LAW" />
      </Box>
      <Box className="translate-x-[6px] -mt-[15px]">
        <MoxieLawContent />
      </Box>
    </Box>
  );
};

export const MoxieSecondLaw = () => {
  return (
    <Box className="w-[584px]">
      <Box className="w-[355.797px]">
        <MoxieLawLabel label="MOXIE'S SECOND LAW" />
      </Box>
      <Box className="-mt-[15px]">
        <MoxieLawContent ruleNumber={2} />
      </Box>
    </Box>
  );
};

export const MoxieThirdLaw = () => {
  return (
    <Box className="w-[584px]">
      <Box className="w-[320px]">
        <MoxieLawLabel label="MOXIE'S THIRD LAW" />
      </Box>
      <Box className="-translate-x-[6px] -mt-[15px]">
        <MoxieLawContent ruleNumber={3} />
      </Box>
    </Box>
  );
};
