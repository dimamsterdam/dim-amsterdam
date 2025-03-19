
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const WhatWeDoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16" animation="fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">Wat we doen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Met oog voor wat goed gaat, werken we samen aan wat beter kan.</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection className="p-6 border border-gray-100 rounded-lg hover:border-primary/20 transition-all duration-300 hover:shadow-sm" animation="fade-in" delay={0.1}>
            <Link to="/aanbod/organisatieverandering" className="block h-full">
              <h3 className="text-xl font-display font-semibold mb-3">Organisatie-ontwikkeling</h3>
              <p className="text-gray-600">Een integrale aanpak en meervoudig perspectief zijn kenmerkend voor onze werkwijze. Dankzij interventies vanuit verschillende invalshoeken realiseren we wendbaarheid en langdurig resultaat.</p>
            </Link>
          </AnimatedSection>
          
          <AnimatedSection className="p-6 border border-gray-100 rounded-lg hover:border-primary/20 transition-all duration-300 hover:shadow-sm" animation="fade-in" delay={0.2}>
            <Link to="/aanbod/leiderschapsontwikkeling" className="block h-full">
              <h3 className="text-xl font-display font-semibold mb-3">Leiderschaps- & Teamontwikkeling</h3>
              <p className="text-gray-600">Op basis van beproefde leiderschapsconcepten en ruime kennis en ervaring in het publieke domein verzorgen wij maatwerk leiderschapsprogramma's gericht op concreet resultaat, intervisies en teamontwikkeling.</p>
            </Link>
          </AnimatedSection>
          
          <AnimatedSection className="p-6 border border-gray-100 rounded-lg hover:border-primary/20 transition-all duration-300 hover:shadow-sm" animation="fade-in" delay={0.3}>
            <Link to="/aanbod/executive-coaching" className="block h-full">
              <h3 className="text-xl font-display font-semibold mb-3">Executive coaching</h3>
              <p className="text-gray-600">Effectiever werken met meer plezier en vanuit meer ontspanning? Samen onderzoeken we welke patronen helpend zijn en waar ruimte ligt voor ontwikkeling.</p>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
