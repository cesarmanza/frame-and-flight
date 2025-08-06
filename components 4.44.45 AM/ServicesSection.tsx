import { Camera, Video, Map, Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';
import { DroneIcon } from './DroneIcon';
import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import timelapseThumb from 'figma:asset/dea5953cc93eb20867c5897b95eb04b9cc7b17dd.png';

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
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!showVideo) {
      setShowVideo(true);
      // Small delay to allow video element to mount
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch((error) => {
            console.log('Video play failed:', error);
            // Video not available, keep showing thumbnail
            setShowVideo(false);
          });
        }
      }, 100);
    } else if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Video play failed:', error);
        });
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowVideo(false);
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
        className="video-container relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={handlePlayPause}
      >
        {/* Video Element - only render when playing */}
        {showVideo && (
          <video
            ref={videoRef}
            className="w-full h-auto"
            onEnded={handleVideoEnd}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            playsInline
            controls={isPlaying}
          >
            <source src="/skyridge-timelapse-low-res.mov" type="video/mp4" />
            <source src="/skyridge-timelapse-low-res.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Thumbnail Image - show when video is not playing */}
        {!showVideo && (
          <img
            src={timelapseThumb}
            alt="Commercial real estate timelapse thumbnail - aerial view of shopping center with Brewhouse"
            className="w-full h-auto"
          />
        )}

        {/* Play/Pause Button Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/20"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-white/90 hover:bg-white text-navy rounded-full p-6 shadow-xl backdrop-blur-sm"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(10, 17, 55, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" fill="currentColor" />
            ) : (
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            )}
          </motion.button>
        </motion.div>

        {/* Video Info Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="font-montserrat-semibold text-white text-lg mb-2">
            Commercial realestate timelapses
          </h4>
          <p className="font-montserrat-regular text-white/80 text-sm">
            Capturing hours of footage to show traffic patterns of commercial areas
          </p>
        </motion.div>

        {/* Click to Play Indicator */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-navy/80 text-white px-3 py-1 rounded-full text-xs font-montserrat-semibold backdrop-blur-sm">
            Click to play
          </div>
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
          Capturing hours of footage to show traffic patterns of commercial areas. 
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