
import AnimatedSection from "@/components/AnimatedSection";
import EnhancedTestimonialsGallery from "@/components/EnhancedTestimonialsGallery";

const MinimalistTestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e3eff6] to-[#f0f7fc] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="fade-in" className="max-w-5xl mx-auto">
          <EnhancedTestimonialsGallery />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MinimalistTestimonialsSection;
