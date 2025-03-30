
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { newsletterContent } from "@/content/heroContent";

const NewsletterSection = () => {
  return (
    <section className="py-16 hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-xl mx-auto text-center" animation="fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">{newsletterContent.heading}</h2>
          <p className="text-gray-600 mb-8">
            {newsletterContent.description}
          </p>
          <Link to="/contact" className="btn-primary">
            {newsletterContent.cta}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsletterSection;
