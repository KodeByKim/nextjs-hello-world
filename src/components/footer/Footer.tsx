import { redhatDisplay } from "@/utils/constants";
import { cn } from "@/utils/functions";
import {
  EmailIcon,
  InstagramIcon,
  LinkedIn,
  MoxieLabsLogoLarge,
  PhoneIcon,
} from "@/utils/graphics";

import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { ReactNode } from "react";

const footerContactDetails: {
  label: ReactNode;
  icon: JSX.Element;
}[] = [
  {
    label: (
      <Link href={"mailto:info@moxielabs.co"} target="_blank">
        info@moxielabs.co
      </Link>
    ),
    icon: <EmailIcon />,
  },
  {
    label: "215-622-9605",
    icon: <PhoneIcon />,
  },
  {
    label: (
      <Link href={"https://www.instagram.com/moxielabs"} target="_blank">
        @moxielabs
      </Link>
    ),
    icon: <InstagramIcon />,
  },
  {
    label: (
      <Link href={"https://www.linkedin.com/company/moxielabs"} target="_blank">
        moxie labs
      </Link>
    ),
    icon: <LinkedIn />,
  },
];

export const Footer = () => {
  return (
    <footer className="py-[100px] px-[120px] bg-night">
      <Flex align={"center"} justify={"between"}>
        <Link href="/">
          <MoxieLabsLogoLarge />
        </Link>
        <Flex
          direction={"column"}
          className={cn(redhatDisplay.className, "uppercase")}
          gap={"6"}
        >
          {footerContactDetails.map(({ label, icon }, index) => (
            <Flex gap={"5"} align={"center"} key={index}>
              <Box className="w-5">{icon}</Box>
              <Text
                as="span"
                className="font-semibold text-lg text-antiflashWhite tracking-[7.29px]"
              >
                {label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </footer>
  );
};
