import { unbounded } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const _buttonVariants = cva(
  cn(
    "rounded-full text-lg font-extrabold uppercase box-border",
    unbounded.className,
  ),
  {
    variants: {
      variant: {
        outline: "px-[27px] py-[14px] border-[3px]",
        solid: "py-[25px] px-[43px]",
      },
      color: {
        light: "text-night border-night",
        dark: "text-antiflashWhite border-antiflashWhite",
      },
    },
    defaultVariants: {
      variant: "outline",
      color: "light",
    },
  },
);

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof _buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <button
        className={cn(
          _buttonVariants({
            variant,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
