import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface PortfolioSectionProps {
  onOpenPortfolio: () => void;
  onOpenSpecificProject: (projectId: number) => void;
}

export function PortfolioSection({ onOpenPortfolio, onOpenSpecificProject }: PortfolioSectionProps) {
  const portfolioItems = [
    {
      id: 1,
      title: "Luxury Hillside Estate",
      image: "https://images.unsplash.com/photo-1635111031688-9b13c0125d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjByZWFsJTIwZXN0YXRlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU0NDM3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Residential"
    },
    {
      id: 2,
      title: "Modern Architectural Masterpiece",
      image: "https://images.unsplash.com/photo-1571191607086-068a11c2625d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGx1eHVyeSUyMGhvbWUlMjBhZXJpYWx8ZW58MXx8fHwxNzU0NDM3ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Residential"
    },
    {
      id: 3,
      title: "Downtown Corporate Complex",
      image: "https://images.unsplash.com/photo-1724608625021-b2a2d74ff387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc1NDQzNzg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Commercial"
    },
    {
      id: 4,
      title: "Seaside Resort & Marina",
      image: "https://images.unsplash.com/photo-1639187034917-aaf52ec982cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBhZXJpYWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTQ0Mzc4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Commercial"
    },
    {
      id: 5,
      title: "Waterfront Estate Collection",
      image: "https://images.unsplash.com/photo-1717940542724-be6baf2ae9a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZyb250JTIwcHJvcGVydHklMjBhZXJpYWx8ZW58MXx8fHwxNzU0NDM3ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Residential"
    },
    {
      id: 6,
      title: "Mixed-Use Development Progress",
      image: "https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NTQ0Mzc4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Construction"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          className="text-4xl font-montserrat-bold text-navy text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Our Work
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              layoutId={`portfolio-item-${item.id}`}
              onClick={() => onOpenSpecificProject(item.id)}
            >
              <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                <motion.div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <motion.div
                    className="absolute inset-0"
                    initial={false}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0
                    }}
                  />
                </motion.div>
                
                {/* Hover overlay with animated content */}
                <motion.div
                  className="absolute inset-0 bg-navy flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-center text-white p-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.h3 
                      className="text-xl font-montserrat-semibold mb-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm font-montserrat-regular opacity-90"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {item.category}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            className="border-navy text-navy hover:bg-navy hover:text-white font-montserrat-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={onOpenPortfolio}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}