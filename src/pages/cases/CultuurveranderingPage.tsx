
import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CultuurveranderingPage = () => {
  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <PageLayout>
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2 break-words md:text-4xl" suppressContentEditableWarning contentEditable>Case: Cultuurverandering</h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6" suppressContentEditableWarning contentEditable>
                Zakelijk sturen op ondernemerschap, innovatie en klanttevredenheid
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img src="/lovable-uploads/9a54680b-ca09-411e-9e0a-6059848cfb98.png" alt="Abstract geometric design representing organizational culture change" className="object-cover w-full h-full" suppressContentEditableWarning contentEditable />
                </AspectRatio>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">De uitdaging</h2>
              <p>
                Een grote uitvoeringsorganisatie met een flinke productie-opgave stond voor een complexe transitie-opgave. 
                Politiek en opdrachtgevers stelden hogere eisen, het aantal vragen steeg, terwijl tegelijkertijd de arbeidsmarkt 
                krapper, en de inzetbaarheid van de markt minder flexibel werd. De context en bovengenoemde ontwikkelingen tezamen 
                zorgden ondermeer voor druk op de kwaliteit van dienstverlening, de kostendekkendheid en verhoogde werkdruk. 
                Verbetering van deze laatste elementen had dan ook prioriteit in de aanpak.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">Onze aanpak</h2>
              <p>DIM organiseerde en begeleidde een 2-jarig programma bestaande uit een leiderschapstraject voor directie, top 30 en top 120 in combinatie met coördinatie en ondersteuning voor de stafonderdelen. 

Allereerst is in samenwerking met vertegenwoordigers uit de organisatie een analyse van de uitgangssituatie gemaakt. Hieruit kwam o.a. naar voren dat de eerdere fusie nog steeds nadrukkelijk zichtbaar was in de organisatie. Onderdelen werkten niet of beperkt samen en stuurden naar 'eigen inzicht'.
            </p>
              
              <p>
Het transitie-traject startte met het gezamenlijk formuleren van een inspirerende ambitie en strategie en de ontwikkeling en implementatie van een helder sturingsmodel. Hiermee werd zowel gewerkt aan een zakelijk instrumentarium en concrete prioriteiten (zogenaamde 'gamechangers'), als onderlinge verbinding en betekenisgeving t.a.v. de doelen van de organisatie.</p>
              
              <p>
De implementatie van de strategie is ondersteund met een leiderschapstraject voor de top 140. In zowel homogene groepen van de verschillende management-niveaus, als in gezamenlijke bijeenkomsten met alle niveaus is gewerkt aan het versterken van individuele en gezamenlijke leiderschapsvaardigheden, zoals omgaan met dilemma's, ontwikkelgericht sturen, situationeel leiderschap en werken vanuit heldere rollen en verantwoordelijkheden, omgaan met weerstand, overtuigen en inspireren.

Het leiderschapstraject werd bekrachtigd, dankzij de directe verbinding met (sturing in) het dagelijks werk en aanvullende tussentijdse bredere (online) activiteiten interventies.
            </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">Wat klanten zeggen</h2>
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Sterke combinatie van analytisch inzicht en pragmatisch en doelgericht aanpakken".</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Prettige samenwerking, mede dankzij merkbare ruime ervaring bij zowel uitvoeringsorganisaties als departementen".</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"De combinatie leiderschapsontwikkeling met concrete interventies en sturing in de praktijk was heel effectief."</p>
              </div>
              
              <div className="mt-12 flex justify-center">
                <Link to="/diensten/organisatieontwikkeling">
                  <Button className="mx-2">Terug naar organisatieontwikkeling</Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>;
};

export default CultuurveranderingPage;
