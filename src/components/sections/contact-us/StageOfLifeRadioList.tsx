import { redhatDisplay, unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Box, Text } from "@radix-ui/themes";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Radio } from "../../ui/Radio";
import { ContactSchemaType } from "./ContactUsForm";

export const StageOfLifeRadioList = ({
  register,
  error,
}: {
  register: UseFormRegister<ContactSchemaType>;
  error?: FieldError;
}) => {
  return (
    <Box>
      <Text
        as="p"
        className={cn(
          "mb-5 uppercase text-base leading-[14.4px] font-bold text-night",
          unbounded.className,
        )}
      >
        Stage of Life
      </Text>
      <Box className="flex flex-col gap-[10px]">
        <Radio label="Startup" value={"Startup"} {...register("stageOfLife")} />
        <Radio
          label="Established"
          value={"Established"}
          {...register("stageOfLife")}
        />
        <Radio label="Listed" value={"Listed"} {...register("stageOfLife")} />
      </Box>
      {error && (
        <Box className="mt-[10px]">
          <span
            className={cn(
              "text-errorRed text-sm font-medium",
              redhatDisplay.className,
            )}
          >
            {error?.message}
          </span>
        </Box>
      )}
    </Box>
  );
};
