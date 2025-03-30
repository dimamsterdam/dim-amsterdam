
import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { servicesContent } from "@/content/heroContent";
import { CheckCircle } from "lucide-react";

const HerijkingVisieStrategiePage = () => {
  // Find the executive coaching content from the services array
  const executiveCoachingContent = servicesContent.services.find(
    (service) => service.title === "Executive coaching"
  );

  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <PageLayout>
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2 break-words md:text-4xl" suppressContentEditableWarning contentEditable>Case: Herijking Visie & Strategie</h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6" suppressContentEditableWarning contentEditable>
                Van strategie naar executiekracht
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/a0c5f7f9-27a9-4116-9e3f-f9ff53e7f038.png" 
                    alt="Abstract blue geometric design representing strategic vision and collaboration" 
                    className="object-cover w-full h-full" 
                    suppressContentEditableWarning 
                    contentEditable 
                  />
                </AspectRatio>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>De uitdaging</h2>
              
              <p contentEditable>Een Directoraat-generaal (DG) constateerde dat de verschillende directies in de praktijk weinig samenwerkten en regels en procedures de overhand leken te hebben boven de beoogde publieke waarde.

            </p>
              
              <p contentEditable>DIM heeft een traject opgesteld gericht op het versterken van de onderlinge samenwerking en werken vanuit impact en de 'bedoeling'. Het DG was ontstaan vanuit een fusie van directies van verschillende ministeries. Doel van het traject was met waardering van de eerdere achtergrond een hernieuwde start te maken met het nieuwe DG.

            </p>
              
              <p contentEditable>Samengevat diende het traject de volgende resultaten te boeken:</p>
              
              <ul className="space-y-3 bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                <li className="flex items-center space-x-3" contentEditable>
                  <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">Gedeelde visie en werkwijze</span>
                </li>
                <li className="flex items-center space-x-3" contentEditable>
                  <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">Helderheid over de samenhang het DG en de meerwaarde van (meer) onderlinge samenwerking</span>
                </li>
                <li className="flex items-center space-x-3" contentEditable>
                  <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">Concrete doelen en handvatten voor implementatie</span>
                </li>
                <li className="flex items-center space-x-3" contentEditable>
                  <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">Hernieuwde energie en inspiratie voor medewerkers</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Onze aanpak</h2>
              
              <p contentEditable>Na een Kick-off met het MT is in samenwerking met vertegenwoordigers van de verschillende directies een analyse gemaakt van de kansen en uitdagingen voor het DG. Met deze analyse als basis zijn circa 5 gemixte bijeenkomsten georganiseerd met medewerkers en management van de verschillende onderdelen.

            </p>
              
              <p contentEditable>In deze werksessies is gewerkt aan de herformulering van de visie (bestaansrecht en ambitie) van het DG. Met dezelfde groep mensen die ook betrokken waren bij de analyse zijn de opbrengsten van deze bijeenkomsten uitgewerkt tot concept versie en een aantal beslispunten.

            </p>
              
              <p contentEditable>De uitkomsten van de werksessies fungeerden als basis voor een inspirerende bijeenkomst met alle medewerkers van het DG. Hierin zijn de beslispunten op interactieve wijze verdiept en uiteindelijk geslecht. De herijkte visie is gevierd en vormde de basis voor een beknopt strategie-traject.

            </p>
              
              <p contentEditable>
                Wederom in nauwe samenwerking met de opdrachtgever zijn de strategische uitgangspunten en concrete doelen 
                voor de komende 5 jaar geformuleerd.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Wat klanten zeggen</h2>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Inspirerend om te zien hoeveel we met elkaar gemeen hebben! Ik zie uit naar de resultaten die we gezamenlijk kunnen gaan boeken"</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Prettig hoe DIM zich verdiept in de inhoud van ons werk en ons zo op een positieve manier scherp houdt"</p>
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

export default HerijkingVisieStrategiePage;
