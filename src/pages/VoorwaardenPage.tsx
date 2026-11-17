import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

const VoorwaardenPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Algemene betalings- en leveringsvoorwaarden | DIM</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Algemene betalings- en leveringsvoorwaarden</h1>
        <div className="prose prose-lg max-w-none space-y-4">
          <p>Versie november 2026</p>
          <p>De Investeringsmaatschappij B.V. (DIM) · Panamalaan 5F, 1019 AS Amsterdam · KvK 73734381 · btw NL859645538B01 · <a href="mailto:info@dim.amsterdam" className="text-primary hover:underline">info@dim.amsterdam</a> · +31 (0)6 1009 7454 · <a href="https://www.dim.amsterdam" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dim.amsterdam</a></p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 1. Definities</h2>
          <p>In deze voorwaarden wordt verstaan onder:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>DIM:</strong> De Investeringsmaatschappij B.V., gevestigd te Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 73734381.</li>
            <li><strong>Opdrachtgever:</strong> de organisatie (rechtspersoon, overheidsorgaan of onderneming) die met DIM een overeenkomst sluit.</li>
            <li><strong>Deelnemer:</strong> de persoon die namens of in opdracht van de opdrachtgever deelneemt aan een opleiding.</li>
            <li><strong>Opleiding:</strong> een training, cursus, leertraject, intervisie-, coaching- of begeleidingstraject dat DIM verzorgt, bestaande uit één of meer bijeenkomsten.</li>
            <li><strong>Bijeenkomst:</strong> een (dag)deel waarin de opleiding wordt uitgevoerd, fysiek of online.</li>
            <li><strong>Offerte:</strong> het schriftelijke voorstel van DIM aan de opdrachtgever, waarin de opleiding en de afspraken worden beschreven.</li>
            <li><strong>Overeenkomst:</strong> de afspraak tussen DIM en de opdrachtgever, tot stand gekomen door schriftelijke aanvaarding van de offerte (ook per e-mail) of door een opdrachtbevestiging.</li>
            <li><strong>Schriftelijk:</strong> per brief of per e-mail.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 2. Toepasselijkheid</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Deze voorwaarden gelden voor alle offertes, overeenkomsten en werkzaamheden van DIM op het gebied van opleiding, training, intervisie, coaching, procesbegeleiding en organisatieontwikkeling.</li>
            <li>DIM sluit overeenkomsten uitsluitend met organisaties en niet met particulieren (consumenten). Een wettelijke bedenktermijn voor consumenten is daarom niet van toepassing.</li>
            <li>DIM stuurt deze voorwaarden met elke offerte mee, zodat de opdrachtgever ze voor de eigen administratie kan bewaren. De voorwaarden staan ook op <Link to="/voorwaarden" className="text-primary hover:underline">www.dim.amsterdam/voorwaarden</Link>.</li>
            <li>Afwijkingen van deze voorwaarden gelden alleen als DIM en de opdrachtgever die schriftelijk zijn overeengekomen.</li>
            <li>Inkoop- of andere voorwaarden van de opdrachtgever zijn niet van toepassing, tenzij in de offerte uitdrukkelijk anders is bepaald. Is in de offerte afgesproken dat de Algemene Rijksinkoopvoorwaarden voor diensten (ARVODI) gelden, dan gelden deze voorwaarden aanvullend en gaan bij strijdigheid de ARVODI voor.</li>
            <li>Zijn deze voorwaarden eenmaal van toepassing, dan gelden ze ook voor latere overeenkomsten tussen dezelfde partijen, tenzij anders afgesproken.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 3. Offerte en overeenkomst</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Een offerte van DIM is vrijblijvend en 15 werkdagen geldig, tenzij in de offerte een andere termijn staat.</li>
            <li>Elke offerte bevat ten minste:<ul className="list-disc pl-6 mt-2 space-y-1"><li>de naam van DIM en de titel van de opleiding;</li><li>de inhoud, doelstellingen, doelgroep, het niveau en de vereiste voorkennis;</li><li>de duur: het aantal bijeenkomsten, de lengte per bijeenkomst, de verwachte studiebelasting en de looptijd (start- en einddatum of periode);</li><li>de trainer(s) die de opleiding uitvoeren;</li><li>de kosten van de opleiding en de kosten van het cursusmateriaal;</li><li>welke begeleiding en diensten bij de prijs zijn inbegrepen, en welke kosten (bijvoorbeeld locatie en catering) niet;</li><li>de betalingsvoorwaarden: facturatiemomenten, betaaltermijn en wijze van betaling;</li><li>welk bewijs van deelname de deelnemer ontvangt;</li><li>een verwijzing naar deze voorwaarden en naar de klachtenregeling van DIM.</li></ul></li>
            <li>De overeenkomst komt tot stand zodra de opdrachtgever de offerte schriftelijk aanvaardt of een opdrachtbevestiging ondertekent.</li>
            <li>DIM reageert op vragen en verzoeken binnen 2 werkdagen.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 4. Uitvoering</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>DIM voert de opleiding naar beste vermogen en met de zorgvuldigheid van een goed opleider uit, zoals beschreven in de offerte.</li>
            <li>De opleiding wordt verzorgd door de in de offerte genoemde trainer. Kan deze trainer door ziekte of overmacht niet, dan kan DIM in overleg met de opdrachtgever een gelijkwaardig gekwalificeerde vervanger inzetten of de bijeenkomst verplaatsen (zie artikel 7).</li>
            <li>De opdrachtgever zorgt voor tijdige en juiste informatie, en, tenzij anders afgesproken, voor de uitnodiging van deelnemers, de locatie en de faciliteiten.</li>
            <li>De opdrachtgever mag een deelnemer kosteloos laten vervangen door een andere deelnemer, mits DIM daarvan vooraf bericht krijgt.</li>
            <li>Termijnen voor de uitvoering worden in overleg vastgesteld. Een overeengekomen termijn is een streefdatum, tenzij uitdrukkelijk schriftelijk anders is afgesproken.</li>
            <li>Na afloop van de opleiding ontvangt de deelnemer op verzoek een certificaat van deelname. Dit is geen erkende kwalificatie en heeft geen civiel effect. DIM neemt geen examens of toetsen af, tenzij de offerte anders vermeldt.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 5. Prijzen en betaling</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>De prijzen staan in de offerte. Opleidingen die DIM als CRKBO-geregistreerde instelling verzorgt, zijn vrijgesteld van btw (artikel 11, lid 1, onderdeel o, Wet op de omzetbelasting 1968), zolang de CRKBO-registratie geldt. Voor overige werkzaamheden zijn de prijzen exclusief btw.</li>
            <li>Tenzij in de offerte anders vermeld, zijn reiskosten, reistijd, voorbereiding en basismateriaal bij de prijs inbegrepen. Kosten van derden, zoals zaalhuur en catering, zijn niet inbegrepen.</li>
            <li>DIM factureert 50% van de opdrachtsom bij aanvang van de opleiding en 50% na afronding, tenzij in de offerte een ander facturatieschema is afgesproken (bijvoorbeeld per bijeenkomst).</li>
            <li>Betaling vindt plaats per bankoverschrijving binnen 14 dagen na factuurdatum op rekening NL68 INGB 0006 6250 60 ten name van De Investeringsmaatschappij B.V., onder vermelding van het factuurnummer of het betalingskenmerk op de factuur.</li>
            <li>Bezwaren tegen een factuur meldt de opdrachtgever schriftelijk binnen 14 dagen na factuurdatum. Dit schort de betalingsverplichting voor het niet-betwiste deel niet op.</li>
            <li>Betaalt de opdrachtgever niet op tijd, dan is de opdrachtgever na een schriftelijke herinnering met een betaaltermijn van 14 dagen in verzuim. Vanaf dat moment is de wettelijke handelsrente verschuldigd.</li>
            <li>Blijft betaling ook daarna uit, dan kan DIM de vordering uit handen geven. De redelijke buitengerechtelijke incassokosten komen dan voor rekening van de opdrachtgever, berekend volgens het Besluit vergoeding voor buitengerechtelijke incassokosten.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 6. Annuleren of verplaatsen door de opdrachtgever</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>De opdrachtgever annuleert of verplaatst schriftelijk. De datum waarop DIM het bericht ontvangt, is bepalend.</li>
            <li><strong>Het hele traject, vóór de eerste bijeenkomst:</strong><ul className="list-disc pl-6 mt-2 space-y-1"><li>tot 4 weken voor de eerste bijeenkomst: kosteloos annuleren, of kosteloos verplaatsen naar een startdatum binnen 3 maanden;</li><li>binnen 4 weken voor de eerste bijeenkomst: de opdrachtgever betaalt de werkzaamheden die DIM al heeft verricht (zoals intake, voorbereiding en ontwikkeling van materiaal), gespecificeerd naar bestede uren tegen het tarief uit de offerte, met een maximum van 50% van de opdrachtsom.</li></ul></li>
            <li><strong>Een afzonderlijke bijeenkomst binnen een lopend traject:</strong><ul className="list-disc pl-6 mt-2 space-y-1"><li>tot 7 kalenderdagen vooraf: kosteloos annuleren of verplaatsen naar een nieuwe datum binnen de looptijd;</li><li>tussen 7 kalenderdagen en 48 uur vooraf: 50% van de prijs van die bijeenkomst;</li><li>binnen 48 uur vooraf: 100% van de prijs van die bijeenkomst.</li></ul></li>
            <li>Beëindigt de opdrachtgever een lopend traject tussentijds, dan betaalt de opdrachtgever de bijeenkomsten die hebben plaatsgevonden en de annuleringskosten volgens lid 3 voor de geannuleerde bijeenkomsten. Voor de overige bijeenkomsten is niets verschuldigd.</li>
            <li>Wat de opdrachtgever al heeft betaald en volgens dit artikel niet verschuldigd is, betaalt DIM terug binnen 14 dagen na ontvangst van de annulering (zie artikel 9).</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 7. Wanneer een opleiding niet doorgaat (annulering of verplaatsing door DIM)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Kan een bijeenkomst door ziekte van de trainer of door overmacht niet doorgaan, dan meldt DIM dit zo snel mogelijk en uiterlijk vóór de bijeenkomst aan de opdrachtgever.</li>
            <li>DIM stelt dan in overleg een vervangende datum voor, binnen 3 maanden, of een gelijkwaardig gekwalificeerde vervangende trainer. Voor de verplaatsing brengt DIM geen kosten in rekening.</li>
            <li>Is geen passende vervangende datum mogelijk, of wil de opdrachtgever die niet, dan is de opdrachtgever voor de bijeenkomsten die niet doorgaan niets verschuldigd. DIM betaalt wat daarvoor al is betaald volledig terug binnen 14 dagen (zie artikel 9).</li>
            <li>DIM kan een opdracht weigeren of de uitvoering stoppen als die in strijd komt met algemeen geldende normen en waarden of met de wet. DIM meldt dit schriftelijk met redenen en met een termijn van 2 weken. De opdrachtgever betaalt dan alleen de bijeenkomsten die hebben plaatsgevonden; al betaalde bedragen voor de rest betaalt DIM terug binnen 14 dagen.</li>
            <li>Behalve de terugbetaling uit dit artikel is DIM bij annulering of verplaatsing door DIM geen verdere schadevergoeding verschuldigd, tenzij sprake is van opzet of grove schuld van DIM.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 8. Overmacht</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Onder overmacht valt elke omstandigheid buiten de schuld van DIM die de uitvoering verhindert, zoals ziekte van de trainer, extreme weersomstandigheden, storingen van vervoer of systemen en overheidsmaatregelen.</li>
            <li>Bij overmacht geldt artikel 7.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 9. Terugbetaling (restitutie)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>DIM betaalt bedragen die terugbetaald moeten worden binnen 14 dagen nadat het recht op terugbetaling is ontstaan, per bankoverschrijving op de rekening waarvan de opdrachtgever heeft betaald, of op een rekening die de opdrachtgever schriftelijk opgeeft.</li>
            <li>Waar nodig stuurt DIM een creditfactuur.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 10. Garantie en kwaliteit</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>DIM heeft een inspanningsverplichting: DIM staat ervoor in dat de opleiding wordt uitgevoerd zoals in de offerte beschreven, door een deskundige trainer en volgens de stand van het vak. Een bepaald leerresultaat kan DIM niet garanderen, omdat dat mede afhangt van de inzet van de deelnemers en de organisatie.</li>
            <li>Voldoet een bijeenkomst aantoonbaar niet aan wat is afgesproken, dan biedt DIM in overleg een kosteloze herstelactie aan, zoals een extra (deel)bijeenkomst of een aanvullend gesprek.</li>
            <li>DIM vraagt deelnemers na elke opleiding om een evaluatie van de opleiding en de trainer en gebruikt de uitkomsten om de opleidingen te verbeteren.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 11. Auteursrecht en eigendom van het cursusmateriaal</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Het auteursrecht en alle andere rechten van intellectuele eigendom op het cursusmateriaal (zoals presentaties, hand-outs, werkvormen, oefeningen, modellen en readers) berusten bij DIM of bij de rechthebbende van wie DIM het materiaal gebruikt.</li>
            <li>Het cursusmateriaal dat de deelnemers ontvangen, mogen zij houden. Het wordt hun eigendom voor eigen gebruik en voor gebruik binnen de eigen organisatie. Zonder schriftelijke toestemming van DIM mag het materiaal niet worden verveelvoudigd, openbaar gemaakt, aan derden verstrekt of voor andere (commerciële) doeleinden gebruikt.</li>
            <li>Voor producten die DIM speciaal voor de opdrachtgever maakt, zoals rapportages of een maatwerkprogramma, kunnen in de offerte andere afspraken worden gemaakt. Bij opdrachten onder de ARVODI gelden de afspraken over intellectueel eigendom uit de ARVODI.</li>
            <li>Beeld- of geluidsopnamen van bijeenkomsten maken partijen alleen met voorafgaande toestemming van DIM en van alle aanwezigen.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 12. Geheimhouding en privacy</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>DIM houdt alle vertrouwelijke informatie die DIM bij de opdracht van de opdrachtgever of de deelnemers ontvangt geheim, en gebruikt die alleen voor de uitvoering van de opdracht. Wat deelnemers in een bijeenkomst persoonlijk inbrengen, zoals casuïstiek in intervisie of coaching, deelt DIM niet met de opdrachtgever of anderen, tenzij de deelnemer daar uitdrukkelijk toestemming voor geeft.</li>
            <li>DIM legt dezelfde geheimhouding schriftelijk op aan iedere trainer of andere persoon die DIM bij de opdracht inschakelt.</li>
            <li>De geheimhoudingsplicht geldt niet als een wettelijk voorschrift of een rechterlijke uitspraak DIM tot bekendmaking verplicht.</li>
            <li>DIM verwerkt persoonsgegevens van contactpersonen en deelnemers volgens de Algemene verordening gegevensbescherming (AVG) en de privacyverklaring op <Link to="/privacy" className="text-primary hover:underline">www.dim.amsterdam/privacy</Link>. Deelnemersgegevens bewaart DIM tot 2 jaar na afloop van het traject, tenzij een langere wettelijke bewaarplicht geldt.</li>
            <li>De geheimhoudingsplicht blijft gelden na het einde van de overeenkomst.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 13. Aansprakelijkheid</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>DIM is alleen aansprakelijk voor directe schade die het gevolg is van een toerekenbare tekortkoming of onrechtmatige daad van DIM.</li>
            <li>De aansprakelijkheid is beperkt tot ten hoogste het factuurbedrag van het deel van de opdracht waarop de schade betrekking heeft.</li>
            <li>DIM is niet aansprakelijk voor indirecte schade of gevolgschade, zoals gederfde inkomsten of gemiste besparingen.</li>
            <li>De beperkingen in dit artikel gelden niet bij opzet of grove schuld van DIM.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 14. Klachten</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Klachten over een opleiding, de trainer, de organisatie of een factuur behandelt DIM volgens de klachtenregeling van DIM. Die staat op <Link to="/klachtenregeling" className="text-primary hover:underline">www.dim.amsterdam/klachtenregeling</Link> en wordt op verzoek kosteloos toegestuurd.</li>
            <li>DIM bevestigt een klacht binnen 5 werkdagen en handelt deze binnen 4 weken af. Is meer tijd nodig, dan krijgt de klager vóór het verstrijken van die termijn bericht met de reden en een nieuwe termijn van ten hoogste 4 weken.</li>
            <li>Is de klager het niet eens met de afhandeling, dan kan de klager de klacht voorleggen aan de onafhankelijke derde, mevrouw W. Aletrino (Aletrino Mediations &amp; Coaching, <a href="mailto:info@aletrino.com" className="text-primary hover:underline">info@aletrino.com</a>). Haar oordeel is bindend voor DIM; DIM voert de gevolgen binnen 4 weken uit. Het beroep is voor de klager kosteloos.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 15. Toepasselijk recht en geschillen</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Op deze voorwaarden en op alle overeenkomsten met DIM is Nederlands recht van toepassing.</li>
            <li>Partijen proberen een geschil eerst in onderling overleg op te lossen. Gaat het geschil over de uitvoering of kwaliteit van een opleiding, dan volgen partijen eerst de klachtenregeling, inclusief de mogelijkheid van een bindend oordeel van de onafhankelijke derde (artikel 14).</li>
            <li>Komen partijen er daarna niet uit, dan kan ieder van hen het geschil voorleggen aan de bevoegde rechter in Amsterdam. De klachtenregeling laat het recht om naar de rechter te gaan onverlet.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 16. Slotbepalingen</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Is een bepaling van deze voorwaarden nietig of wordt deze vernietigd, dan blijven de overige bepalingen gelden. Partijen vervangen de bepaling dan door een geldige bepaling die zo dicht mogelijk bij de bedoeling ervan komt.</li>
            <li>DIM kan deze voorwaarden wijzigen. Op een overeenkomst is steeds de versie van toepassing die gold toen de overeenkomst werd gesloten.</li>
            <li>Deze voorwaarden gelden vanaf [datum vaststelling] en vervangen alle eerdere algemene voorwaarden van DIM.</li>
          </ol>
          <p>De Investeringsmaatschappij B.V. · DIM, leren en investeren in verandering</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default VoorwaardenPage;
