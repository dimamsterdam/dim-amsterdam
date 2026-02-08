
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
              <h2 className="text-3xl font-semibold mb-4">Over ons</h2>
              <p className="text-muted-foreground">In 2014 richtte Alexli Gravemeijer DIM op vanuit de ambitie werken aan resultaat op de korte termijn te combineren met lerend vermogen voor de lange termijn. Sindsdien is DIM uitgegroeid tot een netwerkorganisatie van professionals met een brede kennis en ervaring in de (semi-)publieke sector. 

Samen met vooruitstrevende opdrachtgevers werkte DIM de afgelopen jaren aan diverse meerjarige complexe verandertrajecten, samenwerking en conflicthantering in teamontwikkeling en verdere ontwikkeling en meer ontspanning in de vorm van executive coaching. Voor meer impact en meer werkplezier.</p>
            </div>
            
            {/* Alexli Card with image */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Alexli Gravemeijer</h3>
                    <p className="text-muted-foreground mb-4">"Als er gelachen wordt zonder confrontaties uit de weg te gaan, kunnen mensen groeien & worden de mooiste resultaten geboekt".</p>
                  </div>
                  <div className="w-full md:w-1/6 flex-shrink-0">
                    <img src="/lovable-uploads/7dc2c3ce-80a8-427c-a421-e01f09dae7ae.png" alt="Alexli Gravemeijer" className="rounded-lg w-full h-auto shadow-md" loading="lazy" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Right Column - Building Image */}
          <AnimatedSection animation="slide-from-right">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/lovable-uploads/a8c0bfb5-aad8-45d6-b171-1f0b84e6fba3.png" alt="DIM kantoor in Amsterdam" className="w-full h-auto object-cover" loading="lazy" />
              <div className="bg-white p-4">
                <p className="text-sm text-muted-foreground italic">DIM is gevestigd aan de Panamalaan 5F, 1019 AS in Amsterdam.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-lg mb-8">Ook geïnteresseerd in meer impact &amp; meer werkplezier?</p>
          <div>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-teal-600 text-white px-8 py-3 hover:bg-teal-700 transition-colors">
              Neem contact op
            </a>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default AboutPage;
