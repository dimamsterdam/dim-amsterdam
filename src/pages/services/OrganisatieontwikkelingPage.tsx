
import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import StepCard from "@/components/StepCard";
const OrganisatieontwikkelingPage = () => {
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
    quote: "Met grote waardering beveel ik DIM aan als partner bij organisatieontwikkeling. In hun begeleiding van ons transformatieprogramma hebben zij een cruciale rol gespeeld in het versterken van onze samenwerkingscultuur.",
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
            <div ref={textContainerRef} className="pb-12 md:pb-0 md:max-w-[45%] lg:max-w-[40%]">
              <AnimatedSection>
                {/* Updated heading with new classes for handling the long word */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 whitespace-nowrap md:whitespace-normal hyphens-auto md:text-3xl">
                  Organisatie&shy;ontwikkeling
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  Organisatie-ontwikkeling ontstaat vanuit een samenspel van verschillende factoren. Daarom werkt DIM vanuit een integrale aanpak. Dankzij interventies vanuit verschillende invalshoeken realiseren we wendbaarheid en langdurig resultaat.
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  In nauw overleg met de opdrachtgever komen wij tot een passende aanpak en invulling. 
                  Hieronder worden de globale elementen toegelicht.
                </p>
              </AnimatedSection>
            </div>
            
            {/* Issue #4: Image container with absolute positioning on larger screens */}
            <div ref={imageContainerRef} className="md:absolute md:top-0 md:right-0 md:w-[50%] lg:w-[55%] md:h-full">
              <AnimatedSection animation="fade-in" delay={0.2} className="h-full">
                {/* Issue #5: Image containment and appropriate aspect ratio */}
                <div className="rounded-xl shadow-lg overflow-hidden h-full flex items-center">
                  <AspectRatio ratio={16 / 9} className="bg-muted w-full">
                    <img src="/lovable-uploads/448a28ea-2320-42a6-8b62-469baca49123.png" alt="Organisatieontwikkeling - Afraid of change? Leave it here" className="object-cover w-full h-full" />
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
            <h2 className="text-3xl font-display font-bold mb-6">Organisatieontwikkeling: werkwijze</h2>
            
            <div className="space-y-8 relative before:content-[''] before:absolute before:top-[3.5rem] before:bottom-[3.5rem] before:left-7 before:w-[2px] before:bg-gray-200 md:before:hidden">
              <StepCard number={1} title="Analyse & Plan van Aanpak" variant="highlight">
                <p>Kortdurende pragmatische inventarisatie van de verschillende factoren die van invloed zijn op de (on-)gewenste situatie. In gesprek met de belangrijkste stakeholders wordt vervolgens een plan van aanpak (nader) uitgewerkt.</p>
              </StepCard>
              
              <StepCard number={2} title="Uitvoering: resultaat & lerend vermogen" variant="highlight">
                <p>DIM ontwikkelt en begeleidt een programma wat de betrokkenen in beweging zet. We kennen de (semi-)publieke context en zetten onze expertise en eerdere ervaring op het gebied van organisatie- & leiderschapsontwikkeling in om tot nieuwe inzichten en gefundeerde keuzes te komen. 

We ontwerpen een gebalanceerd programma gericht op eigenaarschap en concreet resultaat, waarbij actie en reflectie hand in hand gaan. Zo realiseren we niet alleen resultaat op de korte termijn, maar ook lerend vermogen voor de lange termijn. Onze bijeenkomsten zijn resultaatgericht, analytisch scherp, confronterend, positief en onderling verbindend.
              </p>
              </StepCard>
              
              <StepCard number={3} title="Afronding: verankering & evaluatie" variant="highlight">
                <p>Trajecten worden afgerond met praktische vervolgstappen, inclusief planning en verantwoor-delijkheden. Deze doorkijk betreft zowel het verankeren het beoogde doel van het traject, als het borgen van verdere ontwikkeling. In een afrondend gesprek horen wij uiteraard eveneens graag hoe onze dienstverlening is ervaren en hoe we onze dienstverlening mogelijk kunnen versterken.</p>
              </StepCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cases Section - Updated with case links to the top of each page */}
      <section className="py-16 md:py-20 bg-gray-50" id="cases">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">Klant cases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection delay={0.1} animation="fade-in">
                <Card className="h-full flex flex-col">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop" alt="Cultuurverandering case" className="object-cover w-full h-full" />
                  </AspectRatio>
                  <CardContent className="flex-grow pt-6">
                    <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis" contentEditable>Cultuurverandering</h3>
                    <p className="text-sm text-muted-foreground mb-4" contentEditable>
                      Een grote uitvoeringsorganisatie met een flinke productie-opgave stond voor een complexe transitie-opgave. 
                      DIM organiseerde een 2-jarig programma gericht op ondernemerschap, innovatie en klanttevredenheid.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to="/cases/cultuurverandering#top">
                      <Button variant="outline" size="sm">Lees meer</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2} animation="fade-in">
                <Card className="h-full flex flex-col">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=2940&auto=format&fit=crop" alt="Samenwerking & Conflicthantering case" className="object-cover w-full h-full" />
                  </AspectRatio>
                  <CardContent className="flex-grow pt-6">
                    <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis" contentEditable>Samenwerking & Conflicthantering</h3>
                    <p className="text-sm text-muted-foreground mb-4" contentEditable>
                      Een ZBO kampte met achterstanden en een conflict tussen afdelingen. DIM ontwikkelde een aanpak 
                      gericht op versterken van begrip, rollen en verantwoordelijkheden.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to="/cases/samenwerking-conflicthantering#top">
                      <Button variant="outline" size="sm">Lees meer</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3} animation="fade-in">
                <Card className="h-full flex flex-col">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="Herijking visie & strategie case" className="object-cover w-full h-full" />
                  </AspectRatio>
                  <CardContent className="flex-grow pt-6">
                    <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis" contentEditable>Herijking visie & strategie</h3>
                    <p className="text-sm text-muted-foreground mb-4" contentEditable>
                      Een Directoraat-generaal constateerde dat directies weinig samenwerkten. DIM heeft een traject opgesteld 
                      gericht op het versterken van samenwerking en werken vanuit impact.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to="/cases/herijking-visie-strategie#top">
                      <Button variant="outline" size="sm">Lees meer</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </AnimatedSection>
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
export default OrganisatieontwikkelingPage;
