import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Play, Video } from 'lucide-react';
import { useState } from 'react';
import { videoItems, getYouTubeEmbedUrl, getYouTubeThumbnail, categoryColors, trackVideoInteraction, type VideoGalleryItem } from './VideoGalleryConfig';

interface PortfolioSectionProps {
  onOpenPortfolio: () => void;
  onOpenSpecificProject: (projectId: number) => void;
}

// Traditional image-based portfolio items
const imagePortfolioItems = [
  {
    id: 101,
    title: "Luxury Hillside Estate",
    image: "https://images.unsplash.com/photo-1635111031688-9b13c0125d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjByZWFsJTIwZXN0YXRlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU0NDM3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Residential",
    type: "image" as const
  },
  {
    id: 102,
    title: "Modern Architectural Masterpiece", 
    image: "https://images.unsplash.com/photo-1571191607086-068a11c2625d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGx1eHVyeSUyMGhvbWUlMjBhZXJpYWx8ZW58MXx8fHwxNzU0NDM3ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Residential",
    type: "image" as const
  },
  {
    id: 103,
    title: "Downtown Corporate Complex",
    image: "https://images.unsplash.com/photo-1724608625021-b2a2d74ff387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc1NDQzNzg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Commercial",
    type: "image" as const
  }
];

// Combine image and video items
const getAllPortfolioItems = () => {
  const videoItemsWithType = videoItems.map(item => ({
    ...item,
    type: "video" as const,
    image: item.customThumbnail || getYouTubeThumbnail(item.youtubeId)
  }));
  
  return [...imagePortfolioItems, ...videoItemsWithType];
};

interface VideoPreviewProps {
  videoItem: VideoGalleryItem;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

function VideoPreview({ videoItem, isHovered, onHover, onClick }: VideoPreviewProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div 
      className="relative w-full h-64 overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        onHover(true);
        trackVideoInteraction('hover', videoItem.youtubeId, videoItem.title);
      }}
      onMouseLeave={() => onHover(false)}
      onClick={() => {
        onClick();
        trackVideoInteraction('click', videoItem.youtubeId, videoItem.title);
      }}
    >
      {/* YouTube Embed - Hidden by default, shown on hover */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isHovered && (
          <iframe
            src={getYouTubeEmbedUrl(videoItem.youtubeId, true)}
            className="w-full h-full pointer-events-auto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={videoItem.title}
            onLoad={() => setVideoLoaded(true)}
          />
        )}
      </motion.div>

      {/* Thumbnail Image */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{ opacity: isHovered ? 0.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <ImageWithFallback
          src={videoItem.customThumbnail || getYouTubeThumbnail(videoItem.youtubeId)}
          alt={videoItem.title}
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <motion.div
            className="bg-white/90 rounded-full p-4 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Play className="w-8 h-8 text-navy fill-current" />
          </motion.div>
        </div>

        {/* Video Category Badge */}
        <div className="absolute top-3 right-3">
          <div className={`px-2 py-1 rounded text-xs font-montserrat-semibold text-white flex items-center gap-1 ${categoryColors[videoItem.category]}`}>
            <Video className="w-3 h-3" />
            {videoItem.category}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function PortfolioSection({ onOpenPortfolio, onOpenSpecificProject }: PortfolioSectionProps) {
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null);
  
  const allItems = getAllPortfolioItems();

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
          {allItems.map((item, index) => (
            <motion.div 
              key={`${item.type}-${item.id}`}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              layoutId={`portfolio-item-${item.type}-${item.id}`}
              onClick={() => onOpenSpecificProject(item.id)}
            >
              <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                {item.type === 'video' ? (
                  <VideoPreview
                    videoItem={item as VideoGalleryItem & { type: 'video'; image: string }}
                    isHovered={hoveredVideoId === item.id}
                    onHover={(hovered) => setHoveredVideoId(hovered ? item.id : null)}
                    onClick={() => onOpenSpecificProject(item.id)}
                  />
                ) : (
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
                )}
                
                {/* Hover overlay with animated content - Hidden for videos to allow video interaction */}
                {item.type !== 'video' && (
                  <motion.div
                    className="absolute inset-0 bg-navy flex items-center justify-center z-30"
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
                      {item.type === 'video' && ' • Video'}
                    </motion.p>
                    {item.type === 'video' && item.description && (
                      <motion.p 
                        className="text-xs font-montserrat-regular opacity-75 mt-1"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </motion.div>
                  </motion.div>
                )}
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

        {/* Video Configuration Guide */}
        <motion.div 
          className="mt-16 bg-navy/5 rounded-lg p-6 border border-navy/10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="font-montserrat-semibold text-navy mb-3 flex items-center gap-2">
            <Video className="w-5 h-5" />
            Video Gallery Management
          </h4>
          <p className="font-montserrat-regular text-navy/70 text-sm leading-relaxed">
            <strong>To add your YouTube videos:</strong> Open <code className="bg-navy/10 px-2 py-1 rounded text-xs">/components/VideoGalleryConfig.tsx</code> 
            and replace the example video IDs with your actual YouTube video IDs. Videos will automatically appear in the portfolio with hover-to-play functionality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}