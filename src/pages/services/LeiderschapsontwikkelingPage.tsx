
import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StepCard from "@/components/StepCard";

const LeiderschapsontwikkelingPage = () => {
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
      {/* Introductie Section */}
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
                <img src="/lovable-uploads/afd3cda5-e0a3-44fb-a14b-769eea990559.png" alt="Leiderschapsontwikkeling" className="object-cover w-full h-full" />
              </AspectRatio>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
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

      {/* Cases Section */}
      <section className="py-16 md:py-20 bg-gray-50" id="cases">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center" contentEditable>Klant cases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection delay={0.1} animation="fade-in">
                <Link to="/cases/leiderschapsprogramma" className="block h-full">
                  <Card className="h-full flex flex-col">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="Leiderschapsprogramma case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow pt-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis" contentEditable>Leiderschapsprogramma</h3>
                      <p className="text-sm text-muted-foreground mb-4" contentEditable>
                        Voor een uitvoeringsorganisatie met hoogopgeleide professionals begeleiden wij een meerjarig leiderschapstraject
                        gericht op het versterken van de professionele autonomie en effectievere sturing.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">Lees meer</Button>
                    </CardFooter>
                  </Card>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.2} animation="fade-in">
                <Link to="/cases/intervisie-strategisch-leiderschap" className="block h-full">
                  <Card className="h-full flex flex-col">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2940&auto=format&fit=crop" alt="Intervisie case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow pt-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis" contentEditable>Intervisie strategisch leiderschap</h3>
                      <p className="text-sm text-muted-foreground mb-4" contentEditable>
                        Voor topfunctionarissen faciliteren wij reguliere intervisie-bijeenkomsten die bijdragen aan verbinding
                        en eenduidigheid in werkwijze tussen leidinggevenden.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">Lees meer</Button>
                    </CardFooter>
                  </Card>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.3} animation="fade-in">
                <Link to="/cases/teamontwikkeling" className="block h-full">
                  <Card className="h-full flex flex-col">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" alt="Teamontwikkeling case" className="object-cover w-full h-full" />
                    </AspectRatio>
                    <CardContent className="flex-grow pt-6">
                      <h3 className="text-xl font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis" contentEditable>Teamontwikkeling</h3>
                      <p className="text-sm text-muted-foreground mb-4" contentEditable>
                        Een Directoraat-generaal met meerdere nieuwe directeuren vroeg ons voor versnelde teamontwikkeling
                        en het formuleren van een gezamenlijke ambitie.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">Lees meer</Button>
                    </CardFooter>
                  </Card>
                </Link>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Referenties Section */}
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
