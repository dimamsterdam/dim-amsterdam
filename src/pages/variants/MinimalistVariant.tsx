import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
const MinimalistVariant = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
        }
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <section className="min-h-screen pt-32 pb-20 flex items-center py-[44px]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-700 leading-tight">
                  Samen creëren we meer maatschappelijke <span className="text-gray-700">impact &amp; meer werkplezier</span>
                </h1>
                
                <p className="text-lg text-gray-600 max-w-lg">
                  Wij ondersteunen organisaties in het sociaal domein bij het versterken van hun cultuur, 
                  teams en leiderschap.
                </p>
                
                <div className="pt-4">
                  <Link to="/contact" className="inline-flex items-center border-b-2 border-primary text-primary font-medium transition-all hover:border-primary/70 hover:text-primary/70 group py-[2px]">
                    <span>Neem contact op</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.2,
              duration: 0.5
            }}>
                <div className="aspect-video rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <img src="/lovable-uploads/f7236ec5-17e7-46a7-b551-7cf4b4198147.png" alt="Professional collaboration" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-[#e3eff6]">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-display text-gray-700 italic mb-8">
                "DIM's cultural transformation program has been a game-changer for our organization. 
                Our employee engagement scores have increased by 32% and we've seen tangible improvements 
                in collaboration across departments."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mr-3">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Chief People Officer, TechVision Inc.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16" animation="fade-in">
              <h2 className="text-3xl font-display font-bold mb-4">Dit is wat we doen</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Onze geïntegreerde aanpak richt zich op het volledige spectrum van uitdagingen 
                op het gebied van cultuur en leiderschap in moderne organisaties.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              title: "Organisatie-ontwikkeling",
              description: "Creëer een doelgerichte bedrijfscultuur die aansluit bij uw strategie en waarden voor duurzame prestaties."
            }, {
              title: "Leiderschaps- & Teamontwikkeling",
              description: "Rust uw leiders en teams uit met de mindsets, vaardigheden en gedragingen die nodig zijn om positieve verandering te stimuleren."
            }, {
              title: "Executive coaching",
              description: "Persoonlijke begeleiding voor leidinggevenden om effectiever te opereren en organisatiedoelen te realiseren."
            }].map((service, index) => <AnimatedSection key={index} className="p-6 border border-gray-100 rounded-lg hover:border-primary/20 transition-all duration-300 hover:shadow-sm" animation="fade-in" delay={index * 0.1}>
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </AnimatedSection>)}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
              <h2 className="text-3xl font-display font-bold mb-4">Positief. Scherp. Betrokken.</h2>
              <p className="text-gray-600">"Een traject is geslaagd als gezamenlijke doelen helder zijn en spanningen op een positieve manier bespreekbaar worden gemaakt."</p>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-stretch gap-6">
                {["Positief: We geloven in het benadrukken van sterke punten en mogelijkheden, terwijl we constructief omgaan met uitdagingen.", "Scherp: We streven naar duidelijkheid en precisie, door complexe situaties te analyseren en tot de kern te komen.", "Betrokken: We bouwen authentieke relaties op door actief te luisteren en ons volledig in te zetten voor het succes van onze klanten."].map((value, index) => <AnimatedSection key={index} className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" animation="fade-in" delay={index * 0.1}>
                    <div className="flex">
                      <CircleCheck className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                      <p className="text-gray-700">{value}</p>
                    </div>
                  </AnimatedSection>)}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="max-w-xl mx-auto text-center" animation="fade-in">
              <h2 className="text-3xl font-display font-bold mb-4">Meer weten over DIM?</h2>
              <p className="text-gray-600 mb-8">
                We versturen een nieuwsbrief met kennis en inzichten over verandering in moedige organisaties.
              </p>
              <Link to="/contact" className="btn-primary">
                Schrijf je in
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default MinimalistVariant;