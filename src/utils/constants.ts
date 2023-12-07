import { Red_Hat_Display, Reenie_Beanie, Unbounded } from "next/font/google";
import {
  BioMedLogo,
  BruYouLogo,
  ComCastLogo,
  HoneyGrowLogo,
  IndianRiverSelectLogo,
  JohnsonAndJohnsonLogo,
  WhoopLogo,
} from "./graphics";

export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "variable",
});

export const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
});

export const redhatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: "variable",
});

export const clientLogos = [
  {
    name: "HoneyGrow",
    image: HoneyGrowLogo,
    width: 323,
    height: 145,
  },
  {
    name: "BruYou",
    image: BruYouLogo,
    width: 216,
    height: 73,
  },
  {
    name: "Indian River Select",
    image: IndianRiverSelectLogo,
    width: 194.17,
    height: 104.52,
  },
  {
    name: "ComCast",
    image: ComCastLogo,
    width: 230.76,
    height: 135.61,
  },
  {
    name: "Johnson & Johnson",
    image: JohnsonAndJohnsonLogo,
    width: 203.29,
    height: 124.47,
  },
  {
    name: "BioMed",
    image: BioMedLogo,
    width: 183.1,
    height: 106.59,
  },
  {
    name: "Whoop",
    image: WhoopLogo,
    width: 176,
    height: 28,
  },
];
