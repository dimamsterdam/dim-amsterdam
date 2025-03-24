
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/content/heroContent";

const MinimalistHeroSection = () => {
  return <section className="min-h-screen pt-32 pb-20 flex items-center py-[44px]">
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
              {heroContent.tags.map((tag, index) => {
                let tagUrl = "";
                if (tag === "Organisatieontwikkeling") {
                  tagUrl = "/diensten/organisatieontwikkeling";
                } else if (tag === "Leiderschaps- & Teamontwikkeling") {
                  tagUrl = "/diensten/leiderschapsontwikkeling";
                } else if (tag === "Executive coaching") {
                  tagUrl = "/diensten/executive-coaching";
                }
                
                return (
                  <Link 
                    key={index} 
                    to={tagUrl} 
                    className="inline-block text-sm px-3 py-1 rounded-full bg-gray-50 text-gray-600 font-medium shadow-md transition-colors hover:bg-gray-100 hover:text-[#F97316] border border-gray-100"
                    style={{ 
                      textShadow: "0px 2px 1px rgba(255,255,255,1)",
                      boxShadow: "0px 2px 3px rgba(0,0,0,0.1), inset 0px 1px 0px rgba(255,255,255,1)"
                    }}
                  >
                    {tag}
                  </Link>
                );
              })}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-700 leading-tight">
              Samen creëren we meer maatschappelijke <span className="text-[#F97316]">impact</span> &amp; meer <span className="text-[#F97316]">werkplezier</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">DIM ondersteunt (top-)leidinggevenden in persoonlijke, team- en organisatieontwikkeling binnen de complexe dynamiek van het publiek domein.</p>
            
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
              <img src="/lovable-uploads/086e0667-427c-4066-91f1-2f1123a98a4c.png" alt="Professional collaboration" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default MinimalistHeroSection;
