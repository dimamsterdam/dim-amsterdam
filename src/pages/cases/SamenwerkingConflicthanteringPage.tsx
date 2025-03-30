
import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SamenwerkingConflicthanteringPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <PageLayout>
      <section id="top" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2 break-words md:text-4xl">Case: Samenwerking & Conflicthantering</h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6">
                Verbeteren van relaties tussen afdelingen en mensen
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/e7ae05c1-0045-4921-a819-7ba26c3bd89e.png" 
                    alt="Abstract geometric design with orange, white, and pink colors featuring circular and starburst elements" 
                    className="object-cover w-full h-full" 
                  />
                </AspectRatio>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">De uitdaging</h2>
              
              <p>
                Een Zelfstandig Bestuursorgaan (ZBO) kampte met flinke achterstanden in de productie en een scherp en zich verdiepend conflict tussen twee organisatie-onderdelen. DIM werd gevraagd een aanpak te ontwerpen, opdat de organisatie gezamenlijk weer effectief kon functioneren. Op basis van enkele gesprekken met de bestuurder zijn de volgende doelstellingen afgesproken:
              </p>
              
              <ul className="list-disc pl-6 my-4">
                <li>Meer inzicht in elkaars werk & versterken onderling begrip</li>
                <li>Verheldering onderlinge rollen en verantwoordelijkheden</li>
                <li>Oefenen met vastgestelde rollen & verantwoordelijkheden</li>
                <li>Aanvulling en eventuele aanscherping van de realisatie van de beoogde organisatie-ontwikkeling</li>
              </ul>
              
              <p>
                Kern van het eerste deel van het traject betrof het verhelderen en verbeteren van de onderlinge werkverhouding en taakverdeling tussen de organisatie-onderdelen. In het tweede deel van het traject lag de focus op de implementatie en borgen van de gemaakte afspraken en werkwijze conform het reeds eerder ingezet organisatie-ontwikkeltraject.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">Onze aanpak</h2>
              
              <p>
                DIM ontwikkelde een beknopte aanpak van enkele bijeenkomsten. De opzet en begeleiding van de bijeenkomsten werden bewust en nadrukkelijk gekenmerkt door een afwisseling in interventie-niveaus: inhoud, reflectie op proces en doorvertaling naar eigen rol en vaardigheden.
              </p>
              
              <p>
                In het eerste deel werd aan de hand van een strakke methodiek een verdiepend en waarderend gesprek gevoerd in kleinere groepjes. Hiermee werd het onderling begrip versterkt en was er meer ruimte om naar elkaar te luisteren. Vervolgens zijn de knelpunten in een plenair gesprek verder onderzocht en 'afgepeld'. Op basis van meer inzicht in ieders overwegingen en intenties zijn excuses uitgesproken en gezamenlijke belangen en standpunten 'ontdekt'.
              </p>
              
              <p>
                In een vervolgbijeenkomst is teruggegrepen op de start en is de tussenliggende periode geëvalueerd. Na de gezamenlijke intenties opnieuw te hebben erkend, zijn concrete inhoudelijke vervolgstappen geformuleerd. Deze zijn geconcretiseerd met behulp van de bespreking van zogenaamde (voorbereide en spontane) 'critical cases'; concrete situaties waar in de conflicten in de praktijk ontstonden. De gezamenlijke afspraken zijn hiermee verder aangescherpt en verankerd.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">Wat klanten zeggen</h2>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Er zijn pittige momenten tijdens de bijeenkomsten geweest, maar deze openheid maakt ons sterker voor de toekomst"</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Ik ben erg tevreden, we zijn echt aan het bouwen geweest"</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Ik denk dat het echte gesprek is gevoerd en ben daarom blij. Het is minder wij/zij en meer wij/wij"</p>
              </div>
              
              <div className="mt-12 flex justify-center">
                <Link to="/diensten/organisatieontwikkeling#top">
                  <Button className="mx-2">Terug naar organisatieontwikkeling</Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>;
};

export default SamenwerkingConflicthanteringPage;
