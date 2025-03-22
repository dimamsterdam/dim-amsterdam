import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
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

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3" contentEditable>De concrete situatie</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li contentEditable>Wat doet zich hier (daadwerkelijk) voor?</li>
                  <li contentEditable>Wat is het gewenste resultaat?</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3" contentEditable>Theorie en reflectie</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li contentEditable>Theoretische benadering is hier behulpzaam?</li>
                  <li contentEditable>Hoe kunnen we hier (anders) naar kijken?</li>
                  <li contentEditable>Wat is de (gedeelde) norm?</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3" contentEditable>Ontwikkeling en actie</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li contentEditable>Wat vraagt dit van de ontwikkeling van (de houding en vaardigheden) van de deelnemers?</li>
                  <li contentEditable>Wat zijn de concrete vervolgacties?</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6" contentEditable>Succesvolle cases</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3" contentEditable>Leiderschapsontwikkeling bij medisch centrum</h3>
                <p className="mb-4" contentEditable>Een academisch medisch centrum wilde de leiderschapskwaliteiten van afdelingshoofden versterken. DIM ontwikkelde een maatwerkprogramma gericht op persoonlijk leiderschap, verandermanagement en strategische communicatie.</p>
                <p className="text-sm text-muted-foreground" contentEditable><strong>Resultaat:</strong> Hogere medewerkerstevredenheid, verbeterde interdisciplinaire samenwerking en effectievere implementatie van veranderingen.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3" contentEditable>Teamontwikkeling bij ministerie</h3>
                <p className="mb-4" contentEditable>Een directieteam binnen een ministerie kampte met uitdagingen op het gebied van samenwerking en besluitvorming. DIM begeleidde een intensief teamontwikkelingstraject gericht op openheid, vertrouwen en effectieve samenwerking.</p>
                <p className="text-sm text-muted-foreground" contentEditable><strong>Resultaat:</strong> Merkbare verbetering in teamdynamiek, snellere besluitvorming en gedragen implementatie van strategische plannen.</p>
              </div>
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
