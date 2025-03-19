
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/content/heroContent";

const MinimalistHeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center py-[44px] relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 w-full h-full opacity-30 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-60 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -bottom-80 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#F97316]/10 to-primary/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute top-60 left-80 w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-accent/20 to-[#F97316]/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {heroContent.tags.map((tag, index) => (
                <Link 
                  key={index} 
                  to={tag === "Organisatieverandering" 
                    ? "/aanbod/organisatieverandering" 
                    : tag === "Leiderschaps- & Teamontwikkeling" 
                      ? "/aanbod/leiderschapsontwikkeling" 
                      : "/aanbod/executive-coaching"}
                  className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#F97316]"
                >
                  {tag}
                </Link>
              ))}
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
          
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 0.2,
              duration: 0.5
            }}
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img src="/lovable-uploads/f7236ec5-17e7-46a7-b551-7cf4b4198147.png" alt="Professional collaboration" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistHeroSection;
