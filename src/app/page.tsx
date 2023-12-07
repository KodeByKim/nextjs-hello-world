import { Footer } from "@/components/footer";
import * as Section from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Section.HeroSection />
      <Section.LoadingScreen />
      <Section.IntroductionSection />
      <Section.OurServicesSection />
      <Section.OurClientsSection />
      <Section.MoxieLawsSection />
      <Section.ContactUsSection />
      <Footer />
    </main>
  );
}
