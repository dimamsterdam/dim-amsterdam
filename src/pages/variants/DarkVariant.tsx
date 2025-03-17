
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, BarChart2, Users, UserCog, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TestimonialsGallery from "@/components/TestimonialsGallery";

const DarkVariant = () => {
  // Smooth scroll behavior for the entire site
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
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

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-zinc-100">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Dark Theme */}
        <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800"></div>
          <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute left-0 bottom-1/4 w-1/4 h-1/4 bg-accent/15 rounded-full filter blur-3xl"></div>
          
          <div className="container relative mx-auto px-4 md:px-6 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary mb-4">
                    Transformatie • Cultuur • Leiderschap
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Samen creëren we meer maatschappelijke <span className="text-primary">impact & werkplezier</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-zinc-300 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Wij ondersteunen organisaties in het sociaal domein bij het versterken van hun cultuur, 
                  teams en leiderschap.
                </motion.p>
                
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center group"
                  >
                    <span className="relative overflow-hidden">
                      <span className="btn-primary py-3 px-6 flex items-center">
                        <span>Neem contact op</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </span>
                  </Link>
                </motion.div>
              </div>
              
              <div className="lg:col-span-6">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="/lovable-uploads/f7236ec5-17e7-46a7-b551-7cf4b4198147.png" 
                      alt="Professional collaboration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '10+', label: 'Jaren ervaring' },
                { number: '150+', label: 'Tevreden klanten' },
                { number: '90%', label: 'Klantbehoud' }
              ].map((stat, index) => (
                <AnimatedSection
                  key={index}
                  className="bg-zinc-800/80 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 shadow-md text-center"
                  animation="fade-in"
                  delay={0.1 * index}
                >
                  <h3 className="text-3xl font-display font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-zinc-300">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials - Dark */}
        <section className="py-20 bg-zinc-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
              <div className="lg:w-1/3">
                <AnimatedSection animation="slide-from-left" className="space-y-6">
                  <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground">
                    Klantervaringen
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Wat onze klanten zeggen</h2>
                  <p className="text-zinc-300">
                    Ontdek hoe we andere organisaties hebben geholpen hun doelen te bereiken door cultuur, 
                    leiderschap en teamontwikkeling.
                  </p>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Testimonials Gallery component */}
            <TestimonialsGallery />
          </div>
        </section>
        
        {/* Services - Dark */}
        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
              <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary mb-4">
                Onze Diensten
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">Dit is wat we doen</h2>
              <p className="text-lg text-zinc-300">
                Onze geïntegreerde aanpak richt zich op het volledige spectrum van uitdagingen 
                op het gebied van cultuur en leiderschap in moderne organisaties.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart2 className="w-6 h-6" />,
                  title: "Organisatie-ontwikkeling",
                  description: "Creëer een doelgerichte bedrijfscultuur die aansluit bij uw strategie en waarden voor duurzame prestaties."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Leiderschaps- & Teamontwikkeling",
                  description: "Rust uw leiders en teams uit met de mindsets, vaardigheden en gedragingen die nodig zijn om positieve verandering te stimuleren."
                },
                {
                  icon: <UserCog className="w-6 h-6" />,
                  title: "Executive coaching",
                  description: "Persoonlijke begeleiding voor leidinggevenden om effectiever te opereren en organisatiedoelen te realiseren."
                }
              ].map((service, index) => (
                <AnimatedSection 
                  key={index} 
                  className="group relative bg-zinc-800 p-8 rounded-2xl shadow-md border border-zinc-700 hover:border-primary/30 transition-all duration-300"
                  animation="fade-in"
                  delay={index * 0.1}
                >
                  <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-primary/15 text-primary">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-300 mb-6">
                    {service.description}
                  </p>
                  
                  <Link 
                    to="/diensten" 
                    className="inline-flex items-center text-primary font-medium group-hover:underline"
                  >
                    <span>Lees meer</span>
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values - Dark */}
        <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/15 rounded-full filter blur-3xl"></div>
          
          <div className="container relative mx-auto px-4 md:px-6 z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
              <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground mb-4">
                Waar we voor staan
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">Positief. Scherp. Betrokken.</h2>
              <p className="text-lg text-zinc-300">
                "Een traject is geslaagd als gezamenlijke doelen helder zijn en spanningen op een positieve manier 
                bespreekbaar worden gemaakt. Als er gelachen wordt zonder confrontatie uit de weg te gaan kan 
                iedereen groeien. En worden de mooiste resultaten geboekt."
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Positief",
                  description: "We geloven in het benadrukken van sterke punten en mogelijkheden, terwijl we constructief omgaan met uitdagingen."
                },
                {
                  title: "Scherp",
                  description: "We streven naar duidelijkheid en precisie, door complexe situaties te analyseren en tot de kern te komen."
                },
                {
                  title: "Betrokken",
                  description: "We bouwen authentieke relaties op door actief te luisteren en ons volledig in te zetten voor het succes van onze klanten."
                }
              ].map((value, index) => (
                <AnimatedSection
                  key={index}
                  className="bg-zinc-800/70 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700 shadow-md"
                  animation="fade-in"
                  delay={index * 0.1}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/15 text-primary mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-zinc-300">{value.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA - Dark */}
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-primary/90 backdrop-blur-lg">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-t from-purple-800/30 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10 px-8 py-16 md:py-20 md:px-16">
                <div className="max-w-3xl mx-auto text-center">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Meer weten over DIM?</h2>
                    <p className="text-xl text-primary-foreground/90 mb-8">
                      We versturen een nieuwsbrief met kennis en inzichten over verandering in moedige organisaties.
                    </p>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors group shadow-lg"
                    >
                      <span>Schrijf je in</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DarkVariant;
