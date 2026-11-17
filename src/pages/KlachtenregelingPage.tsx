import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const KlachtenregelingPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Klachtenregeling</h1>
        <div className="prose prose-lg max-w-none space-y-4">
          <p>Versie november 2026</p>
          <p>De Investeringsmaatschappij B.V. (hierna: DIM) verzorgt opleidingen, trainingen, intervisie en coaching voor professionals en organisaties. Wij doen er alles aan om onze opleidingen zorgvuldig en naar tevredenheid uit te voeren. Bent u toch ontevreden, dan horen wij dat graag. In deze klachtenregeling staat hoe u een klacht indient en hoe wij die afhandelen.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 1. Begrippen</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Klacht:</strong> een schriftelijke uiting van ontevredenheid van of namens een opdrachtgever of deelnemer over de totstandkoming of uitvoering van een opleiding of overeenkomst, over de kwaliteit van de dienstverlening, over de trainer of over de factuur.</li>
            <li><strong>Klager:</strong> de opdrachtgever of deelnemer die een klacht indient, of degene die namens hem of haar optreedt.</li>
            <li><strong>Klachtenfunctionaris:</strong> de persoon binnen DIM die de klacht in behandeling neemt: Alexli Gravemeijer, directeur van DIM.</li>
            <li><strong>Onafhankelijke derde:</strong> mevrouw Wendelien Aletrino, Aletrino Mediations &amp; Coaching, bij wie de klager in beroep kan gaan als de klacht niet naar tevredenheid is opgelost (zie artikel 6).</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 2. Toepassing en openbaarheid</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Deze klachtenregeling geldt voor alle opleidingen, trainingen, intervisie- en coachingstrajecten van DIM en voor alle opdrachtgevers en deelnemers.</li>
            <li>De klachtenregeling staat op onze website (<Link to="/klachtenregeling" className="text-primary hover:underline">www.dim.amsterdam/klachtenregeling</Link>). In elke offerte en in de cursusinformatie verwijzen wij ernaar. Op verzoek sturen wij u de regeling kosteloos toe.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 3. Een klacht indienen</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Wij raden u aan uw ontevredenheid eerst te bespreken met de trainer. Vaak is een oplossing dan snel gevonden.</li>
            <li>Bent u niet tevreden over de oplossing, of wilt u liever meteen een formele klacht indienen? Stuur uw klacht dan schriftelijk naar de klachtenfunctionaris:
              <div className="pl-4">• per e-mail: <a href="mailto:info@dim.amsterdam" className="text-primary hover:underline">info@dim.amsterdam</a>, onder vermelding van "Klacht"; of</div>
              <div className="pl-4">• per post: De Investeringsmaatschappij B.V., t.a.v. de klachtenfunctionaris, Panamalaan 5F, 1019 AS Amsterdam.</div>
            </li>
            <li>Vermeld in uw klacht ten minste: uw naam en contactgegevens, de opleiding of het traject waarover de klacht gaat, een omschrijving van de klacht en, als u wilt, welke oplossing u voorstelt.</li>
            <li>Dien uw klacht in binnen een redelijke termijn nadat u het probleem heeft ontdekt, bij voorkeur binnen twee maanden.</li>
            <li>Het indienen en behandelen van een klacht is voor de klager kosteloos.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 4. Behandeling door DIM</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Ontvangstbevestiging:</strong> binnen 5 werkdagen na ontvangst bevestigt de klachtenfunctionaris schriftelijk dat de klacht is ontvangen. Daarbij leggen wij uit hoe de klacht verder wordt behandeld en binnen welke termijn.</li>
            <li><strong>Hoor en wederhoor:</strong> de klachtenfunctionaris geeft de klager en, als dat van toepassing is, de betrokken trainer de gelegenheid hun kant van de zaak toe te lichten, schriftelijk of in een gesprek.</li>
            <li><strong>Afhandelingstermijn:</strong> DIM reageert inhoudelijk op de klacht en handelt deze af binnen 4 weken na ontvangst. De klager ontvangt een schriftelijk en gemotiveerd oordeel over de klacht, en indien van toepassing de maatregelen die DIM neemt.</li>
            <li><strong>Verlenging:</strong> is voor onderzoek meer tijd nodig, dan laat de klachtenfunctionaris dat de klager vóór het verstrijken van de termijn van 4 weken schriftelijk weten. Wij vermelden de reden van het uitstel en wanneer de klager uitsluitsel kan verwachten. De verlenging is ten hoogste 4 weken.</li>
            <li>Kan de klacht naar tevredenheid van de klager worden opgelost, dan wordt dat schriftelijk vastgelegd.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 5. Vertrouwelijkheid</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Klachten worden altijd vertrouwelijk behandeld. De klachtenfunctionaris, de betrokken trainer en de onafhankelijke derde houden de verstrekte informatie geheim en gebruiken deze alleen om de klacht af te handelen.</li>
            <li>Persoonsgegevens worden verwerkt volgens de Algemene verordening gegevensbescherming (AVG) en onze privacyverklaring (<Link to="/privacy" className="text-primary hover:underline">www.dim.amsterdam/privacy</Link>).</li>
            <li>Het indienen van een klacht heeft geen nadelige gevolgen voor de klager of voor de deelname aan de opleiding.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 6. Beroep bij een onafhankelijke derde</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Is de klager het niet eens met de afhandeling of het oordeel van DIM, of heeft DIM niet binnen de gestelde termijnen gereageerd? Dan kan de klager de klacht voorleggen aan de onafhankelijke derde:
            <p className="pl-4 mt-2 not-italic"><strong>Mevrouw W. (Wendelien) Aletrino</strong><br />
              Aletrino Mediations &amp; Coaching<br />
              Sweelinckplein 1, 2517 GK Den Haag<br />
              E-mail: <a href="mailto:info@aletrino.com" className="text-primary hover:underline">info@aletrino.com</a><br />
              Website: <a href="https://www.aletrino.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aletrino.com</a></p>
            <p className="pl-4 mt-2">Mevrouw Aletrino is jurist, MfN-registermediator en coach. Zij is niet verbonden aan DIM en heeft ermee ingestemd in deze regeling als onafhankelijke derde te worden genoemd.</p>
            </li>
            <li>De klager legt de klacht bij voorkeur binnen 4 weken na ontvangst van het oordeel van DIM schriftelijk aan haar voor, met een kopie van de klacht en de reactie van DIM.</li>
            <li>De onafhankelijke derde hoort de klager en DIM en doet binnen 4 weken na ontvangst van de klacht een schriftelijke uitspraak. Is meer tijd nodig, dan laat zij de klager en DIM dat met redenen weten, met een indicatie van wanneer de uitspraak volgt (ten hoogste 4 weken extra).</li>
            <li><strong>De uitspraak van de onafhankelijke derde is bindend voor DIM.</strong> DIM voert de eventuele gevolgen zo snel mogelijk uit, uiterlijk binnen 4 weken na de uitspraak.</li>
            <li>De kosten van de onafhankelijke derde komen volledig voor rekening van DIM. Voor de klager is het beroep kosteloos.</li>
            <li>Deze regeling laat het recht van de klager onverlet om zich daarna tot de bevoegde rechter te wenden.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 7. Registratie en archivering</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>De klachtenfunctionaris registreert elke klacht in een klachtenregister: datum van ontvangst, naam van de klager, onderwerp, gevolgde stappen, termijnen, oordeel, eventuele uitspraak van de onafhankelijke derde en genomen maatregelen.</li>
            <li>Klachten en alle bijbehorende stukken worden ten minste 2 jaar na de definitieve afhandeling vertrouwelijk bewaard en daarna vernietigd.</li>
            <li>DIM evalueert de klachten minstens één keer per jaar en gebruikt de uitkomsten om de opleidingen en dienstverlening te verbeteren.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 8. Slotbepalingen</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Deze klachtenregeling is vastgesteld door de directie van De Investeringsmaatschappij B.V. en geldt vanaf [datum vaststelling].</li>
            <li>In gevallen waarin deze regeling niet voorziet, beslist de klachtenfunctionaris in de geest van deze regeling, met inachtneming van het belang van de klager.</li>
          </ol>
          <p>De Investeringsmaatschappij B.V. · Panamalaan 5F, 1019 AS Amsterdam · <a href="mailto:info@dim.amsterdam" className="text-primary hover:underline">info@dim.amsterdam</a> · +31 (0)6 1009 7454 · KvK 73734381</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default KlachtenregelingPage;
