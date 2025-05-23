
import { useState } from "react";
import { ChevronRight, BarChart2, Users, UserCog } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  image: string;
}

const ServicesSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  const services: Service[] = [{
    title: "Organisatie-ontwikkeling",
    description: "Creëer een doelgerichte bedrijfscultuur die aansluit bij uw strategie en waarden voor duurzame prestaties.",
    icon: <BarChart2 className="w-6 h-6" />,
    link: "/diensten/organisatieontwikkeling",
    image: "/lovable-uploads/448a28ea-2320-42a6-8b62-469baca49123.png"
  }, {
    title: "Leiderschaps- & Teamontwikkeling",
    description: "Rust uw leiders en teams uit met de mindsets, vaardigheden en gedragingen die nodig zijn om positieve verandering te stimuleren.",
    icon: <Users className="w-6 h-6" />,
    link: "/diensten/leiderschapsontwikkeling",
    image: "/lovable-uploads/afd3cda5-e0a3-44fb-a14b-769eea990559.png"
  }, {
    title: "Executive coaching",
    description: "Persoonlijke begeleiding voor leidinggevenden om effectiever te opereren en organisatiedoelen te realiseren.",
    icon: <UserCog className="w-6 h-6" />,
    link: "/diensten/executive-coaching",
    image: "/lovable-uploads/fc84cb8c-6977-4be5-8895-a96f495b7790.png"
  }];

  return <section className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">
            Onze Diensten
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" contentEditable>Dit is wat we doen</h2>
          <p className="text-lg text-muted-foreground" contentEditable>
            Onze geïntegreerde aanpak richt zich op het volledige spectrum van uitdagingen op het gebied van cultuur en leiderschap in moderne organisaties.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => 
            <AnimatedSection key={index} delay={index * 0.1} animation="slide-from-right" className="h-full">
              <Link to={service.link} className="block h-full cursor-pointer">
                <div 
                  className={`rounded-xl overflow-hidden transition-all duration-300 border flex flex-col h-full ${hoverIndex === index ? 'border-primary shadow-lg translate-y-[-4px]' : 'border-border hover:border-primary/50'}`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full"
                      contentEditable
                    />
                  </AspectRatio>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4 flex justify-between items-start">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        {service.icon}
                      </div>
                      <ChevronRight className={`transform transition-transform duration-300 text-primary ${hoverIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3 hover:text-primary transition-colors" contentEditable>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6" contentEditable>{service.description}</p>
                    
                    <div className="mt-auto pt-4">
                      <div className="w-full flex justify-between items-center group">
                        <span contentEditable className="text-primary">Lees meer</span>
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          )}
        </div>
        
        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <Link to="/diensten" className="btn-primary">
            Ontdek Al Onze Diensten
          </Link>
        </AnimatedSection>
      </div>
    </section>;
};

export default ServicesSection;
