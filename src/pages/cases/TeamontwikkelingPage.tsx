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
  
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl font-display font-bold mb-6 md:text-4xl" contentEditable>Case: Teamontwikkeling</h1>
              <h2 className="text-xl font-display text-muted-foreground mb-8" contentEditable>
                Benutten complementariteit, strategische sturing en eenduidig leiderschap
              </h2>
              <p className="text-lg text-muted-foreground" contentEditable>
                Een traject gericht op het versterken van onderlinge samenwerking, werken vanuit impact en de 'bedoeling'.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/fe09139f-a6f4-4bf1-872e-7ef5bb1d3021.png" 
                  alt="Colorful geometric star pattern representing team development" 
                  className="object-cover w-full h-full" 
                  contentEditable
                />
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
    </PageLayout>
  );
};

export default TeamontwikkelingPage;
