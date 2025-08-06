import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenPortfolio: () => void;
}

export function HeroSection({ onOpenPortfolio }: HeroSectionProps) {
  return (
    <section className="hero-container flex flex-col relative h-screen w-full overflow-hidden">
      {/* Background Layer */}
      <div className="background-layer absolute inset-0 z-0">
        <motion.div 
          className="background-image-container relative w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1732112569883-36f64fce0fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTQ0MTA5MDN8MA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Aerial drone photography of luxury real estate property in Austin Texas by Frame & Flight"
            className="hero-background-image w-full h-full object-cover"
          />
          {/* Navy Overlay */}
          <motion.div 
            className="navy-overlay absolute inset-0 bg-navy"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="hero-content-container flex flex-col items-center justify-center flex-1 relative z-10 px-4">
        <div className="hero-text-content flex flex-col items-center text-center text-white max-w-5xl">
          
          {/* Company Brand & Location */}
          <motion.div
            className="brand-location-header mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-xl md:text-2xl font-montserrat-semibold text-white/90 tracking-wide">
              Frame & Flight
            </h1>
            <p className="text-white/80 font-montserrat-regular text-sm md:text-base mt-2">
              Premier Real Estate & Drone Photography in Austin, TX
            </p>
          </motion.div>

          {/* Main Slogan - Better Spaced Layout */}
          <motion.div 
            className="hero-slogan-container mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            whileHover={{
              textShadow: "0 0 30px rgba(255,255,255,0.3)"
            }}
          >
            <div className="slogan-line-1 mb-4">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-montserrat-bold leading-tight">
                Elevating Real Estate.
              </h2>
            </div>
            <div className="slogan-line-2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-montserrat-bold leading-tight">
                Capturing the Impossible.
              </h2>
            </div>
          </motion.div>

          {/* Service Description */}
          <motion.div
            className="service-description mb-8 max-w-3xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <p className="font-montserrat-regular text-white/80 text-lg md:text-xl leading-relaxed">
              Professional aerial videography, architectural photography, and 3D mapping services 
              for Austin's luxury properties and commercial developments.
            </p>
          </motion.div>
          
          {/* Call to Action Buttons */}
          <motion.div
            className="hero-cta-container flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="primary-cta-button bg-white text-navy hover:bg-white/90 font-montserrat-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={onOpenPortfolio}
            >
              View Our Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="secondary-cta-button border-white text-white hover:bg-white hover:text-navy font-montserrat-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* SEO Hidden Content for Search Engines */}
        <div className="sr-only">
          <h3>Austin's Leading Drone Photography Company</h3>
          <p>
            Frame & Flight specializes in drone photography Austin TX, real estate photography Austin, 
            aerial videography Austin, 3D mapping Austin, and architectural photography Austin. 
            We provide professional drone services for luxury real estate, commercial properties, 
            and residential developments throughout the greater Austin area including Round Rock, 
            Cedar Park, Pflugerville, and Georgetown.
          </p>
          <p>
            Our certified drone pilots capture stunning aerial footage and photography that 
            showcases properties from impossible angles, helping real estate agents, developers, 
            and property owners market their listings with compelling visual content.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      >
        <span className="text-white/60 font-montserrat-regular text-sm mb-3">Scroll to explore</span>
        <motion.div 
          className="scroll-mouse w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="scroll-wheel w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Ambient Floating Elements */}
      <div className="ambient-elements absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="floating-drone-1 absolute top-20 right-20 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-8 text-white">
            <svg viewBox="0 0 64 64" fill="currentColor">
              <ellipse cx="32" cy="32" rx="8" ry="6" />
              <circle cx="32" cy="36" r="3" opacity="0.7" />
              <line x1="16" y1="20" x2="48" y2="44" stroke="currentColor" strokeWidth="2" />
              <line x1="48" y1="20" x2="16" y2="44" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="floating-drone-2 absolute bottom-32 left-20 opacity-10"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-6 h-6 text-white">
            <svg viewBox="0 0 64 64" fill="currentColor">
              <ellipse cx="32" cy="32" rx="8" ry="6" />
              <circle cx="32" cy="36" r="3" opacity="0.7" />
              <line x1="16" y1="20" x2="48" y2="44" stroke="currentColor" strokeWidth="2" />
              <line x1="48" y1="20" x2="16" y2="44" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}