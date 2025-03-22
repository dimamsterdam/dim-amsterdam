
import { Smile, Zap, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { valuesContent } from "@/content/heroContent";

const ValuesSection = () => {
  const icons = [
    <Smile className="h-5 w-5 text-[#F97316] flex-shrink-0 mr-3 mt-1" />,
    <Zap className="h-5 w-5 text-[#F97316] flex-shrink-0 mr-3 mt-1" />,
    <Heart className="h-5 w-5 text-[#F97316] flex-shrink-0 mr-3 mt-1" />
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">{valuesContent.heading}</h2>
          <p className="text-gray-600">{valuesContent.description}</p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-stretch gap-6">
            {valuesContent.values.map((value, index) => (
              <AnimatedSection key={index} className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" animation="fade-in" delay={index * 0.1}>
                <div className="flex">
                  {icons[index]}
                  <div>
                    <h4 className="text-gray-800 mb-2 font-bold">{value.title}</h4>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
