import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
}

const EnhancedTestimonialsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials: Testimonial[] = [{
    quote: "DIM heeft veel kennis van de specifieke ontwikkelingsvragen van een kennisintensieve overheidsorganisatie en een goed aanpassingsvermogen daar waar nodig. Alexli weet goed te doseren, zonder weg te lopen van ingewikkelde kwesties. Echt een aanrader.",
    author: "Annemiek van Bolhuis",
    role: "Bestuursvoorzitter",
    company: "Autoriteit Nucleaire Veiligheid en Stralingsbescherming (ANVS), Ministerie van Infrastructuur en Milieu",
    initials: "AB",
    color: "bg-primary/20"
  }, {
    quote: "Met grote waardering beveel ik Alexli Gravemeijer van harte aan als coach en opleider. In haar begeleiding van het professionaliseringstraject bij de Wetenschappelijke Raad voor het Regeringsbeleid (WRR) heeft zij een cruciale rol gespeeld in het versterken van onze samenwerkingscultuur.",
    author: "Prof. Dr. Frans Brom",
    role: "Secretaris/directeur",
    company: "Wetenschappelijke Raad voor het Regeringsbeleid (WRR), Ministerie van Algemene Zaken",
    initials: "FB",
    color: "bg-emerald-500/20"
  }, {
    quote: "Alexli geeft richting en organiseert focus in de verandering. Met expertise, overtuigingskracht en creativiteit weet ze op een positieve manier te inspireren en beweging te realiseren.",
    author: "Annet Bertram",
    role: "Directeur Genreaal",
    company: "Rijksvastgoedbedrijf (RVB), Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
    initials: "AB",
    color: "bg-indigo-500/20"
  }, {
    quote: "Alexli combineert strategisch inzicht, scherp analytisch vermogen, respectvol kunnen confronteren met een warme persoonlijkheid. Ze weet in korte tijd een veilig werkklimaat te creëren en zet haar jarenlange ervaring en kennis met wijsheid en humor in.",
    author: "Corine van der Sande",
    role: "Management Development",
    company: "Erasmus Medisch Centrum",
    initials: "CS",
    color: "bg-purple-500/20"
  }, {
    quote: "Als IG van de NVWA heb ik Alexli leren kennen als een enthousiasmerende begeleider in ons traject van leiderschapsontwikkeling. Zij verbindt, snapt waarom het gaat in de organisatie, heeft inzicht in veranderprocessen en treedt effectief op.",
    author: "Rob van Lint",
    role: "Inspecteur Generaal",
    company: "Nederlandse Voedsel en Warenautoriteit (NVWA), Ministerie van Landbouw, Visserij, Voedselzekerheid en Natuur",
    initials: "RL",
    color: "bg-amber-500/20"
  }, {
    quote: "Zowel toen ik DG Luchtvaart en Maritieme Zaken als toen ik DG Energie, Telecom en Mededinging was, heeft Alexli mij op bijzondere en intensieve wijze begeleid met mijn teamontwikkeling. Zij luistert scherp, weet alle teamleden altijd in hun waarde te laten en biedt vervolgens conceptuele en praktische handreikingen waarmee de samenwerking in teams met sprongen vooruit gaat.",
    author: "Mark Dierix",
    role: "Directeur Generaal",
    company: "Energie, Telecom en Mededinging (ETM), Ministerie van Economische Zaken",
    initials: "MD",
    color: "bg-blue-400/20"
  }, {
    quote: "DG BEB wil impact gericht sturen vanuit visie. Alexli en Jont hebben ons directieteam en onze MT's begeleid in de concrete doorvertaling van visie naar strategie & concrete doelen voor de jaarplannen. Een zeer plezierige samenwerking, waarin Alexli op een positieve en constructieve manier mensen heeft weten mee te nemen in een complex en soms taai proces!",
    author: "Guido Landheer",
    role: "Directeur/plaatsvervangend DG",
    company: "Buitenlandse Externe Betrekkingen, Ministerie van Buitenlandse Zaken",
    initials: "GL",
    color: "bg-rose-400/20"
  }];

  // Auto rotate testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };
  
  return <div className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.5
        }} className="px-4 py-8 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100 relative z-10">
            <div className="text-center pt-6">
              <div className="flex justify-center mb-6">
                <Avatar className="h-[62.5px] w-[62.5px]">
                  <AvatarFallback className={`text-md font-semibold ${testimonials[activeIndex].color} text-gray-700`}>
                    {testimonials[activeIndex].initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex items-start justify-center mb-4">
                <Quote className="h-8 w-8 text-[#F97316] mr-2 flex-shrink-0 mt-1" />
                <blockquote className="text-base md:text-lg font-display text-gray-700 italic mb-6 text-left max-w-3xl">
                  {testimonials[activeIndex].quote}
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{testimonials[activeIndex].author}</p>
                  <p className="text-xs text-gray-600">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => <button key={index} onClick={() => goToTestimonial(index)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to testimonial ${index + 1}`} />)}
        </div>
      </div>
      
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
      
    </div>;
};

export default EnhancedTestimonialsGallery;
