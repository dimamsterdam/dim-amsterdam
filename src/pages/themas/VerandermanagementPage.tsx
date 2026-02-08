
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const VerandermanagementPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Verandermanagement in de publieke sector | DIM Consultancy</title>
        <meta name="description" content="Effectief verandermanagement in de publieke sector. DIM begeleidt overheidsorganisaties bij complexe verandertrajecten met bewezen aanpak." />
      </Helmet>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-12 md:pt-20 pb-12">
        <AnimatedSection className="max-w-3xl mx-auto text-center" animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Verandermanagement in de publieke sector
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Veranderen in het publiek domein is anders. Politieke dynamiek, publieke verantwoording en complexe stakeholdervelden vragen om een aanpak die verder gaat dan standaard verandermodellen.
          </p>
        </AnimatedSection>
      </section>

      {/* Waarom anders */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Waarom veranderen in de publieke sector anders is</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Publieke organisaties opereren in een krachtenveld van politieke sturing, maatschappelijke verwachtingen en ambtelijke tradities. Verandering raakt hier niet alleen processen en structuren, maar ook de cultuur en identiteit van de organisatie.</p>
              <p>Daarnaast spelen factoren als transparantie, democratische legitimiteit en de continuïteit van publieke dienstverlening een essentiële rol. Dit maakt dat verandertrajecten in het publiek domein een unieke aanpak vereisen.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Aanpak DIM */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Hoe DIM verandering begeleidt</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>DIM werkt vanuit een integrale aanpak waarin we strategie, cultuur en leiderschap verbinden. We combineren interventies op verschillende niveaus — van bestuurstafel tot werkvloer — om wendbaarheid en langdurig resultaat te realiseren.</p>
              <p>Onze aanpak is positief, scherp en betrokken. We waarderen wat goed gaat en durven tegelijkertijd patronen te doorbreken die verandering in de weg staan.</p>
            </div>
            <div className="mt-8">
              <Link to="/diensten/organisatieontwikkeling" className="btn-primary">
                Meer over onze aanpak
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
              <Link to="/cases/cultuurverandering" className="block p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Cultuurverandering</h3>
                <p className="text-muted-foreground text-sm">Een meerjarig cultuurveranderingstraject bij een overheidsorganisatie.</p>
              </Link>
              <Link to="/cases/herijking-visie-strategie" className="block p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Herijking visie & strategie</h3>
                <p className="text-muted-foreground text-sm">Strategische heroriëntatie met breed draagvlak in een complexe omgeving.</p>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Staat uw organisatie voor een verandering?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wij denken graag met u mee over een aanpak die past bij uw context en ambities.
          </p>
          <Link to="/contact" className="btn-primary">
            Neem contact op
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default VerandermanagementPage;
