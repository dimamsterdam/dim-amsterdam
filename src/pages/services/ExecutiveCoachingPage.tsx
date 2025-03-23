import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const ExecutiveCoachingPage = () => {
  const testimonials = [{
    quote: "De coaching van DIM heeft mij geholpen om mijn leiderschapsstijl te verdiepen en authentiek te blijven in uitdagende situaties. De combinatie van persoonlijke reflectie en praktische handvatten maakte dit traject bijzonder waardevol.",
    author: "Corine van der Sande",
    role: "Management Development",
    company: "Erasmus Medisch Centrum",
    initials: "CS",
    color: "bg-purple-500/20"
  }, {
    quote: "DIM combineert strategisch inzicht, scherp analytisch vermogen en respectvolle confrontatie met een warme persoonlijkheid. Ze weet in korte tijd een veilig werkklimaat te creëren en zet haar jarenlange ervaring en kennis met wijsheid en humor in.",
    author: "Annemiek van Bolhuis",
    role: "Bestuursvoorzitter",
    company: "ANVS",
    initials: "AB",
    color: "bg-primary/20"
  }, {
    quote: "De executive coaching heeft me niet alleen geholpen als leider, maar ook als persoon. De inzichten en technieken die ik heb geleerd gebruik ik dagelijks en hebben een blijvende impact op mijn effectiviteit en werkplezier.",
    author: "Guido Landheer",
    role: "Directeur/plaatsvervangend DG",
    company: "Ministerie van Buitenlandse Zaken",
    initials: "GL",
    color: "bg-rose-400/20"
  }];
  return <PageLayout>
      {/* Introductie Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Executive Coaching</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Effectiever werken met meer plezier en vanuit meer ontspanning? Samen onderzoeken we welke patronen helpend zijn en waar ruimte ligt voor ontwikkeling. Vanuit een stevige basis werken we parallel aan uitbreiding van het eigen handelingsrepertoire en praktisch resultaat.
              </p>
              <p className="text-lg text-muted-foreground">In onze gesprekken combineren we een stevige theoretische basis, ruime ervaring in het publiek bestuurlijke domein en respectvolle confrontatie in het hier en nu. Wat werkt persoonlijk, in deze specifieke context en hoe ziet dat er concreet uit?</p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Executive Coaching" className="object-cover w-full h-full" />
              </AspectRatio>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Onze werkwijze</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">1. Intake & Verkenning</h3>
                <p>We starten met een grondige intake om jouw coachvraag, context en persoonlijke doelen te verkennen. Eventueel vullen we dit aan met assessments of 360-graden feedback om een compleet beeld te krijgen.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">2. Coachplan</h3>
                <p>Op basis van de intake stellen we samen een persoonlijk coachplan op met concrete doelen, thema's en aanpak. We bepalen de frequentie en duur van de sessies, en hoe we voortgang en resultaat gaan meten.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">3. Coaching Sessies</h3>
                <p>Tijdens individuele coaching sessies werken we aan je persoonlijke ontwikkeldoelen. We combineren reflectie, feedback, theoretische kaders en praktische oefeningen om nieuwe inzichten en gedrag te ontwikkelen.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">4. Praktijkintegratie & Evaluatie</h3>
                <p>Tussen de sessies pas je nieuwe inzichten en gedrag toe in de praktijk. We evalueren regelmatig de voortgang en stellen waar nodig bij. Aan het einde evalueren we het gehele traject en borgen we de resultaten.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Coaching Cases</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Transitie naar strategisch leiderschap</h3>
                <p className="mb-4">Een directeur met een sterke inhoudelijke achtergrond wilde groeien in strategisch leiderschap. In een coachtraject van 8 maanden werkten we aan visievorming, strategische communicatie en het delegeren van operationele taken.</p>
                <p className="text-sm text-muted-foreground"><strong>Resultaat:</strong> De directeur positioneerde zich sterker als strategisch leider, ontwikkelde een inspirerende toekomstvisie en creëerde meer ruimte voor strategische prioriteiten.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Persoonlijke effectiviteit onder druk</h3>
                <p className="mb-4">Een bestuurder ervaarde toenemende druk en stress in zijn rol. In een intensief coachtraject werkten we aan persoonlijk leiderschap, grenzen stellen, prioriteren en energiemanagement.</p>
                <p className="text-sm text-muted-foreground"><strong>Resultaat:</strong> De bestuurder hervond zijn balans, maakte bewustere keuzes in zijn agenda en leiderschapsstijl, en ervaarde meer werkplezier en impact.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Referenties Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Wat coachees zeggen</h2>
            <p className="text-lg text-muted-foreground">
              We hebben verschillende executives begeleid in hun persoonlijke ontwikkeling. Hier zijn enkele ervaringen van onze coachees.
            </p>
          </AnimatedSection>
          
          <TestimonialsBlock testimonials={testimonials} />
        </div>
      </section>
    </PageLayout>;
};
export default ExecutiveCoachingPage;