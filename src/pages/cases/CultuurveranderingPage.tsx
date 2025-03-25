import React from 'react';
import PageLayout from '@/components/PageLayout';
import AnimatedSection from '@/components/AnimatedSection';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CultuurveranderingPage = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl font-display font-bold mb-6 md:text-4xl">
                Cultuurverandering
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Een gezonde en wendbare cultuur is essentieel voor het succes van
                elke organisatie. Wij helpen u bij het creëren van een cultuur
                die is gebaseerd op vertrouwen, samenwerking en continue
                verbetering.
              </p>
              <p className="text-lg text-muted-foreground">
                We werken samen met u om de huidige cultuur te analyseren, de
                gewenste cultuur te definiëren en een plan te ontwikkelen om de
                kloof te overbruggen.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/040b1282-e827-4227-b413-77828f09d47d.png" 
                  alt="Cultuurverandering" 
                  className="object-cover w-full h-full" 
                />
              </AspectRatio>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              Onze aanpak
            </h2>
            <p className="text-muted-foreground">
              We gebruiken een beproefde aanpak om cultuurverandering te
              realiseren. Onze aanpak is gebaseerd op de volgende principes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Betrokkenheid van alle stakeholders</li>
              <li>Een heldere visie op de gewenste cultuur</li>
              <li>Een stapsgewijze aanpak</li>
              <li>Continue monitoring en evaluatie</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              Resultaten
            </h2>
            <p className="text-muted-foreground">
              Onze aanpak heeft al geleid tot succesvolle cultuurverandering bij
              verschillende organisaties. We hebben organisaties geholpen om:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>De betrokkenheid van medewerkers te vergroten</li>
              <li>De samenwerking te verbeteren</li>
              <li>De prestaties te verhogen</li>
              <li>De klanttevredenheid te verbeteren</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default CultuurveranderingPage;
