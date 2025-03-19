
import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";

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
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Leiderschaps- & Teamontwikkeling</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Effectief leiderschap en sterke teams vormen de basis van elke succesvolle organisatie. Bij DIM begeleiden we leiders en teams om hun volledige potentieel te bereiken.
            </p>
            <p className="text-lg text-muted-foreground">
              Onze programma's voor leiderschaps- en teamontwikkeling zijn maatwerk en combineren persoonlijke groei met organisatieontwikkeling. We focussen op duurzame gedragsverandering die direct bijdraagt aan betere resultaten.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Onze werkwijze</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">1. Assessment & Inzicht</h3>
                <p>We starten met een grondige assessment van leiderschapskwaliteiten en teamdynamiek. Door 360-graden feedback, psychologische assessments en teamdiagnoses krijgen we inzicht in sterktes, ontwikkelpunten en het ontwikkelpotentieel.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">2. Ontwikkelplan</h3>
                <p>Op basis van de assessment maken we een persoonlijk ontwikkelplan voor de leider en/of een collectief ontwikkelplan voor het team. Hierin staan concrete leerdoelen, ontwikkelactiviteiten en verwachte resultaten.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">3. Leerinterventies</h3>
                <p>We implementeren een mix van leerinterventies zoals workshops, coaching, intervisie, learning-on-the-job en reflectiemomenten. De nadruk ligt op praktische toepasbaarheid en het creëren van nieuwe inzichten en gedrag.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">4. Verankering & Follow-up</h3>
                <p>Leren en ontwikkelen is een continu proces. We zorgen voor verankering in de dagelijkse praktijk en bieden follow-up sessies om de ontwikkeling duurzaam te maken en nieuwe uitdagingen aan te gaan.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Succesvolle cases</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Leiderschapsontwikkeling bij medisch centrum</h3>
                <p className="mb-4">Een academisch medisch centrum wilde de leiderschapskwaliteiten van afdelingshoofden versterken. DIM ontwikkelde een maatwerkprogramma gericht op persoonlijk leiderschap, verandermanagement en strategische communicatie.</p>
                <p className="text-sm text-muted-foreground"><strong>Resultaat:</strong> Hogere medewerkerstevredenheid, verbeterde interdisciplinaire samenwerking en effectievere implementatie van veranderingen.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Teamontwikkeling bij ministerie</h3>
                <p className="mb-4">Een directieteam binnen een ministerie kampte met uitdagingen op het gebied van samenwerking en besluitvorming. DIM begeleidde een intensief teamontwikkelingstraject gericht op openheid, vertrouwen en effectieve samenwerking.</p>
                <p className="text-sm text-muted-foreground"><strong>Resultaat:</strong> Merkbare verbetering in teamdynamiek, snellere besluitvorming en gedragen implementatie van strategische plannen.</p>
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
