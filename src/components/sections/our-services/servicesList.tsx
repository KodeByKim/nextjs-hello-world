import { DataAnalytics } from "./data-analytics/DataAnalytics";
import { DigitalMarketing } from "./digital-marketing/DigitalMarketing";
import { DigitalStrategy } from "./digital-strategy/DigitalStrategy";
import { OurUniverse } from "./our-universe/OurUniverse";
import { UXDesign } from "./ux-design/UXDesign";
import { WebMobileDevelopment } from "./web-mobile-development/WebMobileDevelopment";

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
