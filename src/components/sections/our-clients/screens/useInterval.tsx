"use client";

import React from "react";

export const useRandomInterval = (
  callback: VoidFunction,
  minDelay: number,
  maxDelay: number,
) => {
  const timeoutIdRef = React.useRef(null);
  const savedCallbackRef = React.useRef(callback);

  React.useEffect(() => {
    savedCallbackRef.current = callback;
  });

  React.useEffect(() => {
    const isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";
    if (isEnabled) {
      const tick = () => {
        const nextTickAt =
          Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay;
        // @ts-ignore
        timeoutIdRef.current = setTimeout(() => {
          savedCallbackRef.current();
          tick();
        }, nextTickAt);
      };
      tick();
    }

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [minDelay, maxDelay]);

  const cancel = React.useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
  }, []);

  return cancel;
};
