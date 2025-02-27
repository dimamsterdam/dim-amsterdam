
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
    },
    {
      quote: "Working with DIM has transformed how our leadership team operates. We're more aligned, more effective, and more purpose-driven than ever before. The impact on our business results has been remarkable.",
      author: "Michael Chen",
      role: "CEO",
      company: "Ascend Group"
    },
    {
      quote: "The insights and frameworks DIM brought to our organization have fundamentally changed how we approach culture. They didn't just provide recommendations – they partnered with us every step of the way.",
      author: "Emma Williams",
      role: "VP of Organizational Development",
      company: "Horizon Healthcare"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay functionality
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

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Resume autoplay when hover ends
  const resumeAutoplay = () => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 8000);
    }
  };

  return (
    <section className="section-padding bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
        
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-16" animation="blur-in">
          <span className="inline-block text-sm px-3 py-1 rounded-full bg-primary/20 text-primary-foreground font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Transformative results from our partnerships
          </h2>
          <p className="text-lg text-gray-300">
            Hear directly from our clients about the impact of our work on their organizations.
          </p>
        </AnimatedSection>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10">
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-primary/60" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center text-white font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-300">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-500 hover:bg-gray-400'
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
