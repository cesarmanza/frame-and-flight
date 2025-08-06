import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ScrollDrone } from "./components/ScrollDrone";
import { PortfolioModal } from "./components/PortfolioModal";
import { FrameFlightLogo } from "./components/FrameFlightLogo";

export default function App() {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const openPortfolioModal = () => {
    setSelectedProjectId(null);
    setIsPortfolioModalOpen(true);
  };

  const openSpecificProject = (projectId: number) => {
    setSelectedProjectId(projectId);
    setIsPortfolioModalOpen(true);
  };

  const closePortfolioModal = () => {
    setIsPortfolioModalOpen(false);
    setSelectedProjectId(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Navigation */}
      <Header onOpenPortfolio={openPortfolioModal} />

      {/* Scroll Animation Layer */}
      <ScrollDrone />

      {/* Main Content Container */}
      <main className="flex flex-col w-full">
        {/* Hero Section Container */}
        <section id="hero" className="hero-section flex flex-col relative">
          <HeroSection onOpenPortfolio={openPortfolioModal} />
        </section>

        {/* Services Section Container */}
        <section id="services" className="services-section flex flex-col relative">
          <ServicesSection />
        </section>

        {/* Portfolio Section Container */}
        <section id="portfolio" className="portfolio-section flex flex-col relative">
          <PortfolioSection 
            onOpenPortfolio={openPortfolioModal}
            onOpenSpecificProject={openSpecificProject}
          />
        </section>

        {/* About Section Container */}
        <section id="about" className="about-section flex flex-col relative">
          <AboutSection />
        </section>

        {/* Contact Section Container */}
        <section id="contact" className="contact-section flex flex-col relative">
          <ContactSection />
        </section>
      </main>

      {/* Footer Section Container */}
      <footer className="footer-section flex flex-col bg-navy py-12 border-t border-white/20">
        <div className="flex flex-col items-center justify-center container mx-auto px-4 text-center">
          {/* Footer Logo */}
          <div className="footer-logo mb-6">
            <FrameFlightLogo 
              className="h-16 w-auto"
              alt="Frame & Flight - Premier Real Estate & Drone Photography in Austin, TX"
              variant="white"
            />
          </div>

          {/* Footer Tagline */}
          <p className="footer-tagline text-white/80 font-montserrat-regular text-lg mb-6">
            Elevating Real Estate. Capturing the Impossible.
          </p>

          {/* Footer Navigation */}
          <div className="footer-nav flex flex-wrap justify-center gap-8 mb-8">
            <a href="#services" className="text-white/70 hover:text-white font-montserrat-regular transition-colors duration-200">
              Services
            </a>
            <a href="#portfolio" className="text-white/70 hover:text-white font-montserrat-regular transition-colors duration-200">
              Portfolio
            </a>
            <a href="#about" className="text-white/70 hover:text-white font-montserrat-regular transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-white/70 hover:text-white font-montserrat-regular transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Footer Copyright */}
          <p className="footer-copyright text-white/60 font-montserrat-regular text-sm">
            © 2025 Frame & Flight. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Global Portfolio Modal */}
      <PortfolioModal 
        isOpen={isPortfolioModalOpen} 
        onClose={closePortfolioModal}
        initialProjectId={selectedProjectId}
      />
    </div>
  );
}