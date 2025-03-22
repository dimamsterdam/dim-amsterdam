
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const NewsletterSection = () => {
  const [heading, setHeading] = useState("Meer weten over DIM?");
  const [description, setDescription] = useState("We versturen een nieuwsbrief met kennis en inzichten over verandering in moedige organisaties.");
  const [ctaText, setCtaText] = useState("Schrijf je in");

  const handleHeadingChange = (e: React.FocusEvent<HTMLHeadingElement>) => {
    setHeading(e.currentTarget.textContent || "");
  };

  const handleDescriptionChange = (e: React.FocusEvent<HTMLParagraphElement>) => {
    setDescription(e.currentTarget.textContent || "");
  };

  const handleCtaTextChange = (e: React.FocusEvent<HTMLSpanElement>) => {
    setCtaText(e.currentTarget.textContent || "");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-xl mx-auto text-center" animation="fade-in" preserveEvents={true}>
          <h2 
            className="text-3xl font-display font-bold mb-4"
            contentEditable
            suppressContentEditableWarning
            onBlur={handleHeadingChange}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p 
            className="text-gray-600 mb-8"
            contentEditable
            suppressContentEditableWarning
            onBlur={handleDescriptionChange}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Link to="/contact" className="btn-primary">
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={handleCtaTextChange}
              dangerouslySetInnerHTML={{ __html: ctaText }}
            />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsletterSection;
