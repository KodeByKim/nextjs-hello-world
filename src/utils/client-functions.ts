"use client";

import { MouseEventHandler } from "react";

export const preventContextMenu: MouseEventHandler<HTMLImageElement> = (e) => {
  e.preventDefault();
  return false;
};
