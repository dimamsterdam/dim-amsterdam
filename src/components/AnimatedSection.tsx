
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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before setting visible to ensure DOM is ready
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, 50);
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

  // Define initial and animated styles based on animation type
  const getAnimationStyles = () => {
    if (!isVisible && !hasAnimated) {
      switch (animation) {
        case "fade-in":
          return "opacity-0";
        case "slide-from-left":
          return "opacity-0 translate-x-[-30px]";
        case "slide-from-right":
          return "opacity-0 translate-x-[30px]";
        case "scale-in":
          return "opacity-0 scale-95";
        case "blur-in":
          return "opacity-0 blur-[10px]";
        default:
          return "opacity-0";
      }
    }
    
    return "";
  };

  const animationClass = `animate-${animation}`;

  return (
    <div 
      ref={sectionRef} 
      className={`
        ${className} 
        transition-all duration-700 ease-out
        ${isVisible ? animationClass : getAnimationStyles()}
      `}
      style={{ 
        animationDelay: isVisible ? `${delay}s` : "0s",
        willChange: "opacity, transform"
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
