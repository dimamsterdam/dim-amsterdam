
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
    initial: {
      opacity: 0,
      y: 20
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    })
  };

  // Correctly map tags to their service page routes
  const tagRoutes = {
    "Organisatieverandering": "/diensten/organisatieverandering",
    "Leiderschaps- & Teamontwikkeling": "/diensten/leiderschapsontwikkeling",
    "Executive coaching": "/diensten/executive-coaching"
  };
  
  return (
    <section className="relative min-h-screen flex items-center pt-12 md:pt-12 overflow-hidden">
      {/* Static gradients affected by scroll */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl" 
        style={{
          transform: `translate(${scrolled * 50}px, ${scrolled * -30}px)`,
          opacity: 1 - scrolled * 0.5
        }}
      />
      <div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-accent/30 to-primary/40 blur-3xl" 
        style={{
          transform: `translate(${scrolled * -50}px, ${scrolled * 30}px)`,
          opacity: 1 - scrolled * 0.5
        }}
      />

      {/* Animated gradient blobs */}
      <motion.div 
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F97316]/30 to-primary/30 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          opacity: 1 - scrolled * 0.7
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-primary/30 to-[#F97316]/30 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 3,
        }}
        style={{
          opacity: 1 - scrolled * 0.7
        }}
      />
      <motion.div 
        className="absolute top-60 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-accent/30 to-primary/30 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1.5,
        }}
        style={{
          opacity: 1 - scrolled * 0.7
        }}
      />
      <motion.div 
        className="absolute top-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-blue-400/30 to-purple-500/30 blur-3xl"
        animate={{
          x: [0, 25, 0],
          y: [0, -35, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          opacity: 1 - scrolled * 0.7
        }}
      />

      <div className="container mx-auto px-4 md:px-6 z-10 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <motion.div className="flex flex-wrap gap-2 mb-6" variants={fadeVariants} custom={0} initial="initial" animate="animate">
                {heroContent.tags.map((tag, index) => {
                  const route = tagRoutes[tag as keyof typeof tagRoutes] || "/";
                  return (
                    <Link 
                      key={index} 
                      to={route}
                      className="inline-block text-sm px-3 py-1 rounded-full bg-primary/15 text-primary font-medium shadow-sm hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Link>
                  );
                })}
              </motion.div>
              
              <motion.h1 variants={fadeVariants} custom={1} initial="initial" animate="animate" className="text-4xl md:text-4xl font-display font-bold tracking-tight leading-tight mb-6 text-gray-700">
                Samen creëren we meer maatschappelijke <span 
                  className="text-black"
                >impact & werkplezier</span>
              </motion.h1>
              
              <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8" variants={fadeVariants} custom={2} initial="initial" animate="animate">
                {heroContent.description}
              </motion.p>
              
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeVariants} custom={3} initial="initial" animate="animate">
                
              </motion.div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div className="relative" initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.4,
            duration: 0.8,
            ease: [0.04, 0.62, 0.23, 0.98]
          }}>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img src="/lovable-uploads/f7236ec5-17e7-46a7-b551-7cf4b4198147.png" alt="Professional networking event" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
