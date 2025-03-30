import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
const AboutPage = () => {
  return <PageLayout>
      {/* Hero Section with Building Image */}
      <section className="container mx-auto px-4 pt-8 md:pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Wie we zijn */}
          <AnimatedSection className="space-y-6" animation="slide-from-left">
            <div>
              <h2 className="text-3xl font-semibold mb-4" contentEditable>Over ons</h2>
              <p className="text-muted-foreground" contentEditable>In 2014 richtte Alexli Gravemeijer DIM op vanuit de ambitie werken aan resultaat op de korte termijn te combineren met lerend vermogen voor de lange termijn. Sindsdien is DIM uitgegroeid tot een netwerkorganisatie van professionals met een brede kennis en ervaring in de (semi-)publieke sector. 

Samen met vooruitstrevende opdrachtgevers werkte DIM de afgelopen jaren aan diverse meerjarige complexe verandertrajecten, samenwerking en conflicthantering in teamontwikkeling en verdere ontwikkeling en meer ontspanning in de vorm van executive coaching. Voor meer impact en meer werkplezier.</p>
            </div>
          </AnimatedSection>

          {/* Right Column - Building Image */}
          <AnimatedSection animation="slide-from-right">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/lovable-uploads/a8c0bfb5-aad8-45d6-b171-1f0b84e6fba3.png" alt="DIM kantoor in Amsterdam" className="w-full h-auto object-cover" />
              <div className="bg-white p-4">
                <p className="text-sm text-muted-foreground italic" contentEditable>
                  Ons kantoor is gevestigd aan de Panamalaan 5f in Amsterdam.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <AnimatedSection className="space-y-8" animation="slide-from-left">
            <div>
              <h2 className="text-3xl font-semibold mb-4" contentEditable>Waar we voor staan</h2>
              <p className="text-muted-foreground mb-4" contentEditable>
                Wij geloven dat organisaties die écht impact maken tegelijkertijd een plek zijn waar mensen met plezier werken. Daarom werken we vanuit de gedachte dat beweging richting effectievere organisaties, meer werkplezier en meer maatschappelijke impact, hand in hand gaan. 
              </p>
              <p className="text-muted-foreground" contentEditable>
                Onze overtuiging is dat ieders streven naar een betere organisatie, echt bijdraagt. 
                Een betere organisatie is niet alleen een organisatie waar effectiever gewerkt wordt, 
                maar ook waar mensen met meer plezier werken.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4" contentEditable>Onze aanpak</h2>
              <p className="text-muted-foreground mb-4" contentEditable>
                Bij DIM hebben we ruime kennis en ervaring van organisatie- en veranderkundige vaardigheden. Onze werkwijze kenmerkt zich door een integrale aanpak, waarbij we gefaseerd naar duurzame oplossingen toewerken. We weten wat werkt. Dat combineren we met een flinke dosis creativiteit en lef. Zo werken we aan interventies die écht impact maken. 
              </p>
              <p className="text-muted-foreground" contentEditable>
                DIM werkt via een integrale benadering aan complexe organisatieopgaven. Hoe meer componenten of perspectieven worden meegenomen, hoe beter de verandering kan landen in de organisatie. Maatwerk is essentieel, we onderzoeken zorgvuldig welke aanpak het beste past.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column - Team Card and Values Card */}
          <AnimatedSection animation="slide-from-right" className="space-y-8">
            {/* Team Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4" contentEditable>Ons team</h3>
                <p className="text-muted-foreground mb-4" contentEditable>
                  DIM bestaat uit een team van zeer ervaren adviseurs met jarenlange ervaring in het publieke domein. 
                  Elk van ons brengt specifieke expertise en ervaring mee.
                </p>
                <p className="text-muted-foreground" contentEditable>
                  We zijn een hecht team van betrokken specialisten. We werken samen, versterken elkaar en dragen allemaal 
                  bij aan onze missie: meer maatschappelijke impact en werkplezier.
                </p>
              </CardContent>
            </Card>

            {/* Values Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4" contentEditable>Onze kernwaarden</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span contentEditable>Moedig - we durven te zeggen wat gezegd moet worden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span contentEditable>Betrokken - we staan naast je en werken samen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span contentEditable>Deskundig - we brengen kennis en ervaring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span contentEditable>Creatief - we denken in nieuwe mogelijkheden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span contentEditable>Effectief - we werken samen aan resultaat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6" contentEditable>Samen werken aan jouw organisatie?</h2>
          <p className="text-lg mb-8" contentEditable>
            Wil je meer weten over hoe DIM jouw organisatie kan helpen? 
            Neem vrijblijvend contact met ons op voor een kennismaking.
          </p>
          <div>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-teal-600 text-white px-8 py-3 hover:bg-teal-700 transition-colors" contentEditable>
              Neem contact op
            </a>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default AboutPage;