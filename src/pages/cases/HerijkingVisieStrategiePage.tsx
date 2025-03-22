
import React from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HerijkingVisieStrategiePage = () => {
  return (
    <PageLayout>
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 break-words">
                Herijking visie en strategie
              </h1>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" 
                    alt="Strategic vision planning session" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">De uitdaging</h2>
              <p>
                Een Directoraat-generaal (DG) constateerde dat de verschillende directies in de praktijk weinig samenwerkten 
                en regels en procedures de overhand leken te hebben boven de beoogde publieke waarde. DIM heeft een traject 
                opgesteld gericht op het versterken van de onderlinge samenwerking en werken vanuit impact en de 'bedoeling'. 
                Het DG was ontstaan vanuit een fusie van directies van verschillende ministeries. Doel van het traject was met 
                waardering van de eerdere achtergrond een hernieuwde start te maken met het nieuwe DG.
              </p>
              
              <p>Samengevat diende het traject de volgende resultaten te boeken:</p>
              <ul>
                <li>Gedeelde visie en werkwijze</li>
                <li>Helderheid over de samenhang het DG en de meerwaarde van (meer) onderlinge samenwerking</li>
                <li>Concrete doelen en handvatten voor implementatie</li>
                <li>Hernieuwde energie en inspiratie voor medewerkers</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">Onze aanpak</h2>
              <p>
                Na een Kick-off met het MT is in samenwerking met vertegenwoordigers van de verschillende directies een 
                analyse gemaakt van de kansen en uitdagingen voor het DG. Met deze analyse als basis zijn circa 5 gemixte 
                bijeenkomsten georganiseerd met medewerkers en management van de verschillende onderdelen. In deze werksessies 
                is gewerkt aan de herformulering van de visie (bestaansrecht en ambitie) van het DG. Met dezelfde groep mensen 
                die ook betrokken waren bij de analyse zijn de opbrengsten van deze bijeenkomsten uitgewerkt tot concept versie 
                en een aantal beslispunten.
              </p>
              
              <p>
                De uitkomsten van de werksessies fungeerden als basis voor een inspirerende bijeenkomst met alle medewerkers 
                van het DG. Hierin zijn de beslispunten op interactieve wijze verdiept en uiteindelijk geslecht. De herijkte 
                visie is gevierd en vormde de basis voor een beknopt strategie-traject. Wederom in nauwe samenwerking met de 
                opdrachtgever zijn de strategische uitgangspunten en concrete doelen voor de komende 5 jaar geformuleerd.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4">Wat klanten zeggen</h2>
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Inspirerend om te zien hoeveel we met elkaar gemeen hebben! Ik zie uit naar de resultaten die we gezamenlijk kunnen gaan boeken"</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0">"Prettig hoe DIM zich verdiept in de inhoud van ons werk en ons zo op een positieve manier scherp houdt"</p>
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
    </PageLayout>
  );
};

export default HerijkingVisieStrategiePage;
