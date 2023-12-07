import { ContactUsSection } from "@/components/sections/contact-us/ContactUsSection";
import { Footer } from "@/components/sections/footer/Footer";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { LoadingScreen } from "@/components/sections/hero/LoadingScreen";
import { IntroductionSection } from "@/components/sections/introduction/IntroductionSection";
import { MoxieLawsSection } from "@/components/sections/moxie-laws/MoxieLawsSection";
import { OurClientsSection } from "@/components/sections/our-clients/OurClientsSection";
import { OurServicesSection } from "@/components/sections/our-services/OurServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LoadingScreen />
      <IntroductionSection />
      <OurServicesSection />
      <OurClientsSection />
      <MoxieLawsSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
