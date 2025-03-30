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
            
            {/* Add Alexli Card above the image */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4" contentEditable>Alexli Gravemeijer</h3>
                <p className="text-muted-foreground mb-4" contentEditable>"Als er gelachen wordt zonder confrontaties uit de weg te gaan, 
Kunnen mensen groeien &amp; worden de mooiste resultaten geboekt".</p>
              </CardContent>
            </Card>
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
              
              
              
            </div>

            <div>
              
              
              
            </div>
          </AnimatedSection>

          {/* Right Column - Values Card (removed Alexli's card from here) */}
          <AnimatedSection animation="slide-from-right" className="space-y-8">
            {/* Values Card */}
            <Card>
              
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6" contentEditable>Contact</h2>
          <p className="text-lg mb-8" contentEditable>Ook geïnteresseerd in meer impact &amp; meer werkplezier?
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