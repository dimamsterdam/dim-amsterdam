import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const HerijkingVisieStrategiePage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
      <section id="top" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-display font-bold mb-2 break-words" contentEditable>Case: Herijking visie en strategie</h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6" contentEditable>
                Verbinding creëren tussen directies en medewerkers
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="Strategic vision planning session" className="object-cover w-full h-full" contentEditable />
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
              
              <ul>
                <li contentEditable>Gedeelde visie en werkwijze</li>
                <li contentEditable>Helderheid over de samenhang het DG en de meerwaarde van (meer) onderlinge samenwerking</li>
                <li contentEditable>Concrete doelen en handvatten voor implementatie</li>
                <li contentEditable>Hernieuwde energie en inspiratie voor medewerkers</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Onze aanpak</h2>
              
              <p contentEditable>
                Na een Kick-off met het MT is in samenwerking met vertegenwoordigers van de verschillende directies een 
                analyse gemaakt van de kansen en uitdagingen voor het DG. Met deze analyse als basis zijn circa 5 gemixte 
                bijeenkomsten georganiseerd met medewerkers en management van de verschillende onderdelen.
              </p>
              
              <p contentEditable>
                In deze werksessies is gewerkt aan de herformulering van de visie (bestaansrecht en ambitie) van het DG. 
                Met dezelfde groep mensen die ook betrokken waren bij de analyse zijn de opbrengsten van deze bijeenkomsten 
                uitgewerkt tot concept versie en een aantal beslispunten.
              </p>
              
              <p contentEditable>
                De uitkomsten van de werksessies fungeerden als basis voor een inspirerende bijeenkomst met alle medewerkers 
                van het DG. Hierin zijn de beslispunten op interactieve wijze verdiept en uiteindelijk geslecht. De herijkte 
                visie is gevierd en vormde de basis voor een beknopt strategie-traject.
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