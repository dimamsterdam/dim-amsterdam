
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Star, Zap, Heart, Smile } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CreativeVariant = () => {
  const [scrollY, setScrollY] = useState(0);

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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener('click', handleLinkClick);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Random floating circles for creative elements
  const floatingElements = Array(8).fill(0).map((_, i) => ({
    size: 20 + Math.random() * 100,
    left: Math.random() * 100,
    top: Math.random() * 200,
    animationDuration: 10 + Math.random() * 20,
    animationDelay: Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.2
  }));

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow relative">
        {/* Creative floating elements in the background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {floatingElements.map((el, index) => (
            <div 
              key={index}
              className="absolute rounded-full bg-primary"
              style={{
                width: `${el.size}px`,
                height: `${el.size}px`,
                left: `${el.left}%`,
                top: `${el.top}vh`,
                opacity: el.opacity,
                animation: `float ${el.animationDuration}s ease-in-out infinite`,
                animationDelay: `${el.animationDelay}s`,
                transform: `translateY(${Math.sin(scrollY / 200 + index) * 20}px)`
              }}
            ></div>
          ))}
        </div>
        
        {/* Hero Section - Creative */}
        <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>
          
          <div className="container relative mx-auto px-4 md:px-6 z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary text-3xl font-bold mb-6">
                  D
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-3xl"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight text-gray-700 mb-8">
                  Samen creëren we meer maatschappelijke <span className="text-black relative inline-block">
                    impact & werkplezier
                    <span className="absolute -bottom-1 left-0 right-0 h-2 bg-primary/30 -z-10"></span>
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Wij ondersteunen organisaties in het sociaal domein bij het versterken van hun cultuur, 
                teams en leiderschap.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center py-4 px-8 overflow-hidden rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <span>Begin de reis</span>
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative mt-16 mx-auto max-w-4xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl border-4 border-white relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <img 
                  src="/lovable-uploads/f7236ec5-17e7-46a7-b551-7cf4b4198147.png" 
                  alt="Professional collaboration" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/40 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials - Creative */}
        <section className="py-24 bg-[#e3eff6] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection 
                className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 overflow-hidden"
                animation="scale-in"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 text-center md:text-left">
                    <span className="inline-block text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-3">
                      Klantervaring
                    </span>
                    <div className="flex justify-center md:justify-start">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-xl md:text-2xl font-display font-medium text-gray-800 mb-6 relative">
                      <span className="absolute -left-6 top-0 text-6xl text-primary/20 font-serif">"</span>
                      DIM's cultural transformation program has been a game-changer for our organization. 
                      Our employee engagement scores have increased by 32% and we've seen tangible improvements 
                      in collaboration across departments.
                      <span className="absolute -right-6 bottom-0 text-6xl text-primary/20 font-serif">"</span>
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">SJ</div>
                      <div>
                        <p className="font-semibold text-gray-800">Sarah Johnson</p>
                        <p className="text-gray-600">Chief People Officer, TechVision Inc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Services - Creative */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <span className="text-primary text-3xl font-bold">S</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                <span className="relative inline-block">
                  Dit is wat we doen
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-primary/30 -z-10"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Onze geïntegreerde aanpak richt zich op het volledige spectrum van uitdagingen 
                op het gebied van cultuur en leiderschap in moderne organisaties.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Organisatie-ontwikkeling",
                  description: "Creëer een doelgerichte bedrijfscultuur die aansluit bij uw strategie en waarden voor duurzame prestaties.",
                  icon: "🏢",
                  color: "from-blue-500 to-cyan-400"
                },
                {
                  title: "Leiderschaps- & Teamontwikkeling",
                  description: "Rust uw leiders en teams uit met de mindsets, vaardigheden en gedragingen die nodig zijn om positieve verandering te stimuleren.",
                  icon: "👥",
                  color: "from-primary to-blue-400"
                },
                {
                  title: "Executive coaching",
                  description: "Persoonlijke begeleiding voor leidinggevenden om effectiever te opereren en organisatiedoelen te realiseren.",
                  icon: "🚀",
                  color: "from-purple-500 to-indigo-500"
                }
              ].map((service, index) => (
                <AnimatedSection 
                  key={index} 
                  className="group relative overflow-hidden rounded-3xl transition-all duration-500"
                  animation="slide-from-right"
                  delay={index * 0.2}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-90 transition-all duration-500 group-hover:opacity-100"
                       style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                       className={`${service.color}`}>
                  </div>
                  
                  <div className="relative p-8 md:p-10 text-white h-full flex flex-col">
                    <div className="text-5xl mb-6">{service.icon}</div>
                    
                    <h3 className="text-2xl font-display font-bold mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/90 mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    <Link 
                      to="/diensten" 
                      className="inline-flex items-center text-white font-medium mt-auto"
                    >
                      <span className="border-b border-white/70 pb-1 transition-all group-hover:border-white">Ontdek meer</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values - Creative */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                <span className="text-accent-foreground text-3xl font-bold">V</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                <span className="relative inline-block">
                  Positief. Scherp. Betrokken.
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-accent/30 -z-10"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 italic">
                "Een traject is geslaagd als gezamenlijke doelen helder zijn en spanningen op een positieve manier 
                bespreekbaar worden gemaakt. Als er gelachen wordt zonder confrontatie uit de weg te gaan kan 
                iedereen groeien. En worden de mooiste resultaten geboekt."
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Positief",
                  description: "We geloven in het benadrukken van sterke punten en mogelijkheden, terwijl we constructief omgaan met uitdagingen.",
                  icon: <Smile className="w-8 h-8 text-white" />,
                  color: "bg-gradient-to-br from-green-400 to-emerald-500"
                },
                {
                  title: "Scherp",
                  description: "We streven naar duidelijkheid en precisie, door complexe situaties te analyseren en tot de kern te komen.",
                  icon: <Zap className="w-8 h-8 text-white" />,
                  color: "bg-gradient-to-br from-amber-400 to-orange-500"
                },
                {
                  title: "Betrokken",
                  description: "We bouwen authentieke relaties op door actief te luisteren en ons volledig in te zetten voor het succes van onze klanten.",
                  icon: <Heart className="w-8 h-8 text-white" />,
                  color: "bg-gradient-to-br from-pink-400 to-rose-500"
                }
              ].map((value, index) => (
                <AnimatedSection
                  key={index}
                  className="transform transition-all duration-300 hover:-translate-y-2"
                  animation="scale-in"
                  delay={index * 0.2}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-lg h-full">
                    <div className="absolute top-0 left-0 right-0 h-24 z-10">
                      <div className={`w-full h-full ${value.color}`}></div>
                    </div>
                    
                    <div className="relative pt-12 pb-8 px-8 bg-white z-20 h-full">
                      <div className="relative -mt-16 mb-6">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-20 ${value.color}`}>
                          {value.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold mb-4">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA - Creative */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYtMWgxdjF6TTM0IDI5aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYtMWgxdjF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center">
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                  Nieuwsbrief
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Meer weten over <span className="text-primary">DIM</span>?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
                  We versturen een nieuwsbrief met kennis en inzichten over verandering in moedige organisaties.
                  Blijf op de hoogte van de nieuwste inzichten en strategieën.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input 
                    type="email" 
                    placeholder="Jouw e-mailadres" 
                    className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder:text-white/60 flex-grow focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Link 
                    to="/contact" 
                    className="btn-primary px-8 py-4 rounded-full text-lg font-medium whitespace-nowrap bg-gradient-to-r from-primary to-blue-600 border-0 hover:from-blue-600 hover:to-primary transition-all duration-300"
                  >
                    Schrijf je in
                  </Link>
                </div>
                
                <p className="text-white/60 text-sm mt-4">
                  We respecteren je privacy. Je kunt je altijd uitschrijven.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreativeVariant;
