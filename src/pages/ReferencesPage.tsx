import { motion } from "framer-motion";
import { MessageCircle, Quote, Award, Star } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";

const ReferencesPage = () => {
  const testimonials = [{
    quote: "DIM heeft veel kennis van de specifieke ontwikkelingsvragen van een kennisintensieve overheidsorganisatie en een goed aanpassingsvermogen daar waar nodig. Alexli weet goed te doseren, zonder weg te lopen van ingewikkelde kwesties. Echt een aanrader.",
    author: "Annemiek van Bolhuis",
    role: "Bestuursvoorzitter",
    company: "Autoriteit Nucleaire Veiligheid en Stralingsbescherming (ANVS), Ministerie van Infrastructuur en Milieu",
    initials: "AB",
    color: "bg-primary/20",
    highlight: "Kennis & Aanpassingsvermogen"
  }, {
    quote: "Met grote waardering beveel ik Alexli Gravemeijer van harte aan als coach en opleider. In haar begeleiding van het professionaliseringstraject bij de Wetenschappelijke Raad voor het Regeringsbeleid (WRR) heeft zij een cruciale rol gespeeld in het versterken van onze samenwerkingscultuur.",
    author: "Prof. Dr. Frans Brom",
    role: "Secretaris/directeur",
    company: "Wetenschappelijke Raad voor het Regeringsbeleid (WRR), Ministerie van Algemene Zaken",
    initials: "FB",
    color: "bg-emerald-500/20",
    highlight: "Professionalisering & Samenwerkingscultuur"
  }, {
    quote: "Alexli geeft richting en organiseert focus in de verandering. Met expertise, overtuigingskracht en creativiteit weet ze op een positieve manier te inspireren en beweging te realiseren.",
    author: "Annet Bertram",
    role: "Directeur Genreaal",
    company: "Rijksvastgoedbedrijf (RVB), Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
    initials: "AB",
    color: "bg-indigo-500/20",
    highlight: "Richting & Focus"
  }, {
    quote: "Alexli combineert strategisch inzicht, scherp analytisch vermogen, respectvol kunnen confronteren met een warme persoonlijkheid. Ze weet in korte tijd een veilig werkklimaat te creëren en zet haar jarenlange ervaring en kennis met wijsheid en humor in.",
    author: "Corine van der Sande",
    role: "Management Development",
    company: "Erasmus Medisch Centrum",
    initials: "CS",
    color: "bg-purple-500/20",
    highlight: "Strategie & Veilig Werkklimaat"
  }, {
    quote: "Als IG van de NVWA heb ik Alexli leren kennen als een enthousiasmerende begeleider in ons traject van leiderschapsontwikkeling. Zij verbindt, snapt waarom het gaat in de organisatie, heeft inzicht in veranderprocessen en treedt effectief op.",
    author: "Rob van Lint",
    role: "Inspecteur Generaal",
    company: "Nederlandse Voedsel en Warenautoriteit (NVWA), Ministerie van Landbouw, Visserij, Voedselzekerheid en Natuur",
    initials: "RL",
    color: "bg-amber-500/20",
    highlight: "Leiderschapsontwikkeling & Veranderprocessen"
  }, {
    quote: "Zowel toen ik DG Luchtvaart en Maritieme Zaken als toen ik DG Energie, Telecom en Mededinging was, heeft Alexli mij op bijzondere en intensieve wijze begeleid met mijn teamontwikkeling. Zij luistert scherp, weet alle teamleden altijd in hun waarde te laten en biedt vervolgens conceptuele en praktische handreikingen waarmee de samenwerking in teams met sprongen vooruit gaat.",
    author: "Mark Dierix",
    role: "Directeur Generaal",
    company: "Energie, Telecom en Mededinging (ETM), Ministerie van Economische Zaken",
    initials: "MD",
    color: "bg-blue-400/20",
    highlight: "Teamontwikkeling & Praktische Handreikingen"
  }, {
    quote: "DG BEB wil impact gericht sturen vanuit visie. Alexli en Jont hebben ons directieteam en onze MT's begeleid in de concrete doorvertaling van visie naar strategie & concrete doelen voor de jaarplannen. Een zeer plezierige samenwerking, waarin Alexli op een positieve en constructieve manier mensen heeft weten mee te nemen in een complex en soms taai proces!",
    author: "Guido Landheer",
    role: "Directeur/plaatsvervangend DG",
    company: "Buitenlandse Externe Betrekkingen, Ministerie van Buitenlandse Zaken",
    initials: "GL",
    color: "bg-rose-400/20",
    highlight: "Visie & Strategie"
  }];

  return <PageLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4" contentEditable>Wat onze klanten zeggen</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" contentEditable>
            Ontdek hoe we samenwerken met organisaties om échte verandering te bewerkstelligen
          </p>
          
          <div className="flex justify-center gap-3 mt-8">
            
            
            
          </div>
        </motion.div>

        <div>
          <h2 className="text-3xl font-display font-bold text-center mb-12" contentEditable>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => <motion.div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${testimonial.color} text-primary font-semibold`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900" contentEditable>{testimonial.author}</h3>
                    <p className="text-sm text-muted-foreground" contentEditable>{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground mt-0.5" contentEditable>{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 w-6 h-6 text-primary/20" />
                  <blockquote className="pl-6 italic text-gray-700 relative" contentEditable>
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            </motion.div>)}
          </div>
        </div>
        
        <motion.div className="mt-16 text-center" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 0.6
      }}>
          <h2 className="text-2xl font-display font-semibold mb-6" contentEditable>Klaar om samen te werken?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8" contentEditable>
            Ontdek hoe wij u kunnen helpen uw organisatiedoelen te bereiken met onze op maat gemaakte aanpak
          </p>
          <a href="/contact" className="btn-primary inline-block">Contact opnemen</a>
        </motion.div>
      </div>
    </PageLayout>;
};

export default ReferencesPage;
