
import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LeiderschapsprogrammaPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <PageLayout>
      <section id="top" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-display font-bold mb-2 break-words">Case: Leiderschapsprogramma</h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6">
                Sturen op professionele autonomie & impact
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/fb1c2d6e-5d3d-41ff-a91e-5679347148b2.png" 
                    alt="Abstract blue geometric design with overlapping circles" 
                    className="object-cover w-full h-full" 
                  />
                </AspectRatio>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">De uitdaging</h2>
              
              <p>
                Voor een uitvoeringsorganisatie met hoogopgeleide professionals begeleidden DIM een meerjarig leiderschapstraject 
                gericht op het versterken van de professionele autonomie, effectievere sturing en samenwerking met de omgeving. 
                In een combinatie aanpak van leiderschapsontwikkeling en ondersteuning op strategische sturing zijn de volgende doelstellingen gerealiseerd:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Versterken impact dankzij duidelijke koers (missie en strategie), bijbehorende prioriteiten en sturing daarop</li>
                <li>Heldere rollen en verantwoordelijkheden op basis van een effectieve en efficiënte werkwijze</li>
                <li>Eenduidige communicatie en besluitvorming</li>
                <li>Verhogen werkplezier; ervaren waardering, eigenaarschap en professionele autonomie</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">Onze aanpak</h2>
              
              <p>
                In nauwe samenwerking met het bestuur en een regiegroep met vertegenwoordigers van de verschillende managementlagen 
                en bedrijfsvoering is een leiderschapstraject ontwikkeld. Aan de hand van actuele vraagstukken is in verschillende 
                samenstelling o.a. gewerkt aan gezamenlijke doorvertaling van de koers naar concrete doelen en sturing, heldere 
                rolverdeling en verantwoordelijkheden en versterking van vaardigheden op het gebied van samenwerking, leiderschap 
                bij verandering en sturing vanuit professionele autonomie (5R: richting, ruimte, resultaat, rekenschap, relatie).
              </p>
              
              <p className="mt-4">
                Het leiderschapstraject is zo opgezet dat er een continue koppeling met de dagelijkse praktijk werd geborgd dankzij 
                nauwe tussentijdse afstemming met het bestuur en de regiegroep. Daarnaast bood DIM parallel aan het leiderschapstraject 
                ondersteuning op de ontwikkeling van een eenduidig sturingsmodel en versterking van de interne communicatie.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">Ervaringen</h2>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Er is veel gebeurd en veranderd. Doelen en prioriteiten zijn helderder geworden. Dat geeft ook richting aan hoe we willen werken."</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"We hebben mooie stappen gezet in het scherper maken van de taak en rolverdeling."</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Er was echt een kantelmoment dat we meer 'wij werden' als collectief van leidinggevenden, een mooie ontwikkeling om door te zetten."</p>
              </div>
              
              <div className="mt-12 flex justify-center">
                <Link to="/diensten/leiderschapsontwikkeling">
                  <Button className="mx-2">Terug naar leiderschapsontwikkeling</Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>;
};

export default LeiderschapsprogrammaPage;
