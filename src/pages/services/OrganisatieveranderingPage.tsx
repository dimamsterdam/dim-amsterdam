
import PageLayout from "@/components/PageLayout";
import TestimonialsBlock from "@/components/TestimonialsBlock";
import AnimatedSection from "@/components/AnimatedSection";

const OrganisatieveranderingPage = () => {
  const testimonials = [
    {
      quote: "DIM heeft ons geholpen een complex verandertraject te navigeren met empathie en precisie. Hun culturele integratieroadmap werd onze leidraad, en we zijn erg tevreden met de resultaten.",
      author: "Thomas Rodriguez",
      role: "HR Directeur",
      company: "Global Systems",
      initials: "TR",
      color: "bg-purple-500/20"
    },
    {
      quote: "Met grote waardering beveel ik DIM aan als partner bij organisatieverandering. In hun begeleiding van ons transformatieprogramma hebben zij een cruciale rol gespeeld in het versterken van onze samenwerkingscultuur.",
      author: "Frans Brom",
      role: "Directeur",
      company: "Wetenschappelijke Raad voor het Regeringsbeleid",
      initials: "FB",
      color: "bg-emerald-500/20"
    },
    {
      quote: "DIM geeft richting en organiseert focus in de verandering. Met expertise, overtuigingskracht en creativiteit weten ze op een positieve manier te inspireren en beweging te realiseren.",
      author: "Annet Bertram",
      role: "Directeur Generaal",
      company: "Rijksvastgoedbedrijf",
      initials: "AB",
      color: "bg-indigo-500/20"
    }
  ];

  return (
    <PageLayout>
      {/* Introductie Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Organisatieverandering</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Effectieve organisatieverandering begint met een heldere visie en eindigt met concrete resultaten. Bij DIM begeleiden we organisaties door complexe verandertrajecten met een pragmatische en mensgerichte aanpak.
            </p>
            <p className="text-lg text-muted-foreground">
              Of het nu gaat om cultuurverandering, fusies en overnames, reorganisaties of strategische heroriëntatie - onze aanpak zorgt voor gedragen verandering die beklijft en resultaat oplevert.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Onze werkwijze</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">1. Diagnose & Analyse</h3>
                <p>We starten met een grondige analyse van uw organisatie, cultuur en veranderopgave. Door interviews, workshops en data-analyse krijgen we een helder beeld van de huidige situatie, uitdagingen en kansen.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">2. Veranderstrategie</h3>
                <p>Op basis van de diagnose ontwikkelen we een veranderstrategie op maat. We bepalen samen welke interventies nodig zijn, hoe we stakeholders betrekken en hoe we voortgang gaan meten.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">3. Implementatie & Begeleiding</h3>
                <p>We begeleiden de implementatie van de veranderstrategie met workshops, coaching en advies. We zorgen voor eigenaarschap in de organisatie en bouwen capaciteit voor duurzame verandering.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">4. Borging & Evaluatie</h3>
                <p>We helpen de organisatie om de verandering te borgen in processen, gedrag en cultuur. Regelmatige evaluatie zorgt voor leren en bijsturen waar nodig.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Succesvolle cases</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Cultuurverandering bij overheidsorganisatie</h3>
                <p className="mb-4">Een grote overheidsorganisatie kampte met uitdagingen op het gebied van samenwerking tussen afdelingen en effectieve besluitvorming. DIM ontwikkelde een cultuurprogramma gericht op transparantie, samenwerking en resultaatgerichtheid.</p>
                <p className="text-sm text-muted-foreground"><strong>Resultaat:</strong> 30% hogere medewerkerstevredenheid, verbeterde interdepartementale samenwerking en snellere besluitvorming.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Fusie van kennisorganisaties</h3>
                <p className="mb-4">Twee kennisintensieve organisaties moesten fuseren met behoud van expertise en innovatiekracht. DIM begeleidde het integratieproces met focus op cultuurintegratie, kennisdeling en organisatieontwikkeling.</p>
                <p className="text-sm text-muted-foreground"><strong>Resultaat:</strong> Succesvolle integratie binnen 12 maanden, behoud van 95% van sleutelmedewerkers en verbeterde innovatie-output.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Referenties Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Wat klanten zeggen</h2>
            <p className="text-lg text-muted-foreground">
              We hebben verschillende organisaties geholpen bij hun verandertraject. Hier zijn enkele ervaringen van onze klanten.
            </p>
          </AnimatedSection>
          
          <TestimonialsBlock testimonials={testimonials} />
        </div>
      </section>
    </PageLayout>
  );
};

export default OrganisatieveranderingPage;
