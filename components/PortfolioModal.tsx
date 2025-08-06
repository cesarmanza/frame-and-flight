import React, { useState } from 'react';
import { Button } from './ui/button';
import { X, Play, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FrameFlightLogo } from './FrameFlightLogo';

interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  location: string;
  date: string;
  image: string;
  videoThumbnail?: string;
  hasVideo: boolean;
  tags: string[];
  client: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectId?: number | null;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Luxury Hillside Estate",
    category: "Residential",
    description: "Aerial cinematography showcasing a premium hillside property with stunning valley views.",
    fullDescription: "This luxury hillside estate project featured comprehensive aerial cinematography and photography to showcase the property's commanding position and breathtaking valley views. Our drone work captured the home's architectural elegance from multiple angles, highlighting the infinity pool, terraced gardens, and seamless indoor-outdoor living spaces. The footage was used for high-end marketing materials and virtual tours.",
    location: "Beverly Hills, CA",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1635111031688-9b13c0125d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjByZWFsJTIwZXN0YXRlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU0NDM3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hasVideo: true,
    tags: ["Aerial Video", "4K Resolution", "Virtual Tour"],
    client: "Luxury Properties Inc."
  },
  {
    id: 2,
    title: "Modern Architectural Masterpiece",
    category: "Residential",
    description: "Contemporary home showcasing innovative design and sustainable features through aerial perspective.",
    fullDescription: "A striking contemporary residence featuring bold geometric lines and sustainable architecture. Our aerial work emphasized the home's integration with its natural surroundings, capturing the green roof systems, solar panels, and modern outdoor living spaces. The project included both photography and videography for architectural publications and real estate marketing.",
    location: "Malibu, CA",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1571191607086-068a11c2625d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGx1eHVyeSUyMGhvbWUlMjBhZXJpYWx8ZW58MXx8fHwxNzU0NDM3ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hasVideo: true,
    tags: ["Architectural Photography", "Sustainable Design", "Aerial Video"],
    client: "Green Architecture Studio"
  },
  {
    id: 3,
    title: "Downtown Corporate Complex",
    category: "Commercial",
    description: "Comprehensive aerial documentation of a new mixed-use development in the heart of downtown.",
    fullDescription: "This major commercial development project required extensive aerial documentation throughout various construction phases and upon completion. Our work captured the 40-story mixed-use complex's integration into the urban landscape, highlighting the retail spaces, office towers, and public plaza. The footage was used for investor presentations and marketing campaigns.",
    location: "Los Angeles, CA",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1724608625021-b2a2d74ff387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc1NDQzNzg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hasVideo: true,
    tags: ["Commercial Development", "Urban Planning", "3D Mapping"],
    client: "Metro Development Group"
  },
  {
    id: 4,
    title: "Seaside Resort & Marina",
    category: "Commercial",
    description: "Aerial showcase of a luxury waterfront resort featuring marina, pools, and oceanfront amenities.",
    fullDescription: "A spectacular waterfront resort project that required capturing both the luxury accommodations and the stunning natural setting. Our aerial work showcased the resort's marina, multiple pools, beachfront dining areas, and the relationship between the built environment and the pristine coastline. The footage was featured in tourism campaigns and luxury travel publications.",
    location: "Newport Beach, CA",
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1639187034917-aaf52ec982cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBhZXJpYWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTQ0Mzc4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hasVideo: true,
    tags: ["Resort Marketing", "Waterfront", "Tourism Photography"],
    client: "Coastal Hospitality Partners"
  },
  {
    id: 5,
    title: "Waterfront Estate Collection",
    category: "Residential",
    description: "Exclusive gated community featuring luxury waterfront homes and private dock access.",
    fullDescription: "An exclusive collection of waterfront estates requiring sophisticated aerial work to capture each property's unique character and the community's overall prestige. Our photography and videography highlighted the private docks, waterfront living spaces, and the seamless connection between luxury architecture and the natural waterscape. Used for high-end real estate marketing and lifestyle publications.",
    location: "Huntington Beach, CA",
    date: "August 2024",
    image: "https://images.unsplash.com/photo-1717940542724-be6baf2ae9a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZyb250JTIwcHJvcGVydHklMjBhZXJpYWx8ZW58MXx8fHwxNzU0NDM3ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hasVideo: true,
    tags: ["Waterfront Properties", "Gated Community", "Luxury Real Estate"],
    client: "Prestige Waterfront Developments"
  },
  {
    id: 6,
    title: "Mixed-Use Development Progress",
    category: "Construction",
    description: "Time-lapse documentation of a major mixed-use development from groundbreaking to completion.",
    fullDescription: "A comprehensive construction documentation project spanning 18 months, capturing the transformation of a vacant lot into a vibrant mixed-use development. Our regular aerial surveys provided progress tracking for stakeholders, while the time-lapse footage became a powerful marketing tool. The project included safety monitoring and 3D mapping for construction management.",
    location: "Santa Monica, CA",
    date: "July 2024",
    image: "https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NTQ0Mzc4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hasVideo: true,
    tags: ["Construction Monitoring", "Time-lapse", "3D Mapping"],
    client: "Urban Construction Partners"
  }
];

