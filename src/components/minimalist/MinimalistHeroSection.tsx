
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/content/heroContent";
import { useEffect, useState } from "react";

const MinimalistHeroSection = () => {
  // Animation debug state
  const [animationDebug, setAnimationDebug] = useState({
    blob1: { x: 0, y: 0, scale: 1 },
    blob2: { x: 0, y: 0, scale: 1 },
    blob3: { x: 0, y: 0, scale: 1 },
    blob4: { x: 0, y: 0, scale: 1 }
  });

  // Animation controls
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  const controls4 = useAnimationControls();

  // Debug logger for animation values
  useEffect(() => {
    const logInterval = setInterval(() => {
      console.log("Animation Debug Values:", animationDebug);
    }, 5000); // Log every 5 seconds
    
    return () => clearInterval(logInterval);
  }, [animationDebug]);

  // Start animations and configure update callbacks
  useEffect(() => {
    const animate = async () => {
      // Start animations and ensure they run
      console.log("Starting animations...");
      
      // Blob 1 animation
      controls1.start({
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
        transition: {
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          onUpdate: (latest) => {
            setAnimationDebug(prev => ({
              ...prev,
              blob1: latest as any
            }));
          }
        }
      });
      
      // Blob 2 animation
      controls2.start({
        x: [0, -40, 0],
        y: [0, 30, 0],
        scale: [1, 1.1, 1],
        transition: {
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 2,
          onUpdate: (latest) => {
            setAnimationDebug(prev => ({
              ...prev,
              blob2: latest as any
            }));
          }
        }
      });
      
      // Blob 3 animation
      controls3.start({
        x: [0, 50, 0],
        y: [0, 20, 0],
        scale: [1, 1.08, 1],
        transition: {
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 1,
          onUpdate: (latest) => {
            setAnimationDebug(prev => ({
              ...prev,
              blob3: latest as any
            }));
          }
        }
      });
      
      // Blob 4 animation
      controls4.start({
        x: [0, -30, 0],
        y: [0, 40, 0],
        scale: [1, 1.12, 1],
        transition: {
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 3,
          onUpdate: (latest) => {
            setAnimationDebug(prev => ({
              ...prev,
              blob4: latest as any
            }));
          }
        }
      });
    };
    
    animate();
    
    // Log that animations have been initiated
    console.log("Animation setup complete");
    
    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
      controls4.stop();
      console.log("Animations stopped");
    };
  }, [controls1, controls2, controls3, controls4]);

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center py-[44px] relative overflow-hidden">
      {/* Animation debug panel - only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-20 right-4 bg-black/80 text-white p-2 text-xs rounded z-50 w-40 overflow-auto">
          <div>Blob1: x:{animationDebug.blob1.x?.toFixed(2)}, y:{animationDebug.blob1.y?.toFixed(2)}</div>
          <div>Blob2: x:{animationDebug.blob2.x?.toFixed(2)}, y:{animationDebug.blob2.y?.toFixed(2)}</div>
          <div>Blob3: x:{animationDebug.blob3.x?.toFixed(2)}, y:{animationDebug.blob3.y?.toFixed(2)}</div>
          <div>Blob4: x:{animationDebug.blob4.x?.toFixed(2)}, y:{animationDebug.blob4.y?.toFixed(2)}</div>
        </div>
      )}
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-60 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl"
          animate={controls1}
          initial={{ x: 0, y: 0, scale: 1 }}
        />
        <motion.div 
          className="absolute -bottom-80 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#F97316]/30 to-primary/40 blur-3xl"
          animate={controls2}
          initial={{ x: 0, y: 0, scale: 1 }}
        />
        <motion.div 
          className="absolute top-60 left-80 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-accent/30 to-[#F97316]/30 blur-3xl"
          animate={controls3}
          initial={{ x: 0, y: 0, scale: 1 }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-blue-400/20 to-purple-500/20 blur-3xl"
          animate={controls4}
          initial={{ x: 0, y: 0, scale: 1 }}
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
