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
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2 break-words md:text-4xl" contentEditable>Case: Samenwerking & Conflicthantering</h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6" contentEditable>
                Verbeteren van relaties tussen afdelingen en mensen
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=2940&auto=format&fit=crop" alt="Team collaborating on conflict resolution" className="object-cover w-full h-full" contentEditable />
                </AspectRatio>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>De uitdaging</h2>
              
              <p contentEditable>
                Een ZBO kampte met forse achterstanden en een conflict tussen verschillende afdelingen. 
                Betrokken directeuren raakten verstrikt in de dynamiek. DIM werd gevraagd te helpen bij het doorbreken 
                van deze patstelling, ten behoeve van betere samenwerking tussen de afdelingen en de 
                betrokken medewerkers en een kwaliteitsimpuls in het functioneren.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Onze aanpak</h2>
              
              <p contentEditable>DIM ontwikkelde een (tijdelijke) rolverdeling voor de aansturing en toezicht van de verschillende afdelingen. In nauwe samenwerking met de opdrachtgever werd de aanpak op maat ontwikkeld gericht op 5 pijlers.

            </p>
              
              <ol>
                <li contentEditable>
                  <strong>Versterken van begrip.</strong> Gericht op inzicht in elkaars positie, 
                  perspectieven en belangen. Niet om het eens te zijn met elkaar, wel om elkaar 
                  te begrijpen en snappen waarom handelen zoals ze handelen.
                </li>
                <li contentEditable>
                  <strong>Opruimen van het verleden.</strong> Ruimte voor eerdere pijn en frustraties én 
                  voor het markeren van een nieuw begin.
                </li>
                <li contentEditable>
                  <strong>Heldere rollen en verantwoordelijkheden.</strong> Welke besluiten liggen bij wie? 
                  Op welke manier informeren we elkaar en hoe nemen we gezamenlijk besluiten? 
                  Hoeveel ruimte voor eigen invulling en wie heeft wanneer doorzettingsmacht?
                </li>
                <li contentEditable>
                  <strong>Integraal proces ontwerp.</strong> Werk komt van A naar B naar C, met een heldere keten 
                  waar elke met een klantgerichte bril naar elkaar kijkt.
                </li>
                <li contentEditable>
                  <strong>Ontwikkelen en implementeren interventiemix.</strong> Voor het oplossen van de belangrijkste 
                  knelpunten specifieke interventies uitwerken.
                </li>
              </ol>
              
              <p contentEditable>
                Vanuit een inhoudelijk startpunt, namelijk het bespreken welke knelpunten er in de inhoudelijke 
                samenwerking zijn, werden de relaties tussen mensen verbeterd. De sterke focus op inhoud en processen 
                zorgde dat het voor de betrokkenen ook veilig was om mee te doen. De resultaten hebben wij laten monitoren 
                en de effecten waren meteen zichtbaar in de verbetering van prestatie-indicatoren en terugkoppeling van 
                medewerkers en leidinggevenden.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Wat klanten zeggen</h2>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Helder proces, met zichtbare resultaten op korte én langere termijn. Fijn dat er ook een tussentijdse evaluatie en terugkoppeling was ingebouwd".</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Voelde en zag meteen dat de druk er af ging en er weer ruimte en energie kwam voor inhoudelijke gesprekken".</p>
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