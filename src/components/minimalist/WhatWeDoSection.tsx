
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { servicesContent } from "@/content/heroContent";

const WhatWeDoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16" animation="fade-in">
          <h2 className="text-3xl font-display font-bold mb-4" contentEditable>{servicesContent.heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" contentEditable>{servicesContent.subheading}</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesContent.services.map((service, index) => (
            <AnimatedSection 
              key={index}
              className="overflow-hidden rounded-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-sm" 
              animation="fade-in" 
              delay={index * 0.1 + 0.1}
            >
              {service.href.includes("cultuurverandering") ? (
                <Link 
                  to="/cases/cultuurverandering" 
                  className="block h-full"
                  onClick={(e) => {
                    if (window.location.pathname === '/cases/cultuurverandering') {
                      e.preventDefault();
                      window.location.href = '/cases/cultuurverandering';
                    } else {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  <div className="flex flex-col h-full">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <div 
                        contentEditable
                        suppressContentEditableWarning
                        className="w-full h-full"
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </AspectRatio>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-display font-semibold mb-3" contentEditable>{service.title}</h3>
                      <p className="text-gray-600" contentEditable>{service.description}</p>
                    </div>
                  </div>
                </Link>
              ) : service.href.includes("leiderschapsontwikkeling") ? (
                <Link 
                  to="/diensten/leiderschapsontwikkeling" 
                  className="block h-full"
                  onClick={(e) => {
                    if (window.location.pathname === '/diensten/leiderschapsontwikkeling') {
                      e.preventDefault();
                      window.location.href = '/diensten/leiderschapsontwikkeling';
                    } else {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  <div className="flex flex-col h-full">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <div 
                        contentEditable
                        suppressContentEditableWarning
                        className="w-full h-full"
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </AspectRatio>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-display font-semibold mb-3" contentEditable>{service.title}</h3>
                      <p className="text-gray-600" contentEditable>{service.description}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link 
                  to={service.href.replace("/aanbod/", "/diensten/")} 
                  className="block h-full"
                >
                  <div className="flex flex-col h-full">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <div 
                        contentEditable
                        suppressContentEditableWarning
                        className="w-full h-full"
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </AspectRatio>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-display font-semibold mb-3" contentEditable>{service.title}</h3>
                      <p className="text-gray-600" contentEditable>{service.description}</p>
                    </div>
                  </div>
                </Link>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
