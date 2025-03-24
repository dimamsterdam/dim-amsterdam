
import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StepCard from "@/components/StepCard";

const LeiderschapsontwikkelingPage = () => {
  const testimonials = [
    {
      quote: "Werken met DIM heeft getransformeerd hoe ons leiderschapsteam opereert. We zijn meer afgestemd, effectiever en doelgerichter dan ooit tevoren. De impact op onze bedrijfsresultaten is opmerkelijk.",
      author: "Michael Chen",
      role: "CEO",
      company: "Ascend Group",
      initials: "MC",
      color: "bg-emerald-500/20"
    },
    {
      quote: "Als IG van de NVWA heb ik DIM leren kennen als een enthousiasmerende begeleider in ons traject van leiderschapsontwikkeling. Zij verbindt, snapt waarom het gaat in de organisatie, heeft inzicht in veranderprocessen en treedt effectief op.",
      author: "Rob van Lint",
      role: "Inspecteur Generaal",
      company: "NVWA",
      initials: "RL",
      color: "bg-amber-500/20"
    },
    {
      quote: "DIM heeft zowel mij als mijn team begeleid tijdens een intensief ontwikkelingstraject. De combinatie van persoonlijke coaching en teamontwikkeling heeft geleid tot een sterkere samenwerking en betere resultaten.",
      author: "Mark Dierix",
      role: "Directeur Generaal",
      company: "Ministerie van Economische Zaken",
      initials: "MD",
      color: "bg-blue-400/20"
    }
  ];

  return (
    <PageLayout>
      {/* Introductie Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6" contentEditable>Leiderschaps- & Teamontwikkeling</h1>
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
                  src="/lovable-uploads/dc55b024-9a36-4212-88ae-a14b9fecdf11.png" 
                  alt="Leiderschapsontwikkeling" 
                  className="object-cover w-full h-full"
                />
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
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" 
                        alt="Leiderschapsprogramma case" 
                        className="object-cover w-full h-full"
                      />
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
                      <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2940&auto=format&fit=crop" 
                        alt="Intervisie case" 
                        className="object-cover w-full h-full"
                      />
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
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
                        alt="Teamontwikkeling case" 
                        className="object-cover w-full h-full"
                      />
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

      {/* Full Case Studies Section - Using Cards instead of in-line content */}
      <section className="py-16 md:py-20" id="case-details">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center" contentEditable>Case Studies</h2>
            
            <div className="space-y-12">
              {/* Case 1 */}
              <Card className="bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold" contentEditable>Leiderschapsprogramma: Sturen op professionele autonomie & impact</h3>
                    
                    <div className="prose max-w-none">
                      <p contentEditable>
                        Voor een uitvoeringsorganisatie met hoogopgeleide professionals begeleiden DIM een meerjarig leiderschapstraject 
                        gericht op het versterken van de professionele autonomie, effectievere sturing en samenwerking met de omgeving. 
                        In een combinatie aanpak van leiderschapsontwikkeling en ondersteuning op strategische sturing zijn de volgende doelstellingen gerealiseerd:
                      </p>
                      
                      <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li contentEditable>Versterken impact dankzij duidelijke koers (missie en strategie), bijbehorende prioriteiten en sturing daarop</li>
                        <li contentEditable>Heldere rollen en verantwoordelijkheden op basis van een effectieve en efficiënte werkwijze</li>
                        <li contentEditable>Eenduidige communicatie en besluitvorming</li>
                        <li contentEditable>Verhogen werkplezier; ervaren waardering, eigenaarschap en professionele autonomie</li>
                      </ul>
                      
                      <h4 className="text-xl font-medium mt-6 mb-3" contentEditable>Aanpak</h4>
                      <p contentEditable>
                        In nauwe samenwerking met het bestuur en een regiegroep met vertegenwoordigers van de verschillende managementlagen 
                        en bedrijfsvoering is een leiderschapstraject ontwikkeld. Aan de hand van actuele vraagstukken is in verschillende 
                        samenstelling o.a. gewerkt aan gezamenlijke doorvertaling van de koers naar concrete doelen en sturing, heldere 
                        rolverdeling en verantwoordelijkheden en versterking van vaardigheden op het gebied van samenwerking, leiderschap 
                        bij verandering en sturing vanuit professionele autonomie (5R: richting, ruimte, resultaat, rekenschap, relatie).
                      </p>
                      <p className="mt-4" contentEditable>
                        Het leiderschapstraject is zo opgezet dat er een continue koppeling met de dagelijkse praktijk werd geborgd dankzij 
                        nauwe tussentijdse afstemming met het bestuur en de regiegroep. Daarnaast bood DIM parallel aan het leiderschapstraject 
                        ondersteuning op de ontwikkeling van een eenduidig sturingsmodel en versterking van de interne communicatie.
                      </p>
                      
                      <h4 className="text-xl font-medium mt-6 mb-3" contentEditable>Ervaringen</h4>
                      <div className="bg-blue-50 p-4 rounded-lg space-y-3 italic">
                        <p contentEditable>"Er is veel gebeurd en veranderd. Doelen en prioriteiten zijn helderder geworden. Dat geeft ook richting aan hoe we willen werken."</p>
                        <p contentEditable>"We hebben mooie stappen gezet in het scherper maken van de taak en rolverdeling."</p>
                        <p contentEditable>"Er was echt een kantelmoment dat we meer 'wij werden' als collectief van leidinggevenden, een mooie ontwikkeling om door te zetten."</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Case 2 */}
              <Card className="bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold" contentEditable>Intervisie strategisch & verbindend leiderschap</h3>
                    
                    <div className="prose max-w-none">
                      <p contentEditable>
                        Leiderschap op top-niveau kent veel complexe en veelal ethische uitdagingen met relatief weinig gelegenheid 
                        om hierover te sparren met anderen. Deze hoog professionele organisatie faciliteert strategisch en verbindend 
                        leiderschap via ondermeer reguliere intervisie-bijeenkomsten. De intervisie-bijeenkomsten bieden top-leidinggevenden 
                        de gelegenheid op niveau te sparren over casuïstiek. Daarnaast dragen de bijeenkomsten bij aan meer verbinding 
                        en eenduidigheid in werkwijze onder de top-leidinggevenden van de organisatie.
                      </p>
                      
                      <h4 className="text-xl font-medium mt-6 mb-3" contentEditable>Aanpak</h4>
                      <p contentEditable>
                        In groepen van circa 8 deelnemers op strategisch niveau worden jaarlijks meerdere intervisie-bijeenkomsten georganiseerd. 
                        Deelnemers bereiden altijd allen persoonlijk casuïstiek voor en maken gezamenlijk keuzes voor de bespreking. 
                        Hierbij wordt gewerkt volgens een bewezen effectief format waarin de balans wordt gezocht tussen een informele 
                        en ontspannen sfeer en tegelijkertijd een constructieve en op z'n tijd scherp gesprek.
                      </p>
                      <p className="mt-4" contentEditable>
                        De casuïstiek wordt verdiept door middel van de bespreking en toepassing van wetenschappelijke achtergrondartikelen 
                        op het gebied van bijvoorbeeld conflicthantering, teamontwikkeling, procesmanagement, gesprekstechnieken en ethiek.
                      </p>
                      
                      <h4 className="text-xl font-medium mt-6 mb-3" contentEditable>Ervaringen</h4>
                      <div className="bg-blue-50 p-4 rounded-lg space-y-3 italic">
                        <p contentEditable>"Ik zie uit naar deze bijeenkomsten. Het dwingt me tot reflectie en de reflectie en adviezen van anderen zijn echt helpend"</p>
                        <p contentEditable>"Leidinggeven is ook best eenzaam. Het is enorm waardevol om een plek te hebben waar ik open kan spreken"</p>
                        <p contentEditable>"De artikelen geven een mooie verdieping. Dit soort dingen kom ik anders niet tegen en vind ik erg leerzaam"</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Case 3 */}
              <Card className="bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold" contentEditable>Teamontwikkeling; benutten complementariteit, strategische sturing en eenduidig leiderschap</h3>
                    
                    <div className="prose max-w-none">
                      <p contentEditable>
                        Een Directoraat-generaal heeft in korte tijd meerdere nieuwe directeuren, die gezamenlijk bovendien voor een grote opgave staan. 
                        De Directeur-generaal vraagt DIM voor (versnelde) teamontwikkeling en het formuleren van een gezamenlijke ambitie.
                      </p>
                      
                      <p className="mt-4" contentEditable>
                        In overleg met de Directeur-Generaal zijn de volgende doelstellingen voor het traject geformuleerd:
                      </p>
                      
                      <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li contentEditable>Investeren in onderlinge kennismaking op zowel persoonlijk als professioneel vlak</li>
                        <li contentEditable>Inventariseren en concretiseren benutten van onderlinge complementariteit</li>
                        <li contentEditable>Bepalen gezamenlijke richting en fundamentele keuzes voor het DG</li>
                        <li contentEditable>Bepalen gezamenlijke wijze van sturen en doorvertaling naar praktische inrichting strategisch MT-overleg</li>
                      </ul>
                      
                      <h4 className="text-xl font-medium mt-6 mb-3" contentEditable>Aanpak</h4>
                      <p contentEditable>
                        Op basis van individuele gesprekken met de verschillende directeuren ontwierp DIM een traject bestaande uit 
                        een aantal bijeenkomsten gedurende circa een half jaar. Iedere bijeenkomst werd gekenmerkt door aandacht voor 
                        drie perspectieven en de onderlinge wisselwerking hiertussen, te weten:
                      </p>
                      
                      <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li contentEditable>Persoonlijk niveau: levensverhalen, voorkeursstijlen, ambities, kwaliteiten, allergieën en ontwikkel-punten</li>
                        <li contentEditable>Team-niveau: complementariteit, feedback, dialoog, onderlinge verhoudingen en dynamiek</li>
                        <li contentEditable>Organisatie-niveau: kansen en uitdagingen t.a.v. de maatschappelijke opgave (visie, strategie, sturing), interne (inter)departementale dynamiek en politiek-ambtelijke verhoudingen</li>
                      </ul>
                      
                      <p className="mt-4" contentEditable>
                        Het traject startte met de focus op persoonlijke kennismaking, onderlinge verbinding en teamontwikkeling middels 
                        ondermeer het delen van levensverhalen en MBTI (voorkeursstijlen). Vervolgens is het accent verlegd naar de 
                        organisatie-opgaven en de wijze waarop de teamdynamiek hier het meest ondersteunend aan kon bijdragen.
                      </p>
                      
                      <h4 className="text-xl font-medium mt-6 mb-3" contentEditable>Ervaringen</h4>
                      <div className="bg-blue-50 p-4 rounded-lg space-y-3 italic">
                        <p contentEditable>"De bijeenkomsten kenden een prettige en effectieve balans tussen aandacht voor de persoon en een zakelijke resultaatgerichtheid".</p>
                        <p contentEditable>"De investering in het begin heeft ons echt heeft geholpen vanaf de start als eenheid op te treden".</p>
                        <p contentEditable>"Zeker nuttige bijeenkomsten en niet onbelangrijk; ook met humor en de nodige ontspanning!".</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
    </PageLayout>
  );
};

export default LeiderschapsontwikkelingPage;
