
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const WhatWeDoSection = () => {
  const [heading, setHeading] = useState("Wat we doen");
  const [subheading, setSubheading] = useState("Met oog voor wat goed gaat, werken we samen aan wat beter kan.");
  
  const [services, setServices] = useState([
    {
      title: "Organisatieontwikkeling",
      description: "Een integrale aanpak en meervoudig perspectief zijn kenmerkend voor onze werkwijze. Dankzij interventies vanuit verschillende invalshoeken realiseren we wendbaarheid en langdurig resultaat.",
      href: "/aanbod/organisatieontwikkeling",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Leiderschaps- & Teamontwikkeling",
      description: "Op basis van beproefde leiderschapsconcepten en ruime kennis en ervaring in het publieke domein verzorgen wij maatwerk leiderschapsprogramma's gericht op concreet resultaat, intervisies en teamontwikkeling.",
      href: "/aanbod/leiderschapsontwikkeling",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Executive coaching",
      description: "Effectiever werken met meer plezier en vanuit meer ontspanning? Samen onderzoeken we welke patronen helpend zijn en waar ruimte ligt voor ontwikkeling.",
      href: "/aanbod/executive-coaching",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ]);

  const updateServiceTitle = (index: number, newTitle: string) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], title: newTitle };
    setServices(updatedServices);
  };

  const updateServiceDescription = (index: number, newDescription: string) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], description: newDescription };
    setServices(updatedServices);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16" animation="fade-in" preserveEvents={true}>
          <h2 
            className="text-3xl font-display font-bold mb-4"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setHeading(e.currentTarget.textContent || "")}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setSubheading(e.currentTarget.textContent || "")}
            dangerouslySetInnerHTML={{ __html: subheading }}
          />
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              className="overflow-hidden rounded-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-sm" 
              animation="fade-in" 
              delay={index * 0.1 + 0.1}
              preserveEvents={true}
            >
              <Link to={service.href} className="block h-full">
                <div className="flex flex-col h-full">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 
                      className="text-xl font-display font-semibold mb-3"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => updateServiceTitle(index, e.currentTarget.textContent || "")}
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                    <p 
                      className="text-gray-600"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => updateServiceDescription(index, e.currentTarget.textContent || "")}
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
