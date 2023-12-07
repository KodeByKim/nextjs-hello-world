import { ReactNode } from "react";
import { DataAnalytics } from "./data-analytics";
import { DigitalMarketing } from "./digital-marketing";
import { DigitalStrategy } from "./digital-strategy";
import { OurUniverse } from "./our-universe";
import { UXDesign } from "./ux-design";
import { WebMobileDevelopment } from "./web-mobile-development";

export type TService = {
  name: string;
  component: () => JSX.Element;
};

export const servicesList: TService[] = [
  {
    name: "Our Universe",
    component: OurUniverse,
  },
  {
    name: "Digital Marketing",
    component: DigitalMarketing,
  },
  {
    name: "UX Design",
    component: UXDesign,
  },
  {
    name: "Web & Mobile Development",
    component: WebMobileDevelopment,
  },
  {
    name: "Data Analytics",
    component: DataAnalytics,
  },
  {
    name: "Digital Strategy",
    component: DigitalStrategy,
  },
];
