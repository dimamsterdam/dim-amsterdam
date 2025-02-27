
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServicesSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Cultural Transformation",
      description: "Build a purpose-driven culture that aligns with your strategy and values to drive sustainable performance.",
      icon: "🔄",
      link: "/services/cultural-transformation",
    },
    {
      title: "Leadership Development",
      description: "Equip your leaders with the mindsets, skills, and behaviors needed to inspire and drive positive change.",
      icon: "🚀",
      link: "/services/leadership-development",
    },
    {
      title: "Team Performance",
      description: "Enhance collaboration, innovation, and execution through cohesive and high-performing teams.",
      icon: "👥",
      link: "/services/team-performance",
    },
    {
      title: "Organizational Design",
      description: "Create adaptive structures that enable agility, innovation, and efficiency in a complex world.",
      icon: "🏗️",
      link: "/services/organizational-design",
    },
  ];

  return (
    <section className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Comprehensive solutions for cultural excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Our integrated approach addresses the full spectrum of cultural and leadership challenges facing modern organizations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1} 
              animation="slide-from-right"
              className="h-full"
            >
              <Link 
                to={service.link} 
                className="group block h-full"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className={`h-full rounded-xl p-8 transition-all duration-300 border ${
                  hoverIndex === index 
                    ? 'border-primary shadow-lg translate-y-[-4px]' 
                    : 'border-border hover:border-primary/50'
                }`}>
                  <div className="mb-4 flex justify-between items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <ChevronRight 
                      className={`transform transition-transform duration-300 text-primary ${
                        hoverIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`} 
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <Link to="/services" className="btn-primary">
            Explore All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
