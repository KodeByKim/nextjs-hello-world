import { redhatDisplay } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { StarFilled, StarOutlined } from "@/utils/graphics";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { InputHTMLAttributes, forwardRef } from "react";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Radio = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return (
      <label className={cn(redhatDisplay.className)}>
        <Flex className="gap-[10px]" align={"center"}>
          <Box className="relative w-5 h-5 radio-container">
            <input
              className="w-5 h-5 absolute z-20 opacity-0 radio-input"
              type="radio"
              ref={ref}
              {...props}
            />
            <Image
              className="checked-indicator z-10 absolute"
              src={StarFilled}
              alt=""
              width={20}
              height={20}
            />
            <Image
              className="unchecked-indicator z-10 absolute"
              src={StarOutlined}
              alt=""
              width={20}
              height={20}
            />
          </Box>
          {props.label && (
            <span className="text-night uppercase text-lg tracking-[7.3px] font-semibold">
              {props.label}
            </span>
          )}
        </Flex>
      </label>
    );
  },
);

Radio.displayName = "Radio";
