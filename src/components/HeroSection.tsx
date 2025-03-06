import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { heroContent } from "@/content/heroContent";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 500;
      const scrollFraction = Math.min(scrollTop / maxScroll, 1);
      setScrolled(scrollFraction);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl"
        style={{ 
          transform: `translate(${scrolled * 50}px, ${scrolled * -30}px)`,
          opacity: 1 - scrolled * 0.5
        }}
      ></div>
      <div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-accent/20 to-primary/30 blur-3xl"
        style={{ 
          transform: `translate(${scrolled * -50}px, ${scrolled * 30}px)`,
          opacity: 1 - scrolled * 0.5
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                variants={fadeVariants}
                custom={0}
                initial="initial"
                animate="animate"
              >
                {heroContent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block text-sm px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6"
                variants={fadeVariants}
                custom={1}
                initial="initial"
                animate="animate"
              >
                Samen creëren we meer maatschappelijke <span className="text-highlight">impact & werkplezier</span>
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
                variants={fadeVariants}
                custom={2}
                initial="initial"
                animate="animate"
              >
                {heroContent.description}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeVariants}
                custom={3}
                initial="initial"
                animate="animate"
              >
                <Link to="/contact" className="btn-primary">
                  {heroContent.cta.primary}
                </Link>
                <Link to="/case-studies" className="btn-secondary">
                  {heroContent.cta.secondary}
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gradient-to-tr from-primary/80 to-accent">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3"
                  alt="Team collaboration"
                  className="w-full h-full object-cover mix-blend-overlay opacity-60"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-medium text-center max-w-xs">
                  Elevate your organization's potential
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
