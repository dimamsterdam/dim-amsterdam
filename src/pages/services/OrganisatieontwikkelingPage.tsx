import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import StepCard from "@/components/StepCard";
import { servicesContent } from "@/content/heroContent";
const OrganisatieontwikkelingPage = () => {
  const organisatieContent = servicesContent.services.find(service => service.title === "Organisatieontwikkeling");
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl font-display font-bold mb-6 md:text-4xl">
                Organisatieontwikkeling
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Organisatie-ontwikkeling ontstaat vanuit een samenspel van verschillende factoren. Daarom werkt DIM vanuit een integrale aanpak. Dankzij interventies vanuit verschillende invalshoeken realiseren we wendbaarheid en langdurig resultaat.
              </p>
              <p className="text-lg text-muted-foreground">
                In nauw overleg met de opdrachtgever komen wij tot een passende aanpak en invulling. 
                Hieronder worden de globale elementen toegelicht.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden shadow-lg">
                <img src={organisatieContent?.image || "/lovable-uploads/2a6b57e6-c4ef-4d88-b4b1-cb5423db9694.png"} alt="Organisatieontwikkeling" className="object-cover w-full h-full" contentEditable />
              </AspectRatio>
            </AnimatedSection>
          </div>
        </div>
      </section>

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
                <p>Trajecten worden afgerond met praktische vervolgstappen, inclusief planning en verantwoordelijkheden. Deze doorkijk betreft zowel het verankeren het beoogde doel van het traject, als het borgen van verdere ontwikkeling. In een afrondend gesprek horen wij uiteraard eveneens graag hoe onze dienstverlening is ervaren en hoe we onze dienstverlening mogelijk kunnen versterken.</p>
              </StepCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50" id="cases">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">Klant cases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection delay={0.1} animation="fade-in">
                <Link to="/cases/cultuurverandering" className="block h-full cursor-pointer">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:translate-y-[-4px]">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="/lovable-uploads/3e6f5ca9-cc00-4df7-ac34-a2fd92123a8d.png" alt="Cultuurverandering case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow p-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-primary transition-colors">Cultuurverandering</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Een grote uitvoeringsorganisatie met een flinke productie-opgave stond voor een complexe transitie-opgave. 
                        DIM organiseerde een 2-jarig programma gericht op ondernemerschap, innovatie en klanttevredenheid.
                      </p>
                      <div className="mt-auto pt-2">
                        <span className="text-sm font-medium text-primary">Lees meer</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.2} animation="fade-in">
                <Link to="/cases/samenwerking-conflicthantering" className="block h-full cursor-pointer">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:translate-y-[-4px]">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="/lovable-uploads/e7ae05c1-0045-4921-a819-7ba26c3bd89e.png" alt="Samenwerking & Conflicthantering case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow p-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-primary transition-colors">Samenwerking & Conflicthantering</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Een ZBO kampte met achterstanden en een conflict tussen afdelingen. DIM ontwikkelde een aanpak 
                        gericht op versterken van begrip, rollen en verantwoordelijkheden.
                      </p>
                      <div className="mt-auto pt-2">
                        <span className="text-sm font-medium text-primary">Lees meer</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.3} animation="fade-in">
                <Link to="/cases/herijking-visie-strategie" className="block h-full cursor-pointer">
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:translate-y-[-4px]">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="/lovable-uploads/e8bcbca9-7f4c-4654-9bb6-0b2383ff1c8c.png" alt="Herijking visie & strategie case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow p-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-primary transition-colors">Herijking visie & strategie</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Een Directoraat-generaal constateerde dat directies weinig samenwerkten. DIM heeft een traject opgesteld 
                        gericht op het versterken van samenwerking en werken vanuit impact.
                      </p>
                      <div className="mt-auto pt-2">
                        <span className="text-sm font-medium text-primary">Lees meer</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

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