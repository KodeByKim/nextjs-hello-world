"use client";
import { Box, Section } from "@radix-ui/themes";
import { useState } from "react";
import { TVRow1Col1 } from "./screens/TVRow1Col1";
import { TVRow1Col2 } from "./screens/TVRow1Col2";
import { TVRow1Col3 } from "./screens/TVRow1Col3";
import { TVRow2Col1 } from "./screens/TVRow2Col1";
import { TVRow2Col2 } from "./screens/TVRow2Col2";
import { TVRow2Col3 } from "./screens/TVRow2Col3";
import { TVRow3Col1 } from "./screens/TVRow3Col1";
import { TVRow3Col2 } from "./screens/TVRow3Col2";
import { TVRow3Col3 } from "./screens/TVRow3Col3";
import { TVRow3Col4 } from "./screens/TVRow3Col4";

export const OurClientsSection = () => {
  const [nums, setNums] = useState<(number | null)[]>([
    8,
    null,
    1,
    6,
    4,
    7,
    null,
    4,
    2,
    3,
  ]);
  return (
    <Section className="overflow-x-hidden w-full bg-night pt-[120px] pb-[196.97px]">
      <Box className="h-[1304px] w-[1440px] relative mx-auto">
        <Box className="absolute top-[108px] left-[100px] z-[19]">
          <TVRow1Col1
            index={0}
            value={(nums?.[0] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute top-0 left-[515.86px] z-[18]">
          <TVRow1Col2
            index={1}
            value={(nums?.[1] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute top-[117px] left-[943px] z-[17]">
          <TVRow1Col3
            index={2}
            value={(nums?.[2] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute top-[323.93px] left-[34.56px] z-30">
          <TVRow2Col1
            index={3}
            value={(nums?.[3] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute top-[405px] left-[601px] z-30">
          <TVRow2Col2
            index={4}
            value={(nums?.[4] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute top-[433px] left-[1055px] z-[32]">
          <TVRow2Col3
            index={5}
            value={(nums?.[5] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute bottom-[49.19px] left-[9px] z-30">
          <TVRow3Col1
            index={6}
            value={(nums?.[6] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute bottom-0 left-[149px] z-40">
          <TVRow3Col2
            index={7}
            value={(nums?.[7] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute bottom-[26.53px] left-[555px] z-[31]">
          <TVRow3Col3
            index={8}
            value={(nums?.[8] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
        <Box className="absolute bottom-0 right-[-113px]  z-50">
          <TVRow3Col4
            index={9}
            value={(nums?.[9] as number) ?? null}
            setValue={(value, index) => {
              setNums((prev) => [
                ...prev.slice(0, index),
                value,
                ...prev.slice(index + 1),
              ]);
            }}
          />
        </Box>
      </Box>
    </Section>
  );
};
