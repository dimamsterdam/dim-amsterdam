
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Quote, Star, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  featured?: boolean;
}

const ReferencesPage = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      quote: "DIM heeft veel kennis van de specifieke ontwikkelingsvragen van een kennisintensieve overheidsorganisatie en een goed aanpassingsvermogen daar waar nodig. Alexli weet goed te doseren, zonder weg te lopen van ingewikkelde kwesties. Echt een aanrader.",
      author: "Annemiek van Bolhuis",
      role: "Bestuursvoorzitter",
      company: "Autoriteit Nucleaire Veiligheid en Stralingsbescherming (ANVS), Ministerie van Infrastructuur en Milieu",
      initials: "AB",
      color: "bg-primary/20",
      featured: true
    },
    {
      quote: "Met grote waardering beveel ik Alexli Gravemeijer van harte aan als coach en opleider. In haar begeleiding van het professionaliseringstraject bij de Wetenschappelijke Raad voor het Regeringsbeleid (WRR) heeft zij een cruciale rol gespeeld in het versterken van onze samenwerkingscultuur.",
      author: "Prof. Dr. Frans Brom",
      role: "Secretaris/directeur",
      company: "Wetenschappelijke Raad voor het Regeringsbeleid (WRR), Ministerie van Algemene Zaken",
      initials: "FB",
      color: "bg-emerald-500/20"
    },
    {
      quote: "Alexli geeft richting en organiseert focus in de verandering. Met expertise, overtuigingskracht en creativiteit weet ze op een positieve manier te inspireren en beweging te realiseren.",
      author: "Annet Bertram",
      role: "Directeur Genreaal",
      company: "Rijksvastgoedbedrijf (RVB), Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
      initials: "AB",
      color: "bg-indigo-500/20"
    },
    {
      quote: "Alexli combineert strategisch inzicht, scherp analytisch vermogen, respectvol kunnen confronteren met een warme persoonlijkheid. Ze weet in korte tijd een veilig werkklimaat te creëren en zet haar jarenlange ervaring en kennis met wijsheid en humor in.",
      author: "Corine van der Sande",
      role: "Management Development",
      company: "Erasmus Medisch Centrum",
      initials: "CS",
      color: "bg-purple-500/20",
      featured: true
    },
    {
      quote: "Als IG van de NVWA heb ik Alexli leren kennen als een enthousiasmerende begeleider in ons traject van leiderschapsontwikkeling. Zij verbindt, snapt waarom het gaat in de organisatie, heeft inzicht in veranderprocessen en treedt effectief op.",
      author: "Rob van Lint",
      role: "Inspecteur Generaal",
      company: "Nederlandse Voedsel en Warenautoriteit (NVWA), Ministerie van Landbouw, Visserij, Voedselzekerheid en Natuur",
      initials: "RL",
      color: "bg-amber-500/20"
    },
    {
      quote: "Zowel toen ik DG Luchtvaart en Maritieme Zaken als toen ik DG Energie, Telecom en Mededinging was, heeft Alexli mij op bijzondere en intensieve wijze begeleid met mijn teamontwikkeling. Zij luistert scherp, weet alle teamleden altijd in hun waarde te laten en biedt vervolgens conceptuele en praktische handreikingen waarmee de samenwerking in teams met sprongen vooruit gaat.",
      author: "Mark Dierix",
      role: "Directeur Generaal",
      company: "Energie, Telecom en Mededinging (ETM), Ministerie van Economische Zaken",
      initials: "MD",
      color: "bg-blue-400/20"
    },
    {
      quote: "DG BEB wil impact gericht sturen vanuit visie. Alexli en Jont hebben ons directieteam en onze MT's begeleid in de concrete doorvertaling van visie naar strategie & concrete doelen voor de jaarplannen. Een zeer plezierige samenwerking, waarin Alexli op een positieve en constructieve manier mensen heeft weten mee te nemen in een complex en soms taai proces!",
      author: "Guido Landheer",
      role: "Directeur/plaatsvervangend DG",
      company: "Buitenlandse Externe Betrekkingen, Ministerie van Buitenlandse Zaken",
      initials: "GL",
      color: "bg-rose-400/20"
    },
    {
      quote: "Sterke combinatie van analytisch inzicht en pragmatisch en doelgericht aanpakken.",
      author: "Anoniem",
      role: "Manager",
      company: "Grote uitvoeringsorganisatie",
      initials: "AN",
      color: "bg-teal-400/20"
    },
    {
      quote: "Prettige samenwerking, mede dankzij merkbare ruime ervaring bij zowel uitvoeringsorganisaties als departementen.",
      author: "Anoniem",
      role: "Directeur",
      company: "Ministerie",
      initials: "AN",
      color: "bg-sky-400/20"
    },
    {
      quote: "De combinatie leiderschapsontwikkeling met concrete interventies en sturing in de praktijk was heel effectief.",
      author: "Anoniem",
      role: "Teamleider",
      company: "Publieke sector",
      initials: "AN",
      color: "bg-orange-400/20"
    }
  ];

  const filteredTestimonials = filter 
    ? testimonials.filter(t => t.company.toLowerCase().includes(filter.toLowerCase()))
    : testimonials;

  const sectors = Array.from(new Set(testimonials.map(t => {
    if (t.company.includes("Ministerie")) return "Ministeries";
    if (t.company.includes("Medisch")) return "Zorg";
    return "Overige";
  })));

  return (
    <PageLayout>
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-sky-50 to-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16" animation="fade-in">
            <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4" contentEditable>
              Wat onze klanten zeggen
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" contentEditable>
              Ontdek hoe DIM organisaties heeft geholpen bij hun transformatie naar effectieve, 
              geïnspireerde en veerkrachtige teams en leiders.
            </p>
          </AnimatedSection>
          
          {/* Filter options */}
          <AnimatedSection className="mb-12 flex flex-wrap justify-center gap-3" animation="fade-in" delay={0.1}>
            <button 
              onClick={() => setFilter(null)} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!filter ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            >
              Alle referenties
            </button>
            {sectors.map((sector, idx) => (
              <button 
                key={idx}
                onClick={() => setFilter(sector)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === sector ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
              >
                {sector}
              </button>
            ))}
          </AnimatedSection>
          
          {/* Featured testimonials */}
          <AnimatedSection className="mb-16" animation="fade-in" delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTestimonials
                .filter(t => t.featured)
                .map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                  >
                    <div className="p-6 md:p-8 relative">
                      <Badge variant="outline" className="absolute top-6 right-6 bg-amber-100 text-amber-800 border-amber-200 flex items-center gap-1">
                        <Star className="h-3 w-3" /> Featured
                      </Badge>
                      
                      <div className="flex items-start mb-6">
                        <Avatar className={`h-14 w-14 mr-4 border ${testimonial.color}`}>
                          <AvatarFallback className={`${testimonial.color} text-gray-700`}>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{testimonial.author}</h3>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <p className="text-xs text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <blockquote className="relative">
                        <div className="absolute -top-2 -left-2 text-primary/20">
                          <Quote className="h-8 w-8" />
                        </div>
                        <p className="text-gray-700 italic leading-relaxed pl-6 text-base" contentEditable>
                          {testimonial.quote}
                        </p>
                      </blockquote>
                    </div>
                  </motion.div>
                ))}
            </div>
          </AnimatedSection>
          
          {/* Regular testimonials */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" animation="fade-in" delay={0.3}>
            {filteredTestimonials
              .filter(t => !t.featured)
              .map((testimonial, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full flex flex-col"
                >
                  <div className="p-5 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <Avatar className={`h-10 w-10 mr-3 ${testimonial.color}`}>
                          <AvatarFallback className={`${testimonial.color} text-gray-700 text-sm`}>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-gray-900">{testimonial.author}</h3>
                          <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="flex-grow relative">
                      <Quote className="h-5 w-5 text-primary/30 absolute top-0 left-0" />
                      <p className="text-gray-700 text-sm leading-relaxed pl-7" contentEditable>
                        {testimonial.quote}
                      </p>
                    </blockquote>
                  </div>
                </motion.div>
              ))}
          </AnimatedSection>
          
          <AnimatedSection className="mt-20 text-center" animation="fade-in" delay={0.4}>
            <div className="bg-gradient-to-r from-indigo-50 to-sky-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold mb-4" contentEditable>
                Benieuwd naar wat wij voor uw organisatie kunnen betekenen?
              </h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto" contentEditable>
                Neem contact met ons op voor een vrijblijvend gesprek over de mogelijkheden voor uw organisatie.
              </p>
              <a 
                href="/contact" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
              >
                <Users className="mr-2 h-5 w-5" />
                Contact opnemen
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default ReferencesPage;
