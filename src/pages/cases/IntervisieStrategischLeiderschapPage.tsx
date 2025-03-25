import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IntervisieStrategischLeiderschapPage = () => {
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
                Case: Intervisie strategisch & verbindend leiderschap
              </h1>
              <h2 className="text-xl font-display text-muted-foreground mb-8" contentEditable>
                Gelegenheid voor top-leidinggevenden om op niveau te sparren over casuïstiek
              </h2>
              <p className="text-lg text-muted-foreground" contentEditable>
                Leiderschap op top-niveau kent veel complexe en veelal ethische uitdagingen met relatief weinig gelegenheid om hierover te sparren met anderen.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden shadow-lg">
                <img src="/lovable-uploads/a3827aae-161f-4691-9861-342c6281309d.png" alt="Pink organizational matrix with diagonal striped panels representing strategic leadership" className="object-cover w-full h-full" contentEditable />
              </AspectRatio>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="top" className="relative py-8 md:py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              
              
              
              <div className="mt-10 mb-12">
                
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>De uitdaging</h2>
              
              <p contentEditable>
                Leiderschap op top-niveau kent veel complexe en veelal ethische uitdagingen met relatief weinig gelegenheid 
                om hierover te sparren met anderen. Deze hoog professionele organisatie faciliteert strategisch en verbindend 
                leiderschap via ondermeer reguliere intervisie-bijeenkomsten. De intervisie-bijeenkomsten bieden top-leidinggevenden 
                de gelegenheid op niveau te sparren over casuïstiek. Daarnaast dragen de bijeenkomsten bij aan meer verbinding 
                en eenduidigheid in werkwijze onder de top-leidinggevenden van de organisatie.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Onze aanpak</h2>
              
              <p contentEditable>
                In groepen van circa 8 deelnemers op strategisch niveau worden jaarlijks meerdere intervisie-bijeenkomsten georganiseerd. 
                Deelnemers bereiden altijd allen persoonlijk casuïstiek voor en maken gezamenlijk keuzes voor de bespreking. 
                Hierbij wordt gewerkt volgens een bewezen effectief format waarin de balans wordt gezocht tussen een informele 
                en ontspannen sfeer en tegelijkertijd een constructieve en op z'n tijd scherp gesprek.
              </p>
              
              <p className="mt-4" contentEditable>
                De casuïstiek wordt verdiept door middel van de bespreking en toepassing van wetenschappelijke achtergrondartikelen 
                op het gebied van bijvoorbeeld conflicthantering, teamontwikkeling, procesmanagement, gesprekstechnieken en ethiek.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-8 mb-4" contentEditable>Ervaringen</h2>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100 relative">
                <blockquote className="text-lg md:text-xl font-medium italic text-gray-700 relative" contentEditable>
                  <span className="relative z-10">"Ik zie uit naar deze bijeenkomsten. Het dwingt me tot reflectie en de reflectie en adviezen van anderen zijn echt helpend"</span>
                  <div className="absolute -left-4 -top-4 w-10 h-10 bg-primary/10 rounded-full opacity-30 -z-10"></div>
                </blockquote>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100 relative">
                <blockquote className="text-lg md:text-xl font-medium italic text-gray-700 relative" contentEditable>
                  <span className="relative z-10">"Leidinggeven is ook best eenzaam. Het is enorm waardevol om een plek te hebben waar ik open kan spreken"</span>
                  <div className="absolute -left-4 -top-4 w-10 h-10 bg-primary/10 rounded-full opacity-30 -z-10"></div>
                </blockquote>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100 relative">
                <blockquote className="text-lg md:text-xl font-medium italic text-gray-700 relative" contentEditable>
                  <span className="relative z-10">"De artikelen geven een mooie verdieping. Dit soort dingen kom ik anders niet tegen en vind ik erg leerzaam"</span>
                  <div className="absolute -left-4 -top-4 w-10 h-10 bg-primary/10 rounded-full opacity-30 -z-10"></div>
                </blockquote>
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

export default IntervisieStrategischLeiderschapPage;
