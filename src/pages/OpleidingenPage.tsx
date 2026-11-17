import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";

const facts: { label: string; value: string }[] = [
  { label: "Vorm", value: "Maatwerk voor organisaties: leiderschapsprogramma's, intervisie, teamontwikkeling en (team)coaching. Elk programma wordt samen met de opdrachtgever ontworpen." },
  { label: "Doelgroep", value: "(Top)leidinggevenden, directies, managementteams en ervaren professionals in de (semi)publieke sector." },
  { label: "Niveau", value: "Hbo/wo-werk- en denkniveau." },
  { label: "Aanvangsniveau en vooropleiding", value: "Er zijn geen formele vooropleidingseisen. De programma's zijn bedoeld voor deelnemers met ervaring in een leidinggevende of adviserende rol." },
  { label: "Vrijstellingen", value: "Niet van toepassing: een maatwerkprogramma wordt als geheel gevolgd." },
  { label: "Duur", value: "Van één bijeenkomst tot programma's van enkele maanden tot een jaar, met bijeenkomsten van een dagdeel tot een hele dag. Het precieze aantal bijeenkomsten, de lengte en de looptijd staan in de offerte." },
  { label: "Studiebelasting", value: "De bijeenkomsten zelf plus gemiddeld 1 tot 2 uur voorbereiding per bijeenkomst, zoals het voorbereiden van een casus of het lezen van een artikel. De precieze studiebelasting staat in de offerte." },
  { label: "Studiemateriaal", value: "Hand-outs, artikelen of hoofdstukken die DIM selecteert, en een instructie voor de voorbereiding. Het materiaal is bij de prijs inbegrepen en deelnemers mogen het houden voor eigen gebruik." },
  { label: "Trainer", value: "Alexli Gravemeijer, oprichter en directeur van DIM: organisatieadviseur, procesbegeleider, intervisiebegeleider en executive coach met ruim 25 jaar ervaring in de (semi)publieke sector." },
  { label: "Kwalificatie", value: "Bij volledige deelname ontvangen deelnemers een certificaat van deelname. Dit is geen erkende kwalificatie en heeft geen civiel effect." },
  { label: "Examens en toetsen", value: "Er zijn geen interne of externe examens of toetsen, en dus ook geen herkansingen." },
  { label: "Online leren", value: "DIM biedt geen e-learning aan. Bijeenkomsten vinden fysiek plaats, of online als dat met de opdrachtgever is afgesproken." },
  { label: "Prijs", value: "Op offerte. Opleidingen van DIM zijn als CRKBO-geregistreerde instelling vrijgesteld van btw. Wat bij de prijs is inbegrepen, staat in de offerte." },
  { label: "Evaluatie", value: "Na afloop evalueren de deelnemers de opleiding en de trainer. De uitkomsten gebruiken wij om onze programma's te verbeteren." },
];

const OpleidingenPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Opleidingen en maatwerk | DIM</title>
        <meta name="description" content="Maatwerkopleidingen van DIM voor leidinggevenden en teams in de publieke sector. DIM is CRKBO-geregistreerd." />
      </Helmet>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Opleidingen en maatwerk</h1>
        <div className="prose prose-lg max-w-none space-y-4">
          <p>
            De Investeringsmaatschappij B.V. (DIM) verzorgt opleidingen op maat voor organisaties: leiderschapsprogramma's,
            intervisie, teamontwikkeling en coaching voor leidinggevenden in het publieke domein. DIM is als opleidingsinstelling
            geregistreerd in het Centraal Register Kort Beroepsonderwijs (CRKBO).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Onze aanpak</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Intake:</strong> samen met de opdrachtgever bepalen we de leervraag, de doelen, de doelgroep en de opzet.</li>
            <li><strong>Offerte:</strong> u ontvangt een voorstel met de volledige cursusinformatie: titel, inhoud, doelen, doelgroep, niveau, duur, studiebelasting, materiaal, trainer, kosten en voorwaarden.</li>
            <li><strong>Uitvoering:</strong> praktijkgericht leren met eigen casuïstiek, reflectie en korte theoretische inbreng vanuit de sociale psychologie en organisatiekunde. Deelnemers krijgen vooraf een heldere instructie voor de voorbereiding.</li>
            <li><strong>Evaluatie:</strong> deelnemers evalueren de opleiding en de trainer; met de opdrachtgever bespreken we de resultaten en de vervolgstappen.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cursusinformatie in het kort</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {facts.map((f) => (
                  <tr key={f.label}>
                    <th className="border p-2 text-left align-top bg-muted w-1/3">{f.label}</th>
                    <td className="border p-2 align-top">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Voorwaarden en klachten</h2>
          <p>
            Op onze opleidingen zijn de <Link to="/voorwaarden" className="text-primary hover:underline">algemene betalings- en leveringsvoorwaarden</Link> van
            DIM van toepassing. Daarin staan onder meer de betaling, annulering, terugbetaling en het auteursrecht op het materiaal.
            Bent u ergens niet tevreden over, dan handelen wij uw klacht af volgens onze <Link to="/klachtenregeling" className="text-primary hover:underline">klachtenregeling</Link>,
            met de mogelijkheid van beroep bij een onafhankelijke derde. Hoe wij met persoonsgegevens omgaan, leest u in
            onze <Link to="/privacy" className="text-primary hover:underline">privacyverklaring</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact en reactietermijn</h2>
          <p>
            Wilt u een opleiding bespreken of een offerte aanvragen? Mail naar <a href="mailto:info@dim.amsterdam" className="text-primary hover:underline">info@dim.amsterdam</a> of
            bel <a href="tel:+31610097454" className="text-primary hover:underline">+31 (0)6 1009 7454</a>. Wij reageren binnen 2 werkdagen.
            Zie ook onze <Link to="/contact" className="text-primary hover:underline">contactpagina</Link>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default OpleidingenPage;
