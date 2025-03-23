
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
}

interface SimpleTestimonialBlockProps {
  testimonials: Testimonial[];
}

const SimpleTestimonialBlock: React.FC<SimpleTestimonialBlockProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-8 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100 relative z-10"
          >
            <div className="text-center py-6">
              <div className="flex items-start justify-center mb-4">
                <Quote className="h-8 w-8 text-[#F97316] mr-2 flex-shrink-0 mt-1" />
                <blockquote className="text-base md:text-lg font-display text-gray-700 italic mb-6 text-left max-w-3xl">
                  {testimonials[activeIndex].quote}
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              onClick={() => goToTestimonial(index)} 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Go to testimonial ${index + 1}`} 
            />
          ))}
        </div>
      </div>
      
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default SimpleTestimonialBlock;
