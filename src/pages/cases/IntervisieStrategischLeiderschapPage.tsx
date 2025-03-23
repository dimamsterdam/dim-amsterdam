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
      <section id="top" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-display font-bold mb-2 break-words" contentEditable>Case: Intervisie strategisch & verbindend leiderschap</h1>
              <h2 className="text-xl sm:text-2xl font-display text-gray-700 mb-6" contentEditable>
                Gelegenheid voor top-leidinggevenden om op niveau te sparren over casuïstiek
              </h2>
              
              <div className="mt-10 mb-12">
                <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden rounded-lg shadow-md">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2940&auto=format&fit=crop" alt="Strategic leadership intervision" className="object-cover w-full h-full" contentEditable />
                </AspectRatio>
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
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Ik zie uit naar deze bijeenkomsten. Het dwingt me tot reflectie en de reflectie en adviezen van anderen zijn echt helpend"</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"Leidinggeven is ook best eenzaam. Het is enorm waardevol om een plek te hebben waar ik open kan spreken"</p>
              </div>
              
              <div className="bg-white p-6 my-6 rounded-xl shadow-sm border border-gray-100">
                <p className="italic mb-0" contentEditable>"De artikelen geven een mooie verdieping. Dit soort dingen kom ik anders niet tegen en vind ik erg leerzaam"</p>
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