import { motion } from 'motion/react';
import { FrameFlightLogo } from './FrameFlightLogo';

interface HeaderProps {
  onOpenPortfolio: () => void;
}

export function Header({ onOpenPortfolio }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FrameFlightLogo 
              className="h-12 w-auto"
              alt="Frame & Flight - Premier Real Estate & Drone Photography Austin TX"
              variant="default"
            />
          </motion.div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={() => scrollToSection('services')}
              className="font-montserrat-regular text-navy hover:text-navy/80 transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Services
            </motion.button>
            <motion.button
              onClick={onOpenPortfolio}
              className="font-montserrat-regular text-navy hover:text-navy/80 transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Portfolio
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="font-montserrat-regular text-navy hover:text-navy/80 transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-navy text-white font-montserrat-semibold px-6 py-2 rounded-lg hover:bg-navy/90 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col space-y-1 p-2"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-0.5 bg-navy"></div>
            <div className="w-6 h-0.5 bg-navy"></div>
            <div className="w-6 h-0.5 bg-navy"></div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}