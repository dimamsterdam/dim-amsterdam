import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { heroContent } from "@/content/heroContent";
import EnhancedTestimonialsGallery from "@/components/EnhancedTestimonialsGallery";
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
                <div className="flex flex-wrap gap-2 mb-6">
                  {heroContent.tags.map((tag, index) => <Link key={index} to={`/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#F97316]">
                      {tag}
                    </Link>)}
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-700 leading-tight">
                  Samen creëren we meer maatschappelijke <span className="text-[#F97316]">impact</span> &amp; meer <span className="text-[#F97316]">werkplezier</span>
                </h1>
                
                <p className="text-lg text-gray-600 max-w-lg">Wij ondersteunen (top-)leidinggevenden in persoonlijke, team- en organisatieontwikkeling binnen de complexe dynamiek van het publiek domein.</p>
                
                <div className="pt-4">
                  <Link to="/contact" className="inline-flex items-center border-b-2 border-primary text-primary font-medium py-1 transition-all hover:border-primary/70 hover:text-primary/70 group">
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
        
        <section className="py-16 bg-gradient-to-br from-[#e3eff6] to-[#f0f7fc] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <AnimatedSection animation="fade-in" className="max-w-5xl mx-auto">
              <EnhancedTestimonialsGallery />
            </AnimatedSection>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16" animation="fade-in">
              <h2 className="text-3xl font-display font-bold mb-4">Wat we doen</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Met oog voor wat goed gaat, werken we samen aan wat beter kan.</p>
              
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection className="p-6 border border-gray-100 rounded-lg hover:border-primary/20 transition-all duration-300 hover:shadow-sm" animation="fade-in" delay={0.1}>
                <h3 className="text-xl font-display font-semibold mb-3">Organisatie-ontwikkeling</h3>
                <p className="text-gray-600">Een integrale aanpak en meervoudig perspectief zijn kenmerkend voor onze werkwijze. Dankzij interventies vanuit verschillende invalshoeken realiseren we wendbaarheid en langdurig resultaat.</p>
              </AnimatedSection>
              
              <AnimatedSection className="p-6 border border-gray-100 rounded-lg hover:border-primary/20 transition-all duration-300 hover:shadow-sm" animation="fade-in" delay={0.2}>
                <h3 className="text-xl font-display font-semibold mb-3">Leiderschaps- & Teamontwikkeling</h3>
                <p className="text-gray-600">Op basis van beproefde leiderschapsconcepten en ruime kennis en ervaring in het publieke domein verzorgen wij maatwerk leiderschapsprogramma's gericht op concreet resultaat, intervisies en teamontwikkeling.</p>
              </AnimatedSection>
              
              <AnimatedSection className="p-6 border border-gray-100 rounded-lg hover:border-primary/20 transition-all duration-300 hover:shadow-sm" animation="fade-in" delay={0.3}>
                <h3 className="text-xl font-display font-semibold mb-3">Executive coaching</h3>
                <p className="text-gray-600">Effectiever werken met meer plezier en vanuit meer ontspanning? Samen onderzoeken we welke patronen helpend zijn en waar ruimte ligt voor ontwikkeling.</p>
              </AnimatedSection>
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
                <AnimatedSection className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" animation="fade-in" delay={0}>
                  <div className="flex">
                    <CircleCheck className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                    <p className="text-gray-700">Veranderen en ontwikkelen begint bij weten en waarderen wat goed gaat. Vanuit (zelf-)vertrouwen ontstaat ruimte om ook kritisch te kijken naar wat beter kan en wat beter moet.</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" animation="fade-in" delay={0.1}>
                  <div className="flex">
                    <CircleCheck className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                    <p className="text-gray-700">Scherp: We streven naar duidelijkheid en precisie, door complexe situaties te analyseren en tot de kern te komen.</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" animation="fade-in" delay={0.2}>
                  <div className="flex">
                    <CircleCheck className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
                    <p className="text-gray-700">Betrokken: We bouwen authentieke relaties op door actief te luisteren en ons volledig in te zetten voor het succes van onze klanten.</p>
                  </div>
                </AnimatedSection>
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