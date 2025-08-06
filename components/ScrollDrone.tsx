import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DroneIcon } from './DroneIcon';

export function ScrollDrone() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dronePosition, setDronePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          try {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrolled / Math.max(maxScroll, 1), 1);
            
            setScrollProgress(progress);
            setIsVisible(scrolled > window.innerHeight * 0.1);

            // Calculate drone position
            const droneX = -100 + (progress * (window.innerWidth + 200));
            const droneY = 100 + Math.sin(progress * Math.PI * 2.5) * 60;
            
            setDronePosition({ x: droneX, y: droneY });
          } catch (error) {
            console.warn('Scroll handler error:', error);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Simple Wind Streaks */}
      <div className="fixed inset-0 pointer-events-none z-39">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            className="absolute"
            style={{
              left: `${dronePosition.x - 40 - (i * 15)}px`,
              top: `${dronePosition.y + (i * 3) - 8}px`,
              width: `${30 - i * 3}px`,
              height: '2px',
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(135,206,250,${0.6 - i * 0.1}) 30%, 
                rgba(173,216,230,${0.8 - i * 0.12}) 60%, 
                rgba(100,149,237,${0.4 - i * 0.08}) 90%, 
                transparent 100%)`,
              borderRadius: '1px',
            }}
            animate={{
              scaleX: [0.5, 1, 0.7],
              opacity: [0.3, 0.7, 0.2],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Simple Propeller Effects */}
      <div className="fixed inset-0 pointer-events-none z-38">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`wash-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${dronePosition.x + (i % 2 === 0 ? -15 : 15)}px`,
              top: `${dronePosition.y + (i < 2 ? -15 : 15)}px`,
              width: '20px',
              height: '20px',
              background: `radial-gradient(circle, 
                transparent 50%, 
                rgba(173,216,230,0.2) 70%, 
                transparent 100%)`,
            }}
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Drone */}
      <motion.div
        className="fixed z-50 pointer-events-none"
        style={{
          left: `${dronePosition.x}px`,
          top: `${dronePosition.y}px`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: Math.sin(scrollProgress * Math.PI * 3) * 5
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <div className="relative">
          <DroneIcon 
            className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" 
            animate={true}
          />
          
          {/* Simple Drone Glow */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(135,206,250,0.2) 0%, transparent 70%)',
              width: '150%',
              height: '150%',
              left: '-25%',
              top: '-25%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </>
  );
}