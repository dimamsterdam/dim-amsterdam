import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const TeamontwikkelingPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
      <section id="top" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-display font-bold mb-2 break-words" contentEditable>Case: Teamontwikkeling</h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6" contentEditable>
                Benutten complementariteit, strategische sturing en eenduidig leiderschap
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" alt="Team development" className="object-cover w-full h-full" contentEditable />
                </AspectRatio>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>De uitdaging</h2>
              
              <p contentEditable>
                Een Directoraat-generaal heeft in korte tijd meerdere nieuwe directeuren, die gezamenlijk bovendien voor een grote opgave staan. 
                De Directeur-generaal vraagt DIM voor (versnelde) teamontwikkeling en het formuleren van een gezamenlijke ambitie.
              </p>
              
              <p className="mt-4" contentEditable>
                In overleg met de Directeur-Generaal zijn de volgende doelstellingen voor het traject geformuleerd:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li contentEditable>Investeren in onderlinge kennismaking op zowel persoonlijk als professioneel vlak</li>
                <li contentEditable>Inventariseren en concretiseren benutten van onderlinge complementariteit</li>
                <li contentEditable>Bepalen gezamenlijke richting en fundamentele keuzes voor het DG</li>
                <li contentEditable>Bepalen gezamenlijke wijze van sturen en doorvertaling naar praktische inrichting strategisch MT-overleg</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Onze aanpak</h2>
              
              <p contentEditable>
                Op basis van individuele gesprekken met de verschillende directeuren ontwierp DIM een traject bestaande uit 
                een aantal bijeenkomsten gedurende circa een half jaar. Iedere bijeenkomst werd gekenmerkt door aandacht voor 
                drie perspectieven en de onderlinge wisselwerking hiertussen, te weten:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li contentEditable>Persoonlijk niveau: levensverhalen, voorkeursstijlen, ambities, kwaliteiten, allergieën en ontwikkel-punten</li>
                <li contentEditable>Team-niveau: complementariteit, feedback, dialoog, onderlinge verhoudingen en dynamiek</li>
                <li contentEditable>Organisatie-niveau: kansen en uitdagingen t.a.v. de maatschappelijke opgave (visie, strategie, sturing), interne (inter)departementale dynamiek en politiek-ambtelijke verhoudingen</li>
              </ul>
              
              <p className="mt-4" contentEditable>
                Het traject startte met de focus op persoonlijke kennismaking, onderlinge verbinding en teamontwikkeling middels 
                ondermeer het delen van levensverhalen en MBTI (voorkeursstijlen). Vervolgens is het accent verlegd naar de 
                organisatie-opgaven en de wijze waarop de teamdynamiek hier het meest ondersteunend aan kon bijdragen.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Ervaringen</h2>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"De bijeenkomsten kenden een prettige en effectieve balans tussen aandacht voor de persoon en een zakelijke resultaatgerichtheid".</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"De investering in het begin heeft ons echt heeft geholpen vanaf de start als eenheid op te treden".</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Zeker nuttige bijeenkomsten en niet onbelangrijk; ook met humor en de nodige ontspanning!".</p>
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
    </PageLayout>;
};
export default TeamontwikkelingPage;