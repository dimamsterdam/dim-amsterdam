
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

  return (
    <PageLayout>
      <section id="top" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-display font-bold mb-2 break-words" contentEditable>
                Leiderschapsprogramma
              </h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6" contentEditable>
                Sturen op professionele autonomie & impact
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" 
                    alt="Leadership program" 
                    className="object-cover w-full h-full"
                    contentEditable
                  />
                </AspectRatio>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>De uitdaging</h2>
              
              <p contentEditable>
                Voor een uitvoeringsorganisatie met hoogopgeleide professionals begeleidden DIM een meerjarig leiderschapstraject 
                gericht op het versterken van de professionele autonomie, effectievere sturing en samenwerking met de omgeving. 
                In een combinatie aanpak van leiderschapsontwikkeling en ondersteuning op strategische sturing zijn de volgende doelstellingen gerealiseerd:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li contentEditable>Versterken impact dankzij duidelijke koers (missie en strategie), bijbehorende prioriteiten en sturing daarop</li>
                <li contentEditable>Heldere rollen en verantwoordelijkheden op basis van een effectieve en efficiënte werkwijze</li>
                <li contentEditable>Eenduidige communicatie en besluitvorming</li>
                <li contentEditable>Verhogen werkplezier; ervaren waardering, eigenaarschap en professionele autonomie</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Onze aanpak</h2>
              
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
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Ervaringen</h2>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Er is veel gebeurd en veranderd. Doelen en prioriteiten zijn helderder geworden. Dat geeft ook richting aan hoe we willen werken."</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"We hebben mooie stappen gezet in het scherper maken van de taak en rolverdeling."</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Er was echt een kantelmoment dat we meer 'wij werden' als collectief van leidinggevenden, een mooie ontwikkeling om door te zetten."</p>
              </div>
              
              <div className="mt-12 flex justify-center">
                <Link to="/diensten/leiderschapsontwikkeling#cases">
                  <Button className="mx-2">Terug naar leiderschapsontwikkeling</Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LeiderschapsprogrammaPage;
