
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { servicesContent } from "@/content/heroContent";
import { Card, CardContent } from "@/components/ui/card";

const WhatWeDoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16" animation="fade-in">
          <h2 className="text-3xl font-bold mb-4">{servicesContent.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{servicesContent.subheading}</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesContent.services.map((service, index) => (
            <AnimatedSection 
              key={index}
              className="overflow-hidden" 
              animation="fade-in" 
              delay={index * 0.1 + 0.1}
            >
              <Link 
                to={service.href} 
                className="block h-full"
              >
                <Card className="h-full flex flex-col cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-sm hover:translate-y-[-4px]">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <span className="text-primary text-sm font-medium">Lees meer</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
