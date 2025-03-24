import PageLayout from "@/components/PageLayout";
import SimpleTestimonialBlock from "@/components/SimpleTestimonialBlock";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import StepCard from "@/components/StepCard";
const ExecutiveCoachingPage = () => {
  const testimonials = [{
    quote: "Alexli is altijd onderzoekend en confronterend waar nodig. Ieder gesprek heeft mij gescherpt op zowel persoonlijk als professioneel vlak."
  }, {
    quote: "Als ik deze coaching niet had gedaan, had de afdeling er nu heel anders bijgezeten. Haar ervaring heeft op directie- en bestuursniveau vergemakkelijkt en versnelt het gesprek. Dit heeft mij echt geholpen een heel lastige situatie in onze organisatie in goede banen te leiden."
  }, {
    quote: "Sommige dingen heb je heus wel een keer geleerd, maar Alexli laat je ervaren wat je daadwerkelijk zelf dóet en hoe dat doorwerkt in je leiderschap. Soms pijnlijk, altijd leerzaam en gelukkig ook met humor."
  }];
  return <PageLayout>
      {/* Introductie Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl font-display font-bold mb-6 md:text-4xl">Executive Coaching</h1>
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
            <h2 className="text-3xl font-display font-bold mb-6">Werkwijze</h2>
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                In de loop van hun leven en loopbaan ontwikkelen mensen overtuigingen en vaardigheden, die hen hebben geholpen hun huidige positie te bereiken. Hierin ligt een grote persoonlijke kracht, die is gekoppeld aan het ervaren succes. Een positieve uitkomst van gedrag zorgt voor herhaling en routine. Deze combinatie leidt tot onbewuste patronen die behulpzaam zijn, maar tegelijkertijd ook belemmerend kunnen werken.
              </p>
              
              <p className="text-muted-foreground mb-4">Hierbij valt bijvoorbeeld te denken aan:</p>
              
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Beperkt zicht op alternatieve mogelijkheden om te reageren of initiatief te nemen,</li>
                <li>Vasthouden van patronen die voorheen noodzakelijk waren, maar dat inmiddels niet langer zijn en nog wel energie kosten of zelfs beperkend werken,</li>
                <li>Een vertekend beeld van dat wat wordt gewaardeerd of noodzakelijk is. Bijv. een verschil tussen wat je vindt dat je moet doen en wat anderen daadwerkelijk van je verwachten.</li>
              </ul>
              
              <p className="text-muted-foreground mt-4">
                Op basis van de wens van de coachee wordt ingezoomd op hoe persoonlijke effectiviteit en energie kan worden vergroot.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Voorbeeld Traject Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Voorbeeld traject</h2>
            <p className="text-muted-foreground mb-8">Gemiddeld behelst een coachingstraject een intake en een vijftal (online) gesprekken van circa 1,5 uur. Afhankelijk van de wensen en de concrete situatie kan worden besloten tot een verlenging. Globaal kent het traject de volgende drie stappen:</p>
            
            <div className="space-y-8 relative before:content-[''] before:absolute before:top-[3.5rem] before:bottom-[3.5rem] before:left-7 before:w-[2px] before:bg-gray-200 md:before:hidden">
              <StepCard number={1} title="Klikgesprek & Intake">
                <p className="mb-4">Naast kennis en ervaring is de effectiviteit van coaching in belangrijke mate afhankelijk van vertrouwen en een persoonlijke klik. Onze trajecten starten dan ook altijd met een (online) vrijblijvende kennismaking.</p>
                
                <p>Ontwikkeling, zelfreflectie en experimenteren met nieuwe perspectieven en gedrag vergen energie. Een effectieve investering in persoonlijke ontwikkeling start dan ook met een helder doel vanuit de coachee. Onze begeleiding is gericht op de formulering van een doel dat concreet, haalbaar en positief is. Ons uitgangspunt is dat ontwikkeling ontstaat vanuit kracht en een stevige basis. De focus in onze benadering ligt dan ook op bijleren en ontwikkelen en niet zozeer op 'afleren'.</p>
              </StepCard>
              
              <StepCard number={2} title="Coachingstraject; vergroten handelingsrepertoire">
                <p>Aan de hand van gerichte verkenning van de persoonlijke biografie van de coachee en het herkennen van patronen, worden concrete praktijksituaties nader onderzocht. Wat speelt hier, welke patronen spelen hier mogelijk mee, welke (andere) mogelijkheden zijn er om deze situatie te zien en te benaderen? In deze gesprekken worden kennis en ervaring met uitdagingen op bestuurs- en directieniveau gecombineerd met kennis van persoonlijke en leiderschapsontwikkeling. Afhankelijk van de concrete situaties worden de gesprekken ondersteund met beknopte theoretische duiding en achtergrond artikelen.</p>
              </StepCard>
              
              <StepCard number={3} title="Evaluatie en doorkijk vervolg">
                <p>In een afsluitend gesprek wordt de ontwikkeling gedurende het traject besproken en wordt gekeken hoe opgedane inzichten en vaardigheden kunnen worden geborgd. In het verlengde hiervan wordt ook de waarde van het traject geëvalueerd.</p>
              </StepCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ervaringen Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Ervaringen</h2>
            
          </AnimatedSection>
          
          <SimpleTestimonialBlock testimonials={testimonials} />
        </div>
      </section>
    </PageLayout>;
};
export default ExecutiveCoachingPage;