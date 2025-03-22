
import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef } from "react";

const OrganisatieveranderingPage = () => {
  // Debug references to analyze layout issues
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  // Log layout dimensions for debugging
  useEffect(() => {
    const logLayoutDimensions = () => {
      if (containerRef.current && textContainerRef.current && imageContainerRef.current) {
        console.log('Container dimensions:', {
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
        console.log('Text container dimensions:', {
          width: textContainerRef.current.offsetWidth,
          height: textContainerRef.current.offsetHeight
        });
        console.log('Image container dimensions:', {
          width: imageContainerRef.current.offsetWidth,
          height: imageContainerRef.current.offsetHeight
        });
      }
    };
    
    // Log on mount and on resize
    logLayoutDimensions();
    window.addEventListener('resize', logLayoutDimensions);
    
    return () => window.removeEventListener('resize', logLayoutDimensions);
  }, []);
  
  const testimonials = [{
    quote: "DIM heeft ons geholpen een complex verandertraject te navigeren met empathie en precisie. Hun culturele integratieroadmap werd onze leidraad, en we zijn erg tevreden met de resultaten.",
    author: "Thomas Rodriguez",
    role: "HR Directeur",
    company: "Global Systems",
    initials: "TR",
    color: "bg-purple-500/20"
  }, {
    quote: "Met grote waardering beveel ik DIM aan als partner bij organisatieverandering. In hun begeleiding van ons transformatieprogramma hebben zij een cruciale rol gespeeld in het versterken van onze samenwerkingscultuur.",
    author: "Frans Brom",
    role: "Directeur",
    company: "Wetenschappelijke Raad voor het Regeringsbeleid",
    initials: "FB",
    color: "bg-emerald-500/20"
  }, {
    quote: "DIM geeft richting en organiseert focus in de verandering. Met expertise, overtuigingskracht en creativiteit weten ze op een positieve manier te inspireren en beweging te realiseren.",
    author: "Annet Bertram",
    role: "Directeur Generaal",
    company: "Rijksvastgoedbedrijf",
    initials: "AB",
    color: "bg-indigo-500/20"
  }];
  
  return <PageLayout>
      {/* Introductie Section - Complete rework with fixed positioning and absolute measurements */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-blue-50">
        <div ref={containerRef} className="container mx-auto px-4 md:px-6">
          {/* Issue #1: Stacking order and flow - Using block level rendering instead of flex/grid */}
          <div className="block md:relative">
            {/* Issue #2: Text container with fixed dimensions and adequate space */}
            <div 
              ref={textContainerRef}
              className="pb-12 md:pb-0 md:max-w-[45%] lg:max-w-[40%]"
            >
              <AnimatedSection>
                {/* Issue #3: Title text size and overflow handling */}
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-display font-bold mb-6 break-words">
                  Organisatieverandering
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  Een integrale aanpak en meervoudig perspectief zijn kenmerkend voor onze werkwijze. 
                  Dankzij interventies vanuit verschillende invalshoeken realiseren we wendbaarheid en langdurig resultaat.
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  In nauw overleg met de opdrachtgever komen wij tot een passende aanpak en invulling. 
                  Hieronder worden de globale elementen toegelicht.
                </p>
              </AnimatedSection>
            </div>
            
            {/* Issue #4: Image container with absolute positioning on larger screens */}
            <div 
              ref={imageContainerRef}
              className="md:absolute md:top-0 md:right-0 md:w-[50%] lg:w-[55%] md:h-full"
            >
              <AnimatedSection 
                animation="fade-in" 
                delay={0.2} 
                className="h-full"
              >
                {/* Issue #5: Image containment and appropriate aspect ratio */}
                <div className="rounded-xl shadow-lg overflow-hidden h-full flex items-center">
                  <AspectRatio ratio={16 / 9} className="bg-muted w-full">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Organisatieverandering" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Organisatieverandering: werkwijze</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">1. Analyse & Plan van Aanpak: "Take a step back"</h3>
                <p>Kortdurende pragmatische inventarisatie van de verschillende factoren die van invloed zijn op de (on-)gewenste situatie. In gesprek met de belangrijkste stakeholders wordt vervolgens een plan van aanpak (nader) uitgewerkt.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">2. Uitvoering: resultaat & lerend vermogen</h3>
                <p>DIM ontwikkelt en begeleidt een programma wat de betrokkenen in beweging zet. We kennen de (semi-)publieke context en zetten onze expertise en eerdere ervaring op het gebied van organisatie- & leiderschapsontwikkeling in om tot nieuwe inzichten en gefundeerde keuzes te komen. 

We ontwerpen een gebalanceerd programma gericht op eigenaarschap en concreet resultaat, waarbij actie en reflectie hand in hand gaan. Zo realiseren we niet alleen resultaat op de korte termijn, maar ook lerend vermogen voor de lange termijn. Onze bijeenkomsten zijn resultaatgericht, analytisch scherp, confronterend, positief en onderling verbindend.
              </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">3. Afronding: verankering &amp; evaluatie</h3>
                <p>Trajecten worden afgerond met praktische vervolgstappen, inclusief planning en verantwoor-delijkheden. Deze doorkijk betreft zowel het verankeren het beoogde doel van het traject, als het borgen van verdere ontwikkeling. In een afrondend gesprek horen wij uiteraard eveneens graag hoe onze dienstverlening is ervaren en hoe we onze dienstverlening mogelijk kunnen versterken.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Klant cases</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Cultuurverandering bij overheidsorganisatie</h3>
                <p className="mb-4">Een grote overheidsorganisatie kampte met uitdagingen op het gebied van samenwerking tussen afdelingen en effectieve besluitvorming. DIM ontwikkelde een cultuurprogramma gericht op transparantie, samenwerking en resultaatgerichtheid.</p>
                <p className="text-sm text-muted-foreground"><strong>Resultaat:</strong> 30% hogere medewerkerstevredenheid, verbeterde interdepartementale samenwerking en snellere besluitvorming.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Fusie van kennisorganisaties</h3>
                <p className="mb-4">Twee kennisintensieve organisaties moesten fuseren met behoud van expertise en innovatiekracht. DIM begeleidde het integratieproces met focus op cultuurintegratie, kennisdeling en organisatieontwikkeling.</p>
                <p className="text-sm text-muted-foreground"><strong>Resultaat:</strong> Succesvolle integratie binnen 12 maanden, behoud van 95% van sleutelmedewerkers en verbeterde innovatie-output.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Referenties Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Wat klanten zeggen</h2>
            <p className="text-lg text-muted-foreground">
              We hebben verschillende organisaties geholpen bij hun verandertraject. Hier zijn enkele ervaringen van onze klanten.
            </p>
          </AnimatedSection>
          
          <TestimonialsBlock testimonials={testimonials} />
        </div>
      </section>
    </PageLayout>;
};

export default OrganisatieveranderingPage;
