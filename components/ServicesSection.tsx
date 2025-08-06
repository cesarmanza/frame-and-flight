import { Camera, Video, Map } from 'lucide-react';
import { motion } from 'motion/react';
import { DroneIcon } from './DroneIcon';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div 
      className="service-card flex flex-col items-center text-center group"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Service Icon */}
      <motion.div 
        className="service-icon-container flex justify-center mb-6"
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.6 }
        }}
      >
        <div className="service-icon">
          {icon}
        </div>
      </motion.div>
      
      {/* Service Title */}
      <motion.h3 
        className="service-title text-xl font-montserrat-semibold text-navy mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      
      {/* Service Description */}
      <p className="service-description text-navy/80 font-montserrat-regular leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: <DroneIcon className="w-12 h-12 text-navy" />,
      title: "Aerial Videography",
      description: "Stunning aerial footage that showcases Austin properties from breathtaking perspectives, capturing the full scope and beauty of real estate developments, luxury homes, and Texas landscapes with cinematic quality."
    },
    {
      icon: <Camera className="w-12 h-12 text-navy" />,
      title: "Architectural Photography",
      description: "Professional photography that highlights the unique design elements and architectural features of Austin properties, creating compelling visual narratives for luxury real estate marketing and commercial developments."
    },
    {
      icon: <Map className="w-12 h-12 text-navy" />,
      title: "3D Mapping",
      description: "Advanced 3D mapping and modeling services for Austin area properties, providing detailed spatial insights and interactive visualizations for real estate development, construction planning, and property surveys."
    }
  ];

  return (
    <section className="services-container flex flex-col py-24 bg-white">
      <div className="services-content-wrapper flex flex-col container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="services-header flex justify-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title text-4xl font-montserrat-bold text-navy text-center">
            Our Services
          </h2>
        </motion.div>
        
        {/* Services Grid */}
        <div className="services-grid flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card-wrapper flex-1">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}