"use client";
import { redhatDisplay } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Section } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useState } from "react";
import { TService, servicesList } from "./servicesList";

export const Accordion = ({
  expanded,
  setExpanded,
  index,
  service,
}: {
  expanded: number | false;
  setExpanded: (index: number | false) => void;
  index: number;
  service: TService;
}) => {
  const isOpen = expanded === index;

  return (
    <>
      <motion.header
        initial={false}
        onMouseOver={() => setExpanded(index)}
        onMouseLeave={() => setExpanded(false)}
      >
        <motion.section
          key="content"
          initial={"collapsed"}
          animate={isOpen ? "open" : "collapsed"}
          exit="collapsed"
          variants={{
            open: {
              marginBottom: 0,
              // zIndex: index + 100,
            },
            collapsed: {
              marginBottom: index !== 5 && !isOpen ? "-535px" : undefined,
              // zIndex: index + 100,
            },
          }}
          style={{
            width: "1260px",
          }}
          transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {service.component()}
        </motion.section>
      </motion.header>
    </>
  );
};

export const OurServicesSection = () => {
  const [expanded, setExpanded] = useState<false | number>(false);
  return (
    <Section
      className={cn(
        "min-h-screen bg-night py-0 flex flex-col items-center",
        "relative",
        redhatDisplay.className,
      )}
    >
      {servicesList.map((service, index) => {
        return (
          <Accordion
            key={index}
            index={index}
            service={service}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        );
      })}
    </Section>
  );
};
// <Box className="z-[1]">
//   <OurUniverse />
// </Box>
// <Box className="z-[2] relative">
//   <DigitalMarketing />
// </Box>
// <Box className="z-[3] relative">
//   <UXDesign />
// </Box>
// <Box className="z-4">
//   <WebMobileDevelopment />
// </Box>
// <Box className="z-5">
//   <DataAnalytics />
// </Box>
// <Box className="z-6">
//   <DigitalStrategy />
// </Box>
