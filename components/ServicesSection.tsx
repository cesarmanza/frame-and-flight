import { Camera, Video, Map, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { DroneIcon } from './DroneIcon';
import { useState, useRef } from 'react';

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

function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div 
      className="video-showcase-container mt-24 relative"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Video Section Header */}
      <motion.div 
        className="video-header text-center mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-montserrat-semibold text-navy mb-4">
          See Our Work in Action
        </h3>
        <p className="text-navy/70 font-montserrat-regular max-w-2xl mx-auto">
          Experience the cinematic quality and professional precision that defines Frame & Flight's approach to aerial videography and real estate media.
        </p>
      </motion.div>

      {/* Video Container */}
      <motion.div 
        className="video-container relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          className="w-full h-auto"
          onEnded={handleVideoEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls={isPlaying}
          preload="metadata"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMEExMTM3O3N0b3Atb3BhY2l0eTowLjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBBMTEzNztzdG9wLW9wYWNpdHk6MC4yIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiZykiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMEExMTM3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U2t5cmlkZ2UgVGltZWxhcHNlIFZpZGVvPC90ZXh0Pgo8L3N2Zz4K"
        >
          <source src="/skyridge-timelapse-low-res.mov" type="video/mp4" />
          <source src="/skyridge-timelapse-low-res.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Play Button Overlay */}
        {!isPlaying && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
            onClick={handlePlayPause}
            whileHover={{ bg: "rgba(0,0,0,0.3)" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              className="play-button bg-white/90 hover:bg-white text-navy rounded-full p-6 shadow-xl backdrop-blur-sm"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(10, 17, 55, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </motion.button>
          </motion.div>
        )}

        {/* Video Info Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="font-montserrat-semibold text-white text-lg mb-2">
            Skyridge Development Timelapse
          </h4>
          <p className="font-montserrat-regular text-white/80 text-sm">
            Capturing months of construction progress from concept to completion
          </p>
        </motion.div>
      </motion.div>

      {/* Video Description */}
      <motion.div 
        className="video-description text-center mt-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-navy/60 font-montserrat-regular text-sm max-w-3xl mx-auto leading-relaxed">
          This timelapse showcases our expertise in documenting construction progress and architectural development. 
          From aerial perspectives to detailed progress tracking, we capture every phase of your project with precision and artistry.
        </p>
      </motion.div>
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

        {/* Video Showcase Section */}
        <VideoShowcase />
      </div>
    </section>
  );
}