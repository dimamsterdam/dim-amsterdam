import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

const PrivacyPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Privacyverklaring | DIM</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacyverklaring</h1>
        <div className="prose prose-lg max-w-none space-y-4">
          <p>Versie november 2026</p>
          <p>De Investeringsmaatschappij B.V. (DIM), Panamalaan 5F, 1019 AS Amsterdam, KvK 73734381, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring. DIM is als opleidingsinstelling geregistreerd in het Centraal Register Kort Beroepsonderwijs (CRKBO).</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contactgegevens</h2>
          <p>De Investeringsmaatschappij B.V.<br />Panamalaan 5F, 1019 AS Amsterdam<br />Telefoon: +31 (0)6 1009 7454<br />E-mail: <a href="mailto:info@dim.amsterdam" className="text-primary hover:underline">info@dim.amsterdam</a><br />Website: <a href="https://www.dim.amsterdam" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dim.amsterdam</a></p>
          <p>Alexli Gravemeijer, directeur, is binnen DIM het aanspreekpunt voor privacy en gegevensbescherming en is bereikbaar via <a href="mailto:info@dim.amsterdam." className="text-primary hover:underline">info@dim.amsterdam.</a></p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Welke persoonsgegevens wij verwerken</h2>
          <p><strong>Contactpersonen van opdrachtgevers en mensen die contact met ons opnemen</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>voor- en achternaam</li>
            <li>e-mailadres en telefoonnummer</li>
            <li>organisatie en functie</li>
            <li>de inhoud van uw bericht en onze correspondentie</li>
          </ul>
          <p><strong>Deelnemers aan opleidingen, intervisie en coaching</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>voor- en achternaam, organisatie en functie</li>
            <li>e-mailadres en eventueel telefoonnummer</li>
            <li>aanwezigheid per bijeenkomst en het verstrekte certificaat van deelname</li>
            <li>ingevulde evaluaties van de opleiding en de trainer</li>
            <li>wat u zelf inbrengt tijdens intake, intervisie of coaching (bijvoorbeeld een casus), voor zover wij daar aantekeningen van maken</li>
          </ul>
          <p><strong>Facturatie</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>naam, adres en factuurgegevens van de opdrachtgever en de contactpersoon</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Bijzondere en gevoelige persoonsgegevens</h2>
          <p>Wij vragen niet naar bijzondere persoonsgegevens, zoals gezondheid, geloof of afkomst. Brengt u zelf tijdens coaching of intervisie zulke informatie in, dan gebruiken wij die alleen binnen de begeleiding, delen wij die met niemand en leggen wij die niet of zo beperkt mogelijk vast.</p>
          <p>Onze website en diensten zijn niet bedoeld voor personen jonger dan 16 jaar. Denkt u dat wij zonder toestemming gegevens van een minderjarige hebben, neem dan contact op via <a href="mailto:info@dim.amsterdam" className="text-primary hover:underline">info@dim.amsterdam</a>; wij verwijderen die gegevens dan.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Waarvoor en op welke grondslag wij persoonsgegevens verwerken</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>het voorbereiden, uitvoeren en evalueren van opleidingen en trajecten (uitvoering van de overeenkomst met de opdrachtgever en ons gerechtvaardigd belang);</li>
            <li>het bijhouden van een deelnemersregistratie en het uitreiken van certificaten van deelname (gerechtvaardigd belang; daarnaast vraagt onze CRKBO-registratie om een accurate deelnemersadministratie);</li>
            <li>contact met u opnemen of uw vragen beantwoorden (gerechtvaardigd belang of uitvoering van de overeenkomst);</li>
            <li>het afhandelen van klachten (gerechtvaardigd belang);</li>
            <li>facturatie en onze administratie (wettelijke verplichting).</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Geautomatiseerde besluitvorming</h2>
          <p>DIM neemt geen besluiten over personen die uitsluitend op geautomatiseerde verwerking berusten, zoals profilering, en gebruikt geen computerprogramma's of systemen die zulke besluiten nemen zonder tussenkomst van een mens.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Hoe lang wij persoonsgegevens bewaren</h2>
          <p>Wij bewaren persoonsgegevens niet langer dan nodig. Wij hanteren deze bewaartermijnen:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Deelnemersgegevens</strong> (naam, organisatie, aanwezigheid, certificaat): tot 2 jaar na afloop van het traject.</li>
            <li><strong>Ingevulde evaluaties</strong>: tot 2 jaar na afloop van het traject; daarna bewaren wij alleen geanonimiseerde samenvattingen.</li>
            <li><strong>Aantekeningen uit coaching en intervisie</strong>: uiterlijk tot het einde van het traject, daarna vernietigd.</li>
            <li><strong>Correspondentie en contactgegevens</strong>: tot 2 jaar na het laatste contact, tenzij er een lopende relatie is.</li>
            <li><strong>Klachten</strong>: 2 jaar na de definitieve afhandeling (zie onze klachtenregeling).</li>
            <li><strong>Facturen en financiële administratie</strong>: 7 jaar (wettelijke bewaarplicht).</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Delen van persoonsgegevens met derden</h2>
          <p>DIM verkoopt uw gegevens niet aan derden. Wij delen gegevens alleen als dat nodig is voor de uitvoering van de overeenkomst of om te voldoen aan een wettelijke verplichting. Wij maken gebruik van verwerkers, zoals onze e-mail- en cloudopslagdienst, ons boekhoudprogramma en de hosting van onze website. Met hen zijn afspraken gemaakt om uw gegevens te beveiligen. De opdrachtgever ontvangt geen inhoudelijke informatie over wat deelnemers in intervisie of coaching inbrengen, tenzij de deelnemer daar uitdrukkelijk toestemming voor geeft.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies en vergelijkbare technieken</h2>
          <p>Onze website plaatst geen tracking- of analysecookies en wij gebruiken geen advertentienetwerken. Voor de weergave van lettertypes laadt de website Google Fonts van servers van Google. Daarbij ontvangt Google technische gegevens zoals uw IP-adres. Meer informatie vindt u in de privacyverklaring van Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a>). De hostingpartij van de website verwerkt technisch noodzakelijke gegevens (zoals IP-adres en tijdstip van bezoek) om de website te kunnen tonen en te beveiligen.</p>
          <p>Het contactformulier op onze website opent uw eigen e-mailprogramma; de website zelf slaat de ingevulde gegevens niet op.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Gegevens inzien, aanpassen of verwijderen</h2>
          <p>U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Ook kunt u uw toestemming intrekken, bezwaar maken tegen de verwerking en een verzoek doen tot gegevensoverdraagbaarheid. Stuur uw verzoek naar <a href="mailto:info@dim.amsterdam." className="text-primary hover:underline">info@dim.amsterdam.</a> Wij kunnen u vragen u te identificeren; stuur daarvoor geen kopie van uw identiteitsbewijs mee zonder dat wij erom vragen. Wij reageren binnen 2 werkdagen met een ontvangstbevestiging en handelen uw verzoek binnen 4 weken af.</p>
          <p>U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens (<a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">autoriteitpersoonsgegevens.nl</a>).</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Hoe wij persoonsgegevens beveiligen</h2>
          <p>DIM neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging te voorkomen, zoals beveiligde accounts en toegang tot deelnemersgegevens alleen voor de betrokken trainer. Heeft u de indruk dat uw gegevens niet goed beveiligd zijn of zijn er aanwijzingen van misbruik, neem dan contact op via <a href="mailto:info@dim.amsterdam." className="text-primary hover:underline">info@dim.amsterdam.</a></p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPage;
