
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
}

const EnhancedTestimonialsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      quote: "DIM's cultural transformation program has been a game-changer for our organization. Our employee engagement scores have increased by 32% and we've seen tangible improvements in collaboration across departments.",
      author: "Sarah Johnson",
      role: "Chief People Officer",
      company: "TechVision Inc.",
      initials: "SJ",
      color: "bg-primary/20"
    },
    {
      quote: "Working with DIM has transformed how our leadership team operates. We're more aligned, more effective, and more purpose-driven than ever before. The impact on our business results has been remarkable.",
      author: "Michael Chen",
      role: "CEO",
      company: "Ascend Group",
      initials: "MC",
      color: "bg-emerald-500/20"
    },
    {
      quote: "The insights and frameworks DIM brought to our organization have fundamentally changed how we approach culture. They didn't just provide recommendations – they partnered with us every step of the way.",
      author: "Emma Williams",
      role: "VP of Organizational Development",
      company: "Horizon Healthcare",
      initials: "EW",
      color: "bg-indigo-500/20"
    },
    {
      quote: "The team at DIM helped us navigate a complex merger with empathy and precision. Their cultural integration roadmap became our north star, and we couldn't be happier with the results.",
      author: "Thomas Rodriguez",
      role: "Director of HR",
      company: "Global Systems",
      initials: "TR",
      color: "bg-purple-500/20"
    },
    {
      quote: "We were facing a retention crisis before DIM stepped in. Their diagnostic approach helped us identify blind spots in our culture, and their actionable recommendations have transformed our workplace.",
      author: "Aisha Patel",
      role: "COO",
      company: "Innovate Digital",
      initials: "AP",
      color: "bg-amber-500/20"
    },
    {
      quote: "The leadership development program DIM designed for us has had profound effects. Our managers are now better equipped to handle complex challenges and inspire their teams.",
      author: "David Andersson",
      role: "Director of Leadership Development",
      company: "Nordic Solutions",
      initials: "DA",
      color: "bg-blue-400/20"
    },
    {
      quote: "DIM's approach to culture transformation is unlike anything we've experienced before. They truly understand the human element of change and how to engage people at all levels of the organization.",
      author: "Olivia Martinez",
      role: "Head of People & Culture",
      company: "Global Finance",
      initials: "OM",
      color: "bg-rose-400/20"
    }
  ];

  // Auto rotate testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
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
            <div className="absolute top-6 left-6">
              <Quote className="h-12 w-12 text-[#F97316]" />
            </div>
            
            <div className="text-center pt-6">
              <blockquote className="text-xl md:text-2xl font-display text-gray-700 italic mb-8 max-w-3xl mx-auto">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className={`w-12 h-12 rounded-full ${testimonials[activeIndex].color} flex items-center justify-center text-primary font-bold text-sm mr-3 shadow-sm`}>
                  {testimonials[activeIndex].initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative elements to make the design pop */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#F97316]/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default EnhancedTestimonialsGallery;