export function PortfolioModal({ isOpen, onClose, initialProjectId }: PortfolioModalProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [filter, setFilter] = useState<string>('All');

  // Effect to handle initial project selection
  React.useEffect(() => {
    if (initialProjectId && isOpen) {
      const project = portfolioProjects.find(p => p.id === initialProjectId);
      if (project) {
        setSelectedProject(project);
      }
    } else if (!initialProjectId && isOpen) {
      setSelectedProject(null);
    }
  }, [initialProjectId, isOpen]);

  const categories = ['All', 'Residential', 'Commercial', 'Construction'];
  
  const filteredProjects = filter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === filter);

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const handleBackToGrid = () => {
    setSelectedProject(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-xl max-w-7xl w-full max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-navy p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <FrameFlightLogo 
                  className="h-10 w-auto"
                  alt="Frame & Flight - Real Estate & Drone Photography Portfolio"
                  variant="white"
                />
                <div>
                  <h2 className="text-3xl font-montserrat-bold text-white">
                    {selectedProject ? selectedProject.title : 'Portfolio Gallery'}
                  </h2>
                  <p className="text-white/80 font-montserrat-regular mt-1">
                    {selectedProject ? 'Project Details' : 'Elevating Real Estate. Capturing the Impossible.'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {selectedProject && (
                  <Button
                    onClick={handleBackToGrid}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-montserrat-semibold"
                  >
                    ← Back to Gallery
                  </Button>
                )}
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full w-10 h-10"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              {selectedProject ? (
                // Project Detail View
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Image/Video */}
                    <div className="space-y-4">
                      <div className="relative group rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-96 object-cover"
                        />
                        {selectedProject.hasVideo && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                            <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-navy fill-current" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Project Tags */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-navy/10 text-navy font-montserrat-semibold text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-navy/70">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-montserrat-regular text-sm">{selectedProject.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-montserrat-regular text-sm">{selectedProject.location}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-xl font-montserrat-semibold text-navy">Category</h3>
                          <p className="font-montserrat-regular text-navy/80">{selectedProject.category}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-xl font-montserrat-semibold text-navy">Client</h3>
                          <p className="font-montserrat-regular text-navy/80">{selectedProject.client}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-montserrat-semibold text-navy">Project Description</h3>
                        <p className="font-montserrat-regular text-navy/80 leading-relaxed">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <div className="flex space-x-4">
                        {selectedProject.hasVideo && (
                          <Button className="bg-navy hover:bg-navy/90 text-white font-montserrat-semibold flex items-center space-x-2">
                            <Play className="w-4 h-4" />
                            <span>Watch Video</span>
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          className="border-navy text-navy hover:bg-navy hover:text-white font-montserrat-semibold flex items-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Project</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Portfolio Grid View
                <div className="p-6">
                  {/* Filter Buttons */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        onClick={() => setFilter(category)}
                        variant={filter === category ? "default" : "outline"}
                        className={`font-montserrat-semibold ${
                          filter === category
                            ? "bg-navy text-white"
                            : "border-navy text-navy hover:bg-navy hover:text-white"
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        onClick={() => handleProjectClick(project)}
                      >
                        <div className="relative">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {project.hasVideo && (
                            <div className="absolute top-3 right-3 bg-black/60 rounded-full p-2">
                              <Play className="w-4 h-4 text-white fill-current" />
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-navy text-white text-xs font-montserrat-semibold rounded">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-4 space-y-3">
                          <h3 className="font-montserrat-bold text-navy group-hover:text-navy/80 transition-colors">
                            {project.title}
                          </h3>
                          <p className="font-montserrat-regular text-navy/70 text-sm line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-navy/60">
                            <span className="font-montserrat-regular">{project.location}</span>
                            <span className="font-montserrat-regular">{project.date}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}