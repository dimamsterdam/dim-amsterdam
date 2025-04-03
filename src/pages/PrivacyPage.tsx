import PageLayout from "@/components/PageLayout";
import { Separator } from "@/components/ui/separator";
const PrivacyPage = () => {
  return <PageLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">PRIVACY VERKLARING</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            De Investeringsmaatschappij, DIM, gevestigd aan: Panamalaan 5F, 1019AS Amsterdam, 
            is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contactgegevens:</h2>
          <p>
            <a href="https://www.dim.amsterdam" className="text-primary hover:underline">https://www.dim.amsterdam</a><br />
            Panamalaan 5F<br />
            1019AS Amsterdam<br />
            031+610097454
          </p>

          <p>
            Alexli Gravemeijer is de Functionaris Gegevensbescherming van De Investeringsmaatschappij, DIM. 
            Zij is te bereiken via <a href="mailto:alexli@dim.amsterdam" className="text-primary hover:underline">alexli@dim.amsterdam</a>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Persoonsgegevens die wij verwerken</h2>
          <p>
            De Investeringsmaatschappij, DIM verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten 
            en/of omdat u deze zelf aan ons verstrekt.
          </p>

          <p>Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Voor- en achternaam</li>
            <li>E-mailadres</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Bijzondere en/of gevoelige persoonsgegevens die wij verwerken</h2>
          <p>
            Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar. 
            We kunnen echter niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook aan betrokken te zijn bij de online 
            activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming. 
            Als u er van overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan 
            contact met ons op via <a href="mailto:alexli@dim.amsterdam" className="text-primary hover:underline">alexli@dim.amsterdam</a>, 
            dan verwijderen wij deze informatie.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken</h2>
          <p>
            De Investeringsmaatschappij, DIM verwerkt uw persoonsgegevens voor de volgende doelen:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Geautomatiseerde besluitvorming</h2>
          <p>De Investeringsmaatschappij, DIM neemt verantwoordelijkheid op basis van geautomatiseerde verwerkingen besluiten over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen. Het gaat hier om besluiten die worden genomen door computerprogramma's of -systemen, zonder dat daar een mens (bijvoorbeeld een medewerker van De Investeringsmaatschappij, DIM) tussen zit. De Investeringsmaatschappij, DIM gebruikt op dit moment geen van dergelijke systemen. </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Hoe lang we persoonsgegevens bewaren</h2>
          <p>
            DIM bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. 
            Wij hanteren de volgende bewaartermijnen voor de volgende (categorieën) van persoonsgegevens: 1 jaar.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Delen van persoonsgegevens met derden</h2>
          <p>
            DIM verstrekt uitsluitend aan derden en alleen als dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies, of vergelijkbare technieken, die wij gebruiken</h2>
          <p>
            DIM gebruikt geen cookies of vergelijkbare technieken.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Gegevens inzien, aanpassen of verwijderen</h2>
          <p>
            U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele 
            toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door DIM en 
            heeft u het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij ons een verzoek kunt indienen om de persoonsgegevens die 
            wij van u beschikken in een computerbestand naar u of een ander, door u genoemde organisatie, te sturen.
          </p>

          <p>
            U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking van 
            uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen naar <a href="mailto:info@dim.amsterdam" className="text-primary hover:underline">info@dim.amsterdam</a>
          </p>

          <p>
            Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan, vragen wij u een kopie van uw identiteitsbewijs met het verzoek 
            mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer 
            en Burgerservicenummer (BSN) zwart. Dit ter bescherming van uw privacy. We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
          </p>

          <p>
            DIM wil u er tevens op wijzen dat u de mogelijkheid heeft om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. 
            Dat kan via de volgende link: <a href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons" className="text-primary hover:underline">
              https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Hoe wij persoonsgegevens beveiligen</h2>
          <p>
            DIM neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste 
            openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen 
            zijn van misbruik, neem dan contact op <a href="mailto:info@dim.amsterdam" className="text-primary hover:underline">info@dim.amsterdam</a>
          </p>
        </div>
      </div>
    </PageLayout>;
};
export default PrivacyPage;