import { redhatDisplay, unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

const _textInputVariants = cva(
  cn(
    "bg-transparent border-b-2 pb-[10px]",
    "placeholder:uppercase text-lg font-semibold focus:outline-none",
    "placeholder:text-[#AEAEAE] uppercase text-[#AEAEAE] focus:text-night",
    redhatDisplay.className,
  ),
  {
    variants: {
      variant: {
        normal: "border-night",
        error: "border-errorRed",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  },
);

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof _textInputVariants> & {
    label?: string;
    error?: FieldError;
  };

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ variant, className, error, ...props }, ref) => {
    return (
      <label className="flex flex-col gap-[7px]">
        {props.label && (
          <span
            className={cn(
              "font-bold uppercase leading-normal",
              unbounded.className,
            )}
          >
            {props.label}
          </span>
        )}
        <input
          className={cn(
            _textInputVariants({
              variant: variant ?? error ? "error" : "normal",
              className,
            }),
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span
            className={cn(
              "text-errorRed text-sm font-medium mt-[10px]",
              redhatDisplay.className,
            )}
          >
            {error?.message}
          </span>
        )}
      </label>
    );
  },
);

TextInput.displayName = "TextInput";
