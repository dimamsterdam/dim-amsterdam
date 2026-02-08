
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LeiderschapPubliekDomeinPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Leiderschap in het publiek domein | DIM Consultancy</title>
        <meta name="description" content="Leiderschapsontwikkeling voor de publieke sector. DIM ondersteunt leidinggevenden bij de unieke uitdagingen van het publiek domein." />
      </Helmet>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-12 md:pt-20 pb-12">
        <AnimatedSection className="max-w-3xl mx-auto text-center" animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Leiderschap in het publiek domein
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Leidinggeven in de publieke sector vraagt om balanceren tussen politieke realiteit, maatschappelijke opdracht en organisatiebelang. Dat vraagt specifieke competenties en begeleiding.
          </p>
        </AnimatedSection>
      </section>

      {/* Uitdagingen */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">De uitdagingen van publiek leiderschap</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Leiders in het publiek domein opereren in een spanningsveld van politieke verwachtingen, ambtelijke loyaliteit en maatschappelijke verantwoordelijkheid. Ze moeten richting geven in onzekerheid, verbinden over grenzen heen en tegelijkertijd resultaten boeken.</p>
              <p>De complexiteit van het stakeholderveld, de dynamiek van politieke cycli en de noodzaak van transparantie maken dat standaard leiderschapsmodellen vaak tekortschieten.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Aanpak DIM */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Hoe DIM leiderschapsontwikkeling begeleidt</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>DIM is gespecialiseerd in leiderschapsuitdagingen in spanningsvolle situaties. Op basis van beproefde leiderschapsconcepten en ruime kennis van het publieke domein verzorgen wij maatwerk leiderschapsprogramma's, intervisie en executive coaching.</p>
              <p>Wij combineren persoonlijke ontwikkeling met praktisch resultaat: effectiever werken met meer plezier en vanuit meer ontspanning.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/diensten/leiderschapsontwikkeling" className="btn-primary">
                Leiderschapsontwikkeling
              </Link>
              <Link to="/diensten/executive-coaching" className="btn-secondary">
                Executive coaching
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Relevante cases */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Relevante cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/cases/leiderschapsprogramma" className="block p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Leiderschapsprogramma</h3>
                <p className="text-muted-foreground text-sm">Een meerjarig leiderschapsprogramma voor topambtenaren.</p>
              </Link>
              <Link to="/cases/intervisie-strategisch-leiderschap" className="block p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Intervisie & Strategisch Leiderschap</h3>
                <p className="text-muted-foreground text-sm">Intervisietrajecten gericht op strategische leiderschapsvraagstukken.</p>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Werken aan uw leiderschap?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wij denken graag met u mee over een programma dat past bij uw situatie en ambities.
          </p>
          <Link to="/contact" className="btn-primary">
            Neem contact op
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default LeiderschapPubliekDomeinPage;
