
import AnimatedSection from "@/components/AnimatedSection";
import EnhancedTestimonialsGallery from "@/components/EnhancedTestimonialsGallery";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MinimalistTestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e3eff6] to-[#f0f7fc] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex justify-center mb-8">
          <Link to="/referenties" className="group flex items-center gap-2 transition-colors hover:text-primary">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center" contentEditable>
              Wat onze klanten zeggen
            </h2>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <AnimatedSection animation="fade-in" className="max-w-5xl mx-auto">
          <EnhancedTestimonialsGallery />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MinimalistTestimonialsSection;
