import { redhatDisplay, unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Box, Text } from "@radix-ui/themes";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Radio } from "../../ui/Radio";
import { ContactSchemaType } from "./ContactUsForm";

export const ProjectBudgetRadioList = ({
  register,
  error,
}: {
  register: UseFormRegister<ContactSchemaType>;
  error: FieldError;
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
        PROJECT BUDGET
      </Text>
      <Box className="flex flex-col gap-[10px]">
        <Radio
          value="100k-500k"
          label="100k-500k"
          {...register("projectBudget")}
        />
        <Radio value="500k-1m" label="500k-1m" {...register("projectBudget")} />
        <Radio value="1m+" label="1m+" {...register("projectBudget")} />
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
