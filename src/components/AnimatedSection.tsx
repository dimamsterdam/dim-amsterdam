
import { useRef, useEffect, useState, ReactNode, CSSProperties } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: 
    | "fade-in" 
    | "slide-from-left" 
    | "slide-from-right" 
    | "scale-in"
    | "blur-in";
  preserveEvents?: boolean;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  threshold = 0.2,
  animation = "fade-in",
  preserveEvents = true
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Set a small timeout to ensure smooth transition
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Define the initial styles based on animation type
  const getInitialStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-in":
          return { opacity: 0 };
        case "slide-from-left":
          return { opacity: 0, transform: 'translateX(-20px)' };
        case "slide-from-right":
          return { opacity: 0, transform: 'translateX(20px)' };
        case "scale-in":
          return { opacity: 0, transform: 'scale(0.98)' };
        case "blur-in":
          return { opacity: 0, filter: 'blur(5px)' };
        default:
          return { opacity: 0 };
      }
    }
    return {};
  };

  // Calculate transition styles
  const getTransitionStyle = (): CSSProperties => {
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible 
        ? 'translateX(0) scale(1)' 
        : getInitialStyles().transform || 'translateX(0) scale(1)',
      filter: isVisible ? 'blur(0)' : getInitialStyles().filter || 'blur(0)',
      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out',
      transitionDelay: `${delay}s`,
      willChange: 'opacity, transform, filter',
      pointerEvents: (!isVisible && !preserveEvents) ? 'none' as const : 'auto' as const
    };
  };

  return (
    <div 
      ref={sectionRef} 
      className={className}
      style={getTransitionStyle()}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
