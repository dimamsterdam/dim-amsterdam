
import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import StepCard from "@/components/StepCard";
import { servicesContent } from "@/content/heroContent";
import { useEffect } from "react";

const LeiderschapsontwikkelingPage = () => {
  const leiderschapContent = servicesContent.services.find(
    (service) => service.title === "Leiderschaps- & Teamontwikkeling"
  );

  const location = useLocation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [{
    quote: "Werken met DIM heeft getransformeerd hoe ons leiderschapsteam opereert. We zijn meer afgestemd, effectiever en doelgerichter dan ooit tevoren. De impact op onze bedrijfsresultaten is opmerkelijk.",
    author: "Michael Chen",
    role: "CEO",
    company: "Ascend Group",
    initials: "MC",
    color: "bg-emerald-500/20"
  }, {
    quote: "Als IG van de NVWA heb ik DIM leren kennen als een enthousiasmerende begeleider in ons traject van leiderschapsontwikkeling. Zij verbindt, snapt waarom het gaat in de organisatie, heeft inzicht in veranderprocessen en treedt effectief op.",
    author: "Rob van Lint",
    role: "Inspecteur Generaal",
    company: "NVWA",
    initials: "RL",
    color: "bg-amber-500/20"
  }, {
    quote: "DIM heeft zowel mij als mijn team begeleid tijdens een intensief ontwikkelingstraject. De combinatie van persoonlijke coaching en teamontwikkeling heeft geleid tot een sterkere samenwerking en betere resultaten.",
    author: "Mark Dierix",
    role: "Directeur Generaal",
    company: "Ministerie van Economische Zaken",
    initials: "MD",
    color: "bg-blue-400/20"
  }];
  
  return <PageLayout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-3xl">
              <h1 contentEditable className="text-4xl font-display font-bold mb-6 px-0 md:text-3xl">Leiderschaps &amp; Teamontwikkeling</h1>
              <p className="text-xl text-muted-foreground mb-8" contentEditable>
                Op basis van beproefde leiderschapsconcepten en ruime kennis en ervaring in het publieke domein verzorgen wij maatwerk leiderschapsprogramma's, intervisie en teamontwikkeling. DIM is gespecialiseerd in leiderschapsuitdagingen in spanningsvolle situaties.
              </p>
              <p className="text-lg text-muted-foreground" contentEditable>
                Onze programma's voor leiderschaps- en teamontwikkeling zijn maatwerk en combineren persoonlijke groei met organisatieontwikkeling. We focussen op duurzame gedragsverandering die direct bijdraagt aan betere resultaten.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={leiderschapContent?.image || "/lovable-uploads/5029aa4e-8b69-4fb3-af70-7788f0be1f0e.png"} 
                  alt="Leiderschapsontwikkeling" 
                  className="object-cover w-full h-full" 
                  contentEditable
                />
              </AspectRatio>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6" contentEditable>Onze werkwijze</h2>
            
            <div className="mb-8">
              <p className="text-lg mb-6" contentEditable>
                Onze werkwijze is gericht op concrete resultaten dankzij meervoudig kijken ("perspectivistische lenigheid") en het uitbreiden van het eigen en gezamenlijke handelingsrepetoire. Praktisch komt dit tot uiting in bijeenkomsten waarin de verbinding wordt gelegd tussen:
              </p>
            </div>

            <div className="space-y-8 relative before:content-[''] before:absolute before:top-[3.5rem] before:bottom-[3.5rem] before:left-7 before:w-[2px] before:bg-gray-200 md:before:hidden">
              <StepCard number={1} title="De concrete situatie">
                <ul className="list-disc pl-5 space-y-2">
                  <li contentEditable>Wat doet zich hier (daadwerkelijk) voor?</li>
                  <li contentEditable>Wat is het gewenste resultaat?</li>
                </ul>
              </StepCard>
              
              <StepCard number={2} title="Theorie en reflectie">
                <ul className="list-disc pl-5 space-y-2">
                  <li contentEditable>Theoretische benadering is hier behulpzaam?</li>
                  <li contentEditable>Hoe kunnen we hier (anders) naar kijken?</li>
                  <li contentEditable>Wat is de (gedeelde) norm?</li>
                </ul>
              </StepCard>
              
              <StepCard number={3} title="Ontwikkeling en actie">
                <ul className="list-disc pl-5 space-y-2">
                  <li contentEditable>Wat vraagt dit van de ontwikkeling van (de houding en vaardigheden) van de deelnemers?</li>
                  <li contentEditable>Wat zijn de concrete vervolgacties?</li>
                </ul>
              </StepCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50" id="cases">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center" contentEditable>Klant cases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection delay={0.1} animation="fade-in">
                <Link to="/cases/leiderschapsprogramma" className="group block h-full">
                  <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md cursor-pointer">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="/lovable-uploads/fb1c2d6e-5d3d-41ff-a91e-5679347148b2.png" alt="Leiderschapsprogramma case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow pt-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-primary transition-colors" contentEditable>Leiderschapsprogramma</h3>
                      <p className="text-sm text-muted-foreground mb-4" contentEditable>
                        Voor een uitvoeringsorganisatie met hoogopgeleide professionals begeleiden wij een meerjarig leiderschapstraject
                        gericht op het versterken van de professionele autonomie en effectievere sturing.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <span className="text-sm font-medium text-primary group-hover:underline transition-all">Lees meer</span>
                    </CardFooter>
                  </Card>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.2} animation="fade-in">
                <Link to="/cases/intervisie-strategisch-leiderschap" className="group block h-full">
                  <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md cursor-pointer">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="/lovable-uploads/3040aebd-ffef-412b-8fd2-20b42b111b58.png" alt="Intervisie case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow pt-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-primary transition-colors" contentEditable>Intervisie strategisch leiderschap</h3>
                      <p className="text-sm text-muted-foreground mb-4" contentEditable>
                        Voor topfunctionarissen faciliteren wij reguliere intervisie-bijeenkomsten die bijdragen aan verbinding
                        en eenduidigheid in werkwijze tussen leidinggevenden.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <span className="text-sm font-medium text-primary group-hover:underline transition-all">Lees meer</span>
                    </CardFooter>
                  </Card>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.3} animation="fade-in">
                <Link to="/cases/teamontwikkeling" className="group block h-full">
                  <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md cursor-pointer">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="/lovable-uploads/07966c74-c507-4ef4-9e92-c29042aae202.png" alt="Teamontwikkeling case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow pt-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-primary transition-colors" contentEditable>Teamontwikkeling</h3>
                      <p className="text-sm text-muted-foreground mb-4" contentEditable>
                        Een Directoraat-generaal met meerdere nieuwe directeuren vroeg ons voor versnelde teamontwikkeling
                        en het formuleren van een gezamenlijke ambitie.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <span className="text-sm font-medium text-primary group-hover:underline transition-all">Lees meer</span>
                    </CardFooter>
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
            <h2 className="text-3xl font-display font-bold mb-4" contentEditable>Wat klanten zeggen</h2>
            <p className="text-lg text-muted-foreground" contentEditable>
              We hebben verschillende leiders en teams begeleid in hun ontwikkeling. Hier zijn enkele ervaringen van onze klanten.
            </p>
          </AnimatedSection>
          
          <TestimonialsBlock testimonials={testimonials} />
        </div>
      </section>
    </PageLayout>;
};

export default LeiderschapsontwikkelingPage;
