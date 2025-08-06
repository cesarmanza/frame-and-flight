import { Camera, Video, Map, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import { DroneIcon } from './DroneIcon';
import { useState, useRef, useEffect } from 'react';
import thumbnailImage from 'figma:asset/dea5953cc93eb20867c5897b95eb04b9cc7b17dd.png';

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
  const [isVideoAvailable, setIsVideoAvailable] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [videoStatus, setVideoStatus] = useState<'loading' | 'ready' | 'playing' | 'paused' | 'error' | 'unavailable'>('loading');
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if video file exists
    const checkVideoAvailability = async () => {
      try {
        const response = await fetch('/skyridge-timelapse-low-res.mov', { method: 'HEAD' });
        if (response.ok) {
          setIsVideoAvailable(true);
          setupIntersectionObserver();
        } else {
          setIsVideoAvailable(false);
          setVideoStatus('unavailable');
        }
      } catch (error) {
        console.log('Video file not available, showing placeholder');
        setIsVideoAvailable(false);
        setVideoStatus('unavailable');
      }
    };

    checkVideoAvailability();
  }, []);

  const setupIntersectionObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && isVideoAvailable) {
            attemptAutoplay();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  };

  const attemptAutoplay = async () => {
    if (!videoRef.current || !isVideoAvailable) return;

    try {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      
      setVideoStatus('loading');
      await videoRef.current.play();
      setIsPlaying(true);
      setVideoStatus('playing');
      console.log('✅ Autoplay successful');
    } catch (error) {
      console.log('❌ Autoplay prevented by browser:', error);
      setIsPlaying(false);
      setVideoStatus('paused');
      setShowControls(true);
    }
  };

  const handlePlayPause = async () => {
    if (videoRef.current && isVideoAvailable) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Play failed:', error);
          setIsPlaying(false);
        }
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleVideoClick = () => {
    if (!isPlaying && isVideoAvailable) {
      handlePlayPause();
    }
  };

  // Render placeholder when video is not available
  if (!isVideoAvailable || videoStatus === 'unavailable') {
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

        {/* Video Placeholder */}
        <motion.div 
          ref={containerRef}
          className="video-container relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative bg-navy/10 aspect-video flex items-center justify-center">
            <img 
              src={thumbnailImage} 
              alt="Frame & Flight Portfolio Preview"
              className="w-full h-full object-cover"
            />
            
            {/* Video Coming Soon Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <Video className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h4 className="font-montserrat-semibold text-xl mb-2">Video Portfolio Coming Soon</h4>
                <p className="font-montserrat-regular text-sm opacity-80">
                  Professional timelapse and aerial footage showcase
                </p>
              </div>
            </div>
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h4 className="font-montserrat-semibold text-white text-lg mb-2">
              Commercial Traffic Pattern Analysis
            </h4>
            <p className="font-montserrat-regular text-white/80 text-sm">
              Capturing hours of footage to show traffic patterns of commercial areas
            </p>
          </div>
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
        ref={containerRef}
        className="video-container relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="w-full h-auto cursor-pointer"
          onEnded={handleVideoEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => {
            console.log('📹 Video data loaded, ready for autoplay...');
            setVideoStatus('ready');
            setTimeout(() => attemptAutoplay(), 100);
          }}
          onError={() => {
            console.log('❌ Video loading error');
            setVideoStatus('error');
            setIsVideoAvailable(false);
          }}
          onCanPlay={() => {
            console.log('📹 Video can play');
            attemptAutoplay();
          }}
          onClick={handleVideoClick}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          poster={thumbnailImage}
        >
          <source src="/skyridge-timelapse-low-res.mov" type="video/mp4" />
          <source src="/skyridge-timelapse-low-res.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        {!isPlaying && isVideoAvailable && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer pointer-events-auto"
            onClick={handlePlayPause}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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

        {/* Custom Control Overlay */}
        {isVideoAvailable && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls && isPlaying ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-auto">
              <motion.button
                onClick={handlePlayPause}
                className="bg-white/90 hover:bg-white text-navy rounded-full p-3 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" fill="currentColor" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                )}
              </motion.button>

              <motion.button
                onClick={handleMuteToggle}
                className="bg-white/90 hover:bg-white text-navy rounded-full p-3 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </motion.button>
            </div>
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
            Commercial Traffic Pattern Analysis
          </h4>
          <p className="font-montserrat-regular text-white/80 text-sm">
            Capturing hours of footage to show traffic patterns of commercial areas
          </p>
        </motion.div>

        {/* Status Indicator */}
        {isVideoAvailable && (
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: isPlaying ? (isMuted ? 1 : 0) : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-navy/80 text-white px-3 py-1 rounded-full text-xs font-montserrat-semibold backdrop-blur-sm">
              {!isPlaying ? "Click to play" : isMuted ? "Hover for sound controls" : ""}
            </div>
          </motion.div>
        )}
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