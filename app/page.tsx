import ScrollyCanvas from "@/components/ScrollyCanvas";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import MobileHint from "@/components/MobileHint";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main>
      <MobileHint />
      <Navbar />

      <div id="hero">
        <ScrollyCanvas />
      </div>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
