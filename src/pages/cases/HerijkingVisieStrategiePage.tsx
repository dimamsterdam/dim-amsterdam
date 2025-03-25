import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
const HerijkingVisieStrategiePage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl font-display font-bold mb-6 md:text-4xl" contentEditable>
                Herijking visie en strategie
              </h1>
              <h2 className="text-xl font-display text-muted-foreground mb-8" contentEditable>
                Verbinding creëren tussen directies en medewerkers
              </h2>
              <p className="text-lg text-muted-foreground" contentEditable>
                Een traject gericht op het versterken van onderlinge samenwerking, werken vanuit impact en de 'bedoeling'.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden shadow-lg">
                <img src="/lovable-uploads/14fa39b5-bc11-44a3-bfc6-bb520bf158ce.png" alt="Strategic vision and strategy geometric design" className="object-cover w-full h-full" contentEditable />
              </AspectRatio>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="top" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>De uitdaging</h2>
              
              <p contentEditable>Een Directoraat-generaal (DG) constateerde dat de verschillende directies in de praktijk weinig samenwerkten en regels en procedures de overhand leken te hebben boven de beoogde publieke waarde.

            </p>
              
              <p contentEditable>DIM heeft een traject opgesteld gericht op het versterken van de onderlinge samenwerking en werken vanuit impact en de 'bedoeling'. Het DG was ontstaan vanuit een fusie van directies van verschillende ministeries. Doel van het traject was met waardering van de eerdere achtergrond een hernieuwde start te maken met het nieuwe DG.

            </p>
              
              <p contentEditable>Samengevat diende het traject de volgende resultaten te boeken:</p>
              
              <ul className="space-y-3 bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                <li className="flex items-center space-x-3" contentEditable>
                  <CheckCircle2 className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">Gedeelde visie en werkwijze</span>
                </li>
                <li className="flex items-center space-x-3" contentEditable>
                  <CheckCircle2 className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">Helderheid over de samenhang het DG en de meerwaarde van (meer) onderlinge samenwerking</span>
                </li>
                <li className="flex items-center space-x-3" contentEditable>
                  <CheckCircle2 className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">Concrete doelen en handvatten voor implementatie</span>
                </li>
                <li className="flex items-center space-x-3" contentEditable>
                  <CheckCircle2 className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">Hernieuwde energie en inspiratie voor medewerkers</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Onze aanpak</h2>
              
              <p contentEditable>Na een Kick-off met het MT is in samenwerking met vertegenwoordigers van de verschillende directies een analyse gemaakt van de kansen en uitdagingen voor het DG. Met deze analyse als basis zijn circa 5 gemixte bijeenkomsten georganiseerd met medewerkers en management van de verschillende onderdelen.</p>
              
              <p contentEditable>In deze werksessies is gewerkt aan de herformulering van de visie (bestaansrecht en ambitie) van het DG. Met dezelfde groep mensen die ook betrokken waren bij de analyse zijn de opbrengsten van deze bijeenkomsten uitgewerkt tot concept versie en een aantal beslispunten.</p>
              
              <p contentEditable>De uitkomsten van de werksessies fungeerden als basis voor een inspirerende bijeenkomst met alle medewerkers van het DG. Hierin zijn de beslispunten op interactieve wijze verdiept en uiteindelijk geslecht. De herijkte visie is gevierd en vormde de basis voor een beknopt strategie-traject.</p>
              
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