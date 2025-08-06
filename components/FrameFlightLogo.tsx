import { ImageWithFallback } from './figma/ImageWithFallback';

interface FrameFlightLogoProps {
  className?: string;
  alt?: string;
  variant?: 'default' | 'white' | 'navy';
}

export function FrameFlightLogo({ 
  className = "h-12 w-auto", 
  alt = "Frame & Flight - Premier Real Estate & Drone Photography in Austin, TX",
  variant = 'default'
}: FrameFlightLogoProps) {
  const getLogoClasses = () => {
    switch (variant) {
      case 'white':
        return `${className} brightness-0 invert`;
      case 'navy':
        return `${className} brightness-0`;
      default:
        return className;
    }
  };

  const getTextClasses = () => {
    switch (variant) {
      case 'white':
        return 'text-white';
      case 'navy':
        return 'text-navy';
      default:
        return 'text-navy';
    }
  };

  return (
    <div className="relative">
      <ImageWithFallback
        src="/frame-flight-logo.png"
        alt={alt}
        className={getLogoClasses()}
        fallback={
          <div className={`${className} flex items-center justify-center ${getTextClasses()} font-montserrat-bold text-lg`}>
            Frame & Flight
          </div>
        }
      />
    </div>
  );
}