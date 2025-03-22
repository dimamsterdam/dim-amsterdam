
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const NewsletterSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-xl mx-auto text-center" animation="fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">Meer weten over DIM?</h2>
          <p className="text-gray-600 mb-8">
            We versturen een nieuwsbrief met kennis en inzichten over verandering in moedige organisaties.
          </p>
          <Link to="/contact" className="btn-primary">
            Schrijf je in
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsletterSection;
