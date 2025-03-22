
import { useRef, useEffect, useState, ReactNode } from "react";

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
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  threshold = 0.2,
  animation = "fade-in"
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
    switch (animation) {
      case "fade-in":
        return { opacity: isVisible ? 1 : 0 };
      case "slide-from-left":
        return { 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateX(0)' : 'translateX(-20px)' 
        };
      case "slide-from-right":
        return { 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateX(0)' : 'translateX(20px)' 
        };
      case "scale-in":
        return { 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'scale(1)' : 'scale(0.98)' 
        };
      case "blur-in":
        return { 
          opacity: isVisible ? 1 : 0, 
          filter: isVisible ? 'blur(0)' : 'blur(5px)' 
        };
      default:
        return { opacity: isVisible ? 1 : 0 };
    }
  };

  // Calculate transition delay based on the delay prop
  const getTransitionStyle = () => {
    const baseTransition = 'opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out';
    return {
      transition: baseTransition,
      transitionDelay: `${delay}s`,
      willChange: 'opacity, transform, filter'
    };
  };

  return (
    <div 
      ref={sectionRef} 
      className={className}
      style={{ 
        ...getInitialStyles(),
        ...getTransitionStyle()
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
