
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { servicesContent } from "@/content/heroContent";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const WhatWeDoSection = () => {
  // Add state to track the service images
  const [services, setServices] = useState(servicesContent.services);
  
  useEffect(() => {
    console.log("WhatWeDoSection is being rendered");
  }, []);

  // Function to handle image change
  const handleImageChange = (index: number, newImage: string) => {
    const updatedServices = [...services];
    updatedServices[index] = {
      ...updatedServices[index],
      image: newImage
    };
    setServices(updatedServices);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16" animation="fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">{servicesContent.heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{servicesContent.subheading}</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              className="overflow-hidden rounded-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-sm" 
              animation="fade-in" 
              delay={index * 0.1 + 0.1}
            >
              {service.href.includes("cultuurverandering") ? (
                <Card className="h-full flex flex-col">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <div className="w-full h-full relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </AspectRatio>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6">
                    <Link 
                      to="/cases/cultuurverandering" 
                      className="cursor-pointer block"
                      onClick={(e) => {
                        if (window.location.pathname === '/cases/cultuurverandering') {
                          e.preventDefault();
                          window.location.href = '/cases/cultuurverandering';
                        } else {
                          window.scrollTo(0, 0);
                        }
                      }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        <span>Lees meer</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ) : service.href.includes("leiderschapsontwikkeling") ? (
                <Card className="h-full flex flex-col">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <div className="w-full h-full relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </AspectRatio>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6">
                    <Link 
                      to="/diensten/leiderschapsontwikkeling" 
                      className="cursor-pointer block"
                      onClick={(e) => {
                        if (window.location.pathname === '/diensten/leiderschapsontwikkeling') {
                          e.preventDefault();
                          window.location.href = '/diensten/leiderschapsontwikkeling';
                        } else {
                          window.scrollTo(0, 0);
                        }
                      }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        <span>Lees meer</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ) : (
                <Card className="h-full flex flex-col">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <div className="w-full h-full relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </AspectRatio>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6">
                    <Link 
                      to={service.href.replace("/aanbod/", "/diensten/")} 
                      className="cursor-pointer block"
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        <span>Lees meer</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
