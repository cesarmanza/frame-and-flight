import { motion } from 'motion/react';

interface DroneIconProps {
  className?: string;
  animate?: boolean;
}

export function DroneIcon({ className = "w-12 h-12", animate = false }: DroneIconProps) {
  return (
    <motion.svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: 'transparent' }}
      animate={animate ? {
        rotate: [0, 1, -1, 0],
        y: [0, -1, 1, 0]
      } : {}}
      transition={animate ? {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    >
      {/* Main Drone Body */}
      <g>
        {/* Body Base */}
        <path
          d="M25 35 L55 35 L58 40 L55 45 L25 45 L22 40 Z"
          fill="url(#silverGradient)"
          stroke="url(#silverStroke)"
          strokeWidth="0.5"
        />
        
        {/* Body Top Detail */}
        <rect
          x="27"
          y="36"
          width="26"
          height="8"
          rx="2"
          fill="url(#darkSilverGradient)"
          stroke="rgba(180,180,180,0.6)"
          strokeWidth="0.3"
        />
        
        {/* Camera Gimbal Housing */}
        <ellipse
          cx="40"
          cy="45"
          rx="6"
          ry="4"
          fill="url(#blackGradient)"
          stroke="rgba(100,100,100,0.8)"
          strokeWidth="0.5"
        />
        
        {/* Camera Lens */}
        <circle
          cx="40"
          cy="45"
          r="3"
          fill="url(#lensGradient)"
          stroke="rgba(50,50,50,0.9)"
          strokeWidth="0.3"
        />
        
        {/* Lens Reflection */}
        <circle
          cx="39"
          cy="44"
          r="1"
          fill="rgba(255,255,255,0.4)"
        />
      </g>

      {/* Motor Arms */}
      <g stroke="url(#armGradient)" strokeWidth="3" strokeLinecap="round">
        <line x1="30" y1="35" x2="15" y2="20" />
        <line x1="50" y1="35" x2="65" y2="20" />
        <line x1="30" y1="45" x2="15" y2="60" />
        <line x1="50" y1="45" x2="65" y2="60" />
      </g>

      {/* Motors */}
      <g>
        <circle cx="15" cy="20" r="4" fill="url(#motorGradient)" stroke="rgba(120,120,120,0.8)" strokeWidth="0.5"/>
        <circle cx="15" cy="20" r="2.5" fill="url(#motorCenterGradient)"/>
        <circle cx="65" cy="20" r="4" fill="url(#motorGradient)" stroke="rgba(120,120,120,0.8)" strokeWidth="0.5"/>
        <circle cx="65" cy="20" r="2.5" fill="url(#motorCenterGradient)"/>
        <circle cx="15" cy="60" r="4" fill="url(#motorGradient)" stroke="rgba(120,120,120,0.8)" strokeWidth="0.5"/>
        <circle cx="15" cy="60" r="2.5" fill="url(#motorCenterGradient)"/>
        <circle cx="65" cy="60" r="4" fill="url(#motorGradient)" stroke="rgba(120,120,120,0.8)" strokeWidth="0.5"/>
        <circle cx="65" cy="60" r="2.5" fill="url(#motorCenterGradient)"/>
      </g>

      {/* Spinning Propellers - Simplified */}
      <g>
        {/* Front Left Propeller */}
        <motion.g
          animate={animate ? { rotate: [0, 360] } : {}}
          transition={animate ? { duration: 0.3, repeat: Infinity, ease: "linear" } : {}}
          style={{ transformOrigin: "15px 20px" }}
        >
          <ellipse cx="15" cy="20" rx="8" ry="1.5" fill="rgba(200,200,200,0.7)" />
          <ellipse cx="15" cy="20" rx="1.5" ry="8" fill="rgba(200,200,200,0.7)" />
        </motion.g>
        
        {/* Front Right Propeller */}
        <motion.g
          animate={animate ? { rotate: [0, -360] } : {}}
          transition={animate ? { duration: 0.3, repeat: Infinity, ease: "linear" } : {}}
          style={{ transformOrigin: "65px 20px" }}
        >
          <ellipse cx="65" cy="20" rx="8" ry="1.5" fill="rgba(200,200,200,0.7)" />
          <ellipse cx="65" cy="20" rx="1.5" ry="8" fill="rgba(200,200,200,0.7)" />
        </motion.g>
        
        {/* Rear Left Propeller */}
        <motion.g
          animate={animate ? { rotate: [0, 360] } : {}}
          transition={animate ? { duration: 0.3, repeat: Infinity, ease: "linear" } : {}}
          style={{ transformOrigin: "15px 60px" }}
        >
          <ellipse cx="15" cy="60" rx="8" ry="1.5" fill="rgba(200,200,200,0.7)" />
          <ellipse cx="15" cy="60" rx="1.5" ry="8" fill="rgba(200,200,200,0.7)" />
        </motion.g>
        
        {/* Rear Right Propeller */}
        <motion.g
          animate={animate ? { rotate: [0, -360] } : {}}
          transition={animate ? { duration: 0.3, repeat: Infinity, ease: "linear" } : {}}
          style={{ transformOrigin: "65px 60px" }}
        >
          <ellipse cx="65" cy="60" rx="8" ry="1.5" fill="rgba(200,200,200,0.7)" />
          <ellipse cx="65" cy="60" rx="1.5" ry="8" fill="rgba(200,200,200,0.7)" />
        </motion.g>
      </g>

      {/* Landing Gear */}
      <g stroke="url(#gearGradient)" strokeWidth="1.5" strokeLinecap="round">
        <line x1="32" y1="45" x2="32" y2="50" />
        <line x1="48" y1="45" x2="48" y2="50" />
        <line x1="30" y1="50" x2="50" y2="50" />
        <circle cx="30" cy="50" r="1.5" fill="url(#motorGradient)" />
        <circle cx="50" cy="50" r="1.5" fill="url(#motorGradient)" />
      </g>

      {/* Status LED */}
      <motion.circle
        cx="40"
        cy="37"
        r="1"
        fill="#00ff00"
        animate={animate ? { 
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8]
        } : {}}
        transition={animate ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
      />

      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8f9fa" />
          <stop offset="50%" stopColor="#e9ecef" />
          <stop offset="100%" stopColor="#d6dbdf" />
        </linearGradient>
        
        <linearGradient id="darkSilverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dee2e6" />
          <stop offset="50%" stopColor="#adb5bd" />
          <stop offset="100%" stopColor="#868e96" />
        </linearGradient>
        
        <linearGradient id="silverStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#adb5bd" />
          <stop offset="100%" stopColor="#6c757d" />
        </linearGradient>
        
        <linearGradient id="blackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#495057" />
          <stop offset="100%" stopColor="#212529" />
        </linearGradient>
        
        <radialGradient id="lensGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="70%" stopColor="#000000" />
          <stop offset="100%" stopColor="#333333" />
        </radialGradient>
        
        <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1f3f4" />
          <stop offset="50%" stopColor="#dadce0" />
          <stop offset="100%" stopColor="#bdc1c6" />
        </linearGradient>
        
        <radialGradient id="motorGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f8f9fa" />
          <stop offset="50%" stopColor="#e9ecef" />
          <stop offset="100%" stopColor="#adb5bd" />
        </radialGradient>
        
        <radialGradient id="motorCenterGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6c757d" />
          <stop offset="100%" stopColor="#495057" />
        </radialGradient>
        
        <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ced4da" />
          <stop offset="100%" stopColor="#adb5bd" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}