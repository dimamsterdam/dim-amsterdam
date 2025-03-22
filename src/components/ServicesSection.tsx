
import { useState } from "react";
import { ChevronRight, BarChart2, Users, UserCog } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    title: "Leiderschaps- & Teamontwikkeling",
    description: "Rust uw leiders en teams uit met de mindsets, vaardigheden en gedragingen die nodig zijn om positieve verandering te stimuleren.",
    icon: <Users className="w-6 h-6" />,
    link: "/diensten/leiderschapsontwikkeling",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    title: "Executive coaching",
    description: "Persoonlijke begeleiding voor leidinggevenden om effectiever te opereren en organisatiedoelen te realiseren.",
    icon: <UserCog className="w-6 h-6" />,
    link: "/diensten/executive-coaching",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  }];

  return <section className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">
            Onze Diensten
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Dit is wat we doen</h2>
          <p className="text-lg text-muted-foreground">
            Onze geïntegreerde aanpak richt zich op het volledige spectrum van uitdagingen op het gebied van cultuur en leiderschap in moderne organisaties.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => 
            <AnimatedSection key={index} delay={index * 0.1} animation="slide-from-right" className="h-full">
              <Link to={service.link} className="group block h-full" onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
                <div className={`h-full rounded-xl overflow-hidden transition-all duration-300 border ${hoverIndex === index ? 'border-primary shadow-lg translate-y-[-4px]' : 'border-border hover:border-primary/50'}`}>
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="p-8">
                    <div className="mb-4 flex justify-between items-start">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        {service.icon}
                      </div>
                      <ChevronRight className={`transform transition-transform duration-300 text-primary ${hoverIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
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
