import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { servicesContent } from "@/content/heroContent";

const WhatWeDoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16" animation="fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">{servicesContent.heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{servicesContent.subheading}</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesContent.services.map((service, index) => {
            // Use the appropriate image based on the service
            let imageUrl = service.image;
            if (service.title === "Organisatieontwikkeling") {
              imageUrl = "/lovable-uploads/01d0bdb5-7e46-4437-a03c-ebd7eee34947.png";
            } else if (service.title === "Leiderschaps- & Teamontwikkeling") {
              imageUrl = "/lovable-uploads/318cce0f-939a-4543-a8f8-fdd2c9be826d.png";
            }
            
            return (
              <AnimatedSection 
                key={index}
                className="overflow-hidden rounded-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-sm" 
                animation="fade-in" 
                delay={index * 0.1 + 0.1}
              >
                {service.href.includes("cultuurverandering") ? (
                  // Special handling for Cultuurverandering link
                  <Link 
                    to="/cases/cultuurverandering" 
                    className="block h-full"
                    onClick={(e) => {
                      // If already on the cultuurverandering page
                      if (window.location.pathname === '/cases/cultuurverandering') {
                        e.preventDefault(); // Prevent default link behavior
                        // Force full page reload to reset scroll position
                        window.location.href = '/cases/cultuurverandering';
                      } else {
                        // Otherwise let React Router handle it normally
                        window.scrollTo(0, 0);
                      }
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img 
                          src={imageUrl} 
                          alt={service.title} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ) : service.href.includes("leiderschapsontwikkeling") ? (
                  // Special handling for Leiderschapsontwikkeling link
                  <Link 
                    to="/diensten/leiderschapsontwikkeling" 
                    className="block h-full"
                    onClick={(e) => {
                      // If already on the leiderschapsontwikkeling page
                      if (window.location.pathname === '/diensten/leiderschapsontwikkeling') {
                        e.preventDefault(); // Prevent default link behavior
                        // Force full page reload to reset scroll position
                        window.location.href = '/diensten/leiderschapsontwikkeling';
                      } else {
                        // Otherwise let React Router handle it normally
                        window.scrollTo(0, 0);
                      }
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img 
                          src={imageUrl} 
                          alt={service.title} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  // Regular link handling for other services
                  <Link 
                    to={service.href.replace("/aanbod/", "/diensten/")} 
                    className="block h-full"
                  >
                    <div className="flex flex-col h-full">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img 
                          src={imageUrl} 
                          alt={service.title} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
