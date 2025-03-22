
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const NewsletterSection = () => {
  const [heading, setHeading] = useState("Meer weten over DIM?");
  const [description, setDescription] = useState("We versturen een nieuwsbrief met kennis en inzichten over verandering in moedige organisaties.");
  const [ctaText, setCtaText] = useState("Schrijf je in");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-xl mx-auto text-center" animation="fade-in">
          <h2 
            className="text-3xl font-display font-bold mb-4"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setHeading(e.currentTarget.textContent || "")}
          >
            {heading}
          </h2>
          <p 
            className="text-gray-600 mb-8"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setDescription(e.currentTarget.textContent || "")}
          >
            {description}
          </p>
          <Link to="/contact" className="btn-primary">
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setCtaText(e.currentTarget.textContent || "")}
            >
              {ctaText}
            </span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsletterSection;
