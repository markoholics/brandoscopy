import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import StudioSection from "@/components/StudioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PrinciplesSection />
        <WorkSection />
        <ServicesSection />
        <StudioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
