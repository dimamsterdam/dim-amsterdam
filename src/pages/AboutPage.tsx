
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";

import { Smile, Zap, Heart, Users, BookOpen, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 md:pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <AnimatedSection className="space-y-6" animation="slide-from-left">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Over DIM</h1>
              <p className="text-muted-foreground leading-relaxed">
                In 2014 richtte Alexli Gravemeijer DIM op vanuit de ambitie werken aan resultaat op de korte termijn te combineren met lerend vermogen voor de lange termijn. Sindsdien is DIM uitgegroeid tot een netwerkorganisatie van professionals met een brede kennis en ervaring in de (semi-)publieke sector.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Samen met vooruitstrevende opdrachtgevers werkte DIM de afgelopen jaren aan diverse meerjarige complexe verandertrajecten, samenwerking en conflicthantering in teamontwikkeling en verdere ontwikkeling en meer ontspanning in de vorm van executive coaching. Voor meer impact en meer werkplezier.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-from-right">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/lovable-uploads/a8c0bfb5-aad8-45d6-b171-1f0b84e6fba3.png" alt="DIM kantoor in Amsterdam" className="w-full h-auto object-cover" loading="lazy" />
              <div className="bg-card p-4">
                <p className="text-sm text-muted-foreground italic">DIM is gevestigd aan de Panamalaan 5F, 1019 AS in Amsterdam.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Missie & Visie */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Missie & Visie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Onze missie</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij ondersteunen (top-)leidinggevenden in de publieke sector bij het realiseren van meer maatschappelijke impact en werkplezier. Door te werken aan persoonlijke, team- en organisatieontwikkeling binnen de complexe dynamiek van het publiek domein.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Onze visie</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij geloven dat duurzame verandering ontstaat wanneer organisaties investeren in zowel resultaat op de korte termijn als lerend vermogen voor de lange termijn. Door mensen te helpen groeien, groeien organisaties mee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-12" animation="fade-in">
            <h2 className="text-3xl font-display font-bold mb-4">Onze werkwijze</h2>
            <p className="text-muted-foreground">Positief. Scherp. Betrokken.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection className="bg-card p-6 rounded-lg border border-border" animation="fade-in" delay={0}>
              <Smile className="h-6 w-6 text-accent-foreground mb-3" />
              <h4 className="font-bold mb-2">Positief</h4>
              <p className="text-muted-foreground text-sm">Veranderen begint bij weten en waarderen wat goed gaat. Vanuit zelfvertrouwen ontstaat ruimte om kritisch te kijken naar wat beter kan.</p>
            </AnimatedSection>
            <AnimatedSection className="bg-card p-6 rounded-lg border border-border" animation="fade-in" delay={0.1}>
              <Zap className="h-6 w-6 text-accent-foreground mb-3" />
              <h4 className="font-bold mb-2">Scherp</h4>
              <p className="text-muted-foreground text-sm">Leren vraagt ander gedrag en het doorbreken van patronen. Met ruim 25 jaar ervaring herkennen wij spanningen snel en maken deze bespreekbaar.</p>
            </AnimatedSection>
            <AnimatedSection className="bg-card p-6 rounded-lg border border-border" animation="fade-in" delay={0.2}>
              <Heart className="h-6 w-6 text-accent-foreground mb-3" />
              <h4 className="font-bold mb-2">Betrokken</h4>
              <p className="text-muted-foreground text-sm">Wij werken aan ontwikkelingen waar we in geloven, met opdrachtgevers waar we een klik mee hebben. Dit geeft energie om weerbarstige processen te doorbreken.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Het Netwerk */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Users className="h-8 w-8 text-primary mb-4" />
                <h2 className="text-3xl font-display font-bold mb-4">Het netwerk</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DIM is een netwerkorganisatie van ervaren professionals. Afhankelijk van de vraag en de context stellen wij een team samen met de juiste expertise en ervaring.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ons netwerk omvat specialisten op het gebied van organisatiekunde, verandermanagement, leiderschapsontwikkeling, teamcoaching, conflicthantering en executive coaching. Allen met ruime ervaring in het publiek domein.
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src="/lovable-uploads/7dc2c3ce-80a8-427c-a421-e01f09dae7ae.png"
                      alt="Alexli Gravemeijer"
                      className="rounded-lg w-32 h-auto shadow-md"
                      loading="lazy"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">Alexli Gravemeijer</h3>
                      <p className="text-sm text-muted-foreground italic">
                        "Als er gelachen wordt zonder confrontaties uit de weg te gaan, kunnen mensen groeien & worden de mooiste resultaten geboekt".
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-lg mb-8">Ook geïnteresseerd in meer impact & meer werkplezier?</p>
          <Link to="/contact" className="btn-primary">
            Neem contact op
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
