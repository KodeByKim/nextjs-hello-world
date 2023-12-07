import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: (string | undefined)[]) => twMerge(clsx(...args));

export { preventContextMenu } from "./client-functions";
