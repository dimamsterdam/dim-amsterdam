
import { useState } from "react";
import { Smile, Zap, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ValuesSection = () => {
  const [heading, setHeading] = useState("Positief. Scherp. Betrokken.");
  const [description, setDescription] = useState("Een traject is geslaagd als gezamenlijke doelen helder zijn en spanningen op een positieve manier bespreekbaar worden gemaakt.");
  
  const [values, setValues] = useState([
    {
      title: "Positief",
      description: "Veranderen en ontwikkelen begint bij weten en waarderen wat goed gaat. Vanuit zelfvertrouwen ontstaat ruimte om ook kritisch te kijken naar wat beter kan en wat beter moet.",
      icon: Smile
    },
    {
      title: "Scherp",
      description: "Leren en ontwikkelen vraagt ander gedrag en het doorbreken van bestaande patronen. Met ruim 25 jaar ervaring weten wij spanningen snel te herkennen en effectief bespreekbaar te maken.",
      icon: Zap
    },
    {
      title: "Betrokken",
      description: "Wij werken aan ontwikkelingen waar we in geloven, met vooruitstrevende collega's en opdrachtgevers waar we een klik mee hebben. Dit geeft energie om ook weerbarstige processen te doorbreken.",
      icon: Heart
    }
  ]);

  const updateValueTitle = (index: number, newTitle: string) => {
    const updatedValues = [...values];
    updatedValues[index] = { ...updatedValues[index], title: newTitle };
    setValues(updatedValues);
  };

  const updateValueDescription = (index: number, newDescription: string) => {
    const updatedValues = [...values];
    updatedValues[index] = { ...updatedValues[index], description: newDescription };
    setValues(updatedValues);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <h2 
            className="text-3xl font-display font-bold mb-4"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setHeading(e.currentTarget.textContent || "")}
          >
            {heading}
          </h2>
          <p 
            className="text-gray-600"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setDescription(e.currentTarget.textContent || "")}
          >
            {description}
          </p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-stretch gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection 
                  key={index}
                  className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" 
                  animation="fade-in" 
                  delay={index * 0.1}
                >
                  <div className="flex">
                    <Icon className="h-5 w-5 text-[#F97316] flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 
                        className="text-gray-800 mb-2 font-bold"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => updateValueTitle(index, e.currentTarget.textContent || "")}
                      >
                        {value.title}
                      </h4>
                      <p 
                        className="text-gray-700"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => updateValueDescription(index, e.currentTarget.textContent || "")}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
