import { useState, useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "DIM's cultural transformation program has been a game-changer for our organization. Our employee engagement scores have increased by 32% and we've seen tangible improvements in collaboration across departments.",
      author: "Sarah Johnson",
      role: "Chief People Officer",
      company: "TechVision Inc."
    }, {
      quote: "Working with DIM has transformed how our leadership team operates. We're more aligned, more effective, and more purpose-driven than ever before. The impact on our business results has been remarkable.",
      author: "Michael Chen",
      role: "CEO",
      company: "Ascend Group"
    }, {
      quote: "The insights and frameworks DIM brought to our organization have fundamentally changed how we approach culture. They didn't just provide recommendations – they partnered with us every step of the way.",
      author: "Emma Williams",
      role: "VP of Organizational Development",
      company: "Horizon Healthcare"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const resumeAutoplay = () => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 8000);
    }
  };

  return (
    <section className="py-6 md:py-8 overflow-hidden relative bg-[#e3eff6] text-gray-700">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-t from-purple-800/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-white/10 blur-3xl"></div>
        
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-4" animation="fade-in">
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium mb-2">Opdrachtgevers over DIM</span>
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{
              transform: `translateX(-${activeIndex * 100}%)`
            }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-white/50 shadow-sm">
                    <div className="mb-2">
                      <svg className="w-8 h-8 text-primary/70" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <blockquote className="text-lg md:text-xl font-medium mb-3 leading-relaxed text-gray-700 relative" contentEditable>
                      <span className="relative z-10">"{testimonial.quote}"</span>
                      <div className="absolute -left-6 -top-6 w-12 h-12 bg-primary/10 rounded-full opacity-30 -z-10"></div>
                    </blockquote>
                    <div className="flex items-center">
                      <div className="mr-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-700">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-3 space-x-1">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToTestimonial(index)} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-primary w-6' : 'bg-primary/50 hover:bg-primary/70'
                }`} 
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
